// Testes do conteúdo da página: a marca NovJ Digital e as seções do documento "NovJ Digital atualizado".
// O index.html traz tudo escrito direto no HTML (para o Google e para quem não roda JavaScript).
// Se alguém mudar os dados e esquecer de rodar "npm run gerar", o teste avisa.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { SERVICOS } from "../public/js/servicos.js";
import { injetar } from "../public/js/conteudo.js";

const INDEX = fileURLToPath(new URL("../public/index.html", import.meta.url));
const html = readFileSync(INDEX, "utf8").replace(/\r\n/g, "\n");
// Só o que o visitante lê: sem os dados para o Google, sem as tags e com os espaços normalizados
const corpo = html.split("<body>")[1];
const texto = corpo.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const secao = (id) => {
  const m = html.match(new RegExp(`<section id="${id}"[\\s\\S]*?</section>`));
  assert.ok(m, `falta a seção #${id}`);
  return m[0].replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ");
};

test("o index.html está em dia com os dados (rode 'npm run gerar' se este teste falhar)", () => {
  assert.equal(injetar(html), html);
});

test("marca NovJ Digital: nome, título da aba e rodapé, sem o nome antigo no texto", () => {
  assert.match(html, /<title>NovJ Digital[^<]*<\/title>/);
  assert.ok(html.includes('<span class="nome1">NovJ</span> <span class="nome2">Digital</span>'), "nome com espaço: NovJ Digital");
  // O aviso da transição saiu: "JhemisonTech" fica só nos dados para o Google (alternateName)
  assert.ok(!/jhemisontech/i.test(texto), "nome antigo no texto da página");
  assert.ok(!html.includes('class="transicao"'));
  assert.match(html, /<footer class="rodape">© 2026 NovJ Digital<\/footer>/);
  assert.ok(texto.includes("Seu negócio na vitrine da internet, sem complicação."));
});

test("menu com as sete seções, na ordem da página (Projetos logo depois de Serviços)", () => {
  const nav = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/)[1];
  const links = [...nav.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].map((m) => [m[1], m[2]]);
  assert.deepEqual(links, [
    ["#topo", "Início"], ["#servicos", "Serviços"], ["#projetos", "Projetos"], ["#como-funciona", "Como funciona"],
    ["#sobre", "Sobre"], ["#perguntas", "Perguntas frequentes"], ["#contato", "Contato"],
  ]);
});

test("seções na ordem: topo, você se identifica, benefícios, serviços, projetos, contratação, como funciona, sobre, confiança, perguntas, contato", () => {
  const ids = [...html.matchAll(/<section id="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(ids, ["topo", "dores", "beneficios", "servicos", "projetos", "contratacao", "como-funciona", "sobre", "confianca", "perguntas", "contato"]);
});

test("você se identifica: as situações do dia a dia e o convite para conversar", () => {
  const d = secao("dores");
  assert.ok(d.includes("Você se identifica?"));
  // Uma situação por serviço (site e IA com duas), e só uma falando de responder mensagens
  assert.equal((html.match(/<ul class="dores">([\s\S]*?)<\/ul>/)[1].match(/<li>/g) || []).length, 7);
  for (const t of ["não encontra um site", "anota pedido na mão", "no fim do mês é difícil saber quanto entrou",
    "dois clientes marcam no mesmo horário", "demorou para responder", "Tarefas repetitivas"]) assert.ok(d.includes(t), t);
  assert.ok(d.includes("Quero resolver isso no meu negócio"));
});

test("serviços no celular: listas longas com botão 'Ver todos', escondido sem JavaScript", () => {
  const botoes = [...html.matchAll(/<button type="button" class="ver-todos" hidden>([^<]+)<\/button>/g)].map((m) => m[1]);
  assert.deepEqual(botoes, ["Ver todos os recursos (+6)", "Ver todos os recursos (+10)", "Ver todos os exemplos (+2)",
    "Ver todos os recursos (+2)", "Ver todos os recursos (+5)"]);
  const css = readFileSync(fileURLToPath(new URL("../public/css/estilo.css", import.meta.url)), "utf8");
  assert.match(css, /\.lista-curta \.inclui li:nth-child\(n\+6\)/, "esconde a partir do 6º item");
  assert.match(css, /\.ver-todos \{ display: none; \}/, "no computador o botão não aparece");
});

test("topo: título, subtítulo, texto complementar e os dois botões", () => {
  const t = secao("topo");
  assert.ok(t.includes("Seu negócio na vitrine da internet , sem complicação.") || t.includes("Seu negócio na vitrine da internet, sem complicação."));
  assert.ok(t.includes("Sites profissionais, lojas virtuais, sistemas sob medida e automações para ajudar pequenos negócios a vender mais, organizar a rotina e atender melhor seus clientes."));
  assert.ok(t.includes("Você explica como funciona o seu negócio. A NovJ Digital ajuda a transformar essa rotina em uma solução digital simples e funcional."));
  assert.match(html, /<a id="zap-topo" class="btn" href="https:\/\/wa\.me\/5573988045634\?text=[^"]+"[^>]*>Falar pelo WhatsApp<\/a>/);
  assert.ok(html.includes('<a id="ver-solucoes" class="btn-secundario" href="#servicos">Ver soluções</a>'));
});

test("benefícios: título, texto e os quatro benefícios", () => {
  const b = secao("beneficios");
  assert.ok(b.includes("Tecnologia feita para a realidade do seu negócio"));
  assert.ok(b.includes("Você não precisa entender de programação para ter uma solução profissional."));
  for (const t of ["Mais profissionalismo", "Mais organização", "Mais agilidade", "Suporte direto"]) assert.ok(b.includes(t), t);
  assert.ok(b.includes("Fale diretamente com Jhemison pelo WhatsApp, sem intermediários e sem atendimento impessoal."));
});

test("serviços: os cinco do documento, cada um com título, lista e o botão próprio", () => {
  assert.deepEqual(SERVICOS.map((s) => s.rotulo), ["Sites profissionais", "Lojas virtuais", "Sistemas sob medida", "Agendamento online", "Agentes de IA e automações"]);
  assert.deepEqual(SERVICOS.map((s) => s.cta), ["Quero criar meu site", "Quero vender pela internet", "Quero organizar meu negócio", "Quero uma agenda online", "Quero automatizar meu atendimento"]);
  const s = secao("servicos");
  for (const titulo of ["Sites para colocar seu negócio na internet", "Venda seus produtos pela internet", "Um sistema adaptado ao seu negócio",
    "Deixe o cliente marcar o horário sozinho", "Atenda melhor sem precisar responder tudo manualmente"]) {
    assert.ok(html.includes(`<h3>${titulo}</h3>`), titulo);
  }
  for (const cta of SERVICOS.map((x) => x.cta)) assert.ok(s.includes(`${cta} →`), cta);
  assert.equal(SERVICOS[0].itens.length, 11);
  assert.equal(SERVICOS[1].itens.length, 15);
  assert.deepEqual(SERVICOS[2].grupos.map((g) => g.nome), ["Barbearias e salões", "Academias", "Lanchonetes e restaurantes"]);
  assert.equal(SERVICOS[3].itens.length, 7);
  assert.equal(SERVICOS[4].itens.length, 10);
  assert.ok(s.includes("Público indicado"));
  assert.ok(s.includes("Os recursos disponíveis dependem da solução contratada e das integrações necessárias para o negócio."));
  assert.ok(s.includes("O atendimento automatizado não substitui necessariamente o atendimento humano em todas as situações."));
  assert.ok(s.includes("Quando for utilizada a API oficial do WhatsApp, podem existir custos relacionados às mensagens"));
  assert.equal(SERVICOS.filter((x) => x.destaque).length, 1);
});

test("sem promessas que não dá para garantir, e sem preços na página", () => {
  assert.ok(!/vendas garantidas|primeiro lugar no Google|Pronto para aparecer no Google/i.test(texto));
  assert.ok(!/R\$/.test(html), "nenhum valor em reais aparece na página");
});

test("modelo de contratação: implantação, mensalidade, pequenas alterações e o que é cobrado à parte", () => {
  const c = secao("contratacao");
  assert.ok(c.includes("Implantação uma vez. Suporte e manutenção todos os meses."));
  for (const t of ["A implantação pode incluir", "A mensalidade pode incluir, conforme a proposta", "Exemplos de pequenas alterações", "O que pode ser cobrado à parte"]) {
    assert.ok(c.includes(t), t);
  }
  assert.ok(c.includes("Até duas pequenas alterações por mês"));
  assert.ok(c.includes("Tudo deve ser combinado antes da execução."));
  assert.ok(!html.includes("Toda mensalidade inclui"), "o quadro antigo saiu");
});

test("como funciona: as quatro etapas do documento e o convite para conversar", () => {
  const c = secao("como-funciona");
  assert.ok(c.includes("Sem complicação e sem você precisar entender de tecnologia"));
  for (const t of ["A gente conversa", "Você vê uma prévia", "Ajustamos juntos", "Seu negócio fica no ar"]) assert.ok(c.includes(t), t);
  assert.ok(c.includes("Depois da aprovação, a solução é publicada."));
  assert.ok(c.includes("Quero conversar sobre meu projeto"));
});

test("sobre: quem está por trás da NovJ Digital, com foto e a frase de destaque", () => {
  const s = secao("sobre");
  assert.match(html, /img\/jhemison\.jpg/);
  assert.ok(s.includes("Quem está por trás da NovJ Digital?"));
  assert.ok(s.includes("Olá! Eu sou o Jhemison, desenvolvedor de sites e sistemas. Também crio automações e atendimentos com inteligência artificial para pequenos negócios."));
  assert.ok(!/especialista/i.test(s), "sem se apresentar como especialista");
  assert.ok(s.includes("sem intermediários e sem precisar explicar o seu problema várias vezes para pessoas diferentes"));
  assert.ok(s.includes("Tecnologia das grandes empresas, apresentada de um jeito simples para pequenos negócios."));
});

test("confiança e transparência: o que fica combinado antes de começar", () => {
  const c = secao("confianca");
  assert.ok(c.includes("Antes de começar, você recebe uma explicação sobre o que será desenvolvido"));
  for (const t of ["O que será entregue", "Prazo estimado", "Regras de cancelamento", "Condições para usar domínio próprio"]) assert.ok(c.includes(t), t);
});

test("contato: WhatsApp em destaque, número escrito e orçamento sem compromisso", () => {
  const c = secao("contato");
  assert.ok(c.includes("(73) 98804-5634"));
  assert.match(c, /orçamento sem compromisso/i);
  assert.ok(c.includes("Contar o que eu preciso"));
  assert.ok(c.includes("@novj.jhemison") && html.includes('href="https://instagram.com/novj.jhemison"'));
  assert.ok(c.includes("novj@outlook.com.br") && html.includes('href="mailto:novj@outlook.com.br"'));
  // No celular o botão do WhatsApp fica sempre à mão
  assert.match(html, /<a id="zap-flutuante" class="zap-flutuante" href="https:\/\/wa\.me\/5573988045634\?text=[^"]+"[^>]*aria-label="Falar pelo WhatsApp"/);
});

test("SEO: nome novo, endereço atual, descrição do tamanho certo e cidade só para o Google", () => {
  const descricao = html.match(/<meta name="description" content="([^"]+)"/)[1];
  assert.ok(descricao.length >= 120 && descricao.length <= 175, `tamanho ${descricao.length}`);
  for (const palavra of ["NovJ Digital", "sites profissionais", "lojas virtuais", "agendamento", "agentes de IA", "sem compromisso"]) {
    assert.ok(descricao.toLowerCase().includes(palavra.toLowerCase()), palavra);
  }
  assert.match(html, /<link rel="canonical" href="https:\/\/novj\.web\.app\/">/);
  assert.ok(!html.includes("jhemisontech.web.app"), "endereço antigo na página");
  // O deploy vai só para o site novj, no projeto novjdigital
  const firebase = JSON.parse(readFileSync(fileURLToPath(new URL("../firebase.json", import.meta.url)), "utf8"));
  assert.equal(firebase.hosting.site, "novj");
  assert.match(html, /<meta property="og:title" content="NovJ Digital[^"]*">/);
  assert.match(html, /"name":"NovJ Digital"/);
  assert.match(html, /"alternateName":"JhemisonTech"/);
  assert.match(html, /"addressLocality":"Itamaraju"/);
  assert.ok(!/Itamaraju|extremo sul/i.test(texto), "a cidade não aparece no texto da página");
});
