// Testes do conteúdo da página (public/js/servicos.js e public/js/conteudo.js) e do index.html já gravado.
// O index.html traz os cards, os serviços e o contato escritos direto no HTML (para o Google e para quem
// não roda JavaScript). Se alguém mudar os dados e esquecer de rodar "npm run gerar", o teste avisa.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { SERVICOS } from "../public/js/servicos.js";
import { injetar } from "../public/js/conteudo.js";

const INDEX = fileURLToPath(new URL("../public/index.html", import.meta.url));
const lf = (t) => t.replace(/\r\n/g, "\n");
const html = lf(readFileSync(INDEX, "utf8"));

test("serviços: cinco, em escada de valor, cada um com o 'ideal para' e uma mensagem própria", () => {
  assert.deepEqual(SERVICOS.map((s) => s.titulo), ["Landing Pages", "Sites Institucionais", "Lojas Virtuais", "Sistemas Web Sob Medida", "Agentes de IA e Automações"]);
  for (const s of SERVICOS) {
    assert.match(s.ideal, /^Ideal para /, s.titulo);
    assert.ok(s.texto && s.mensagem && s.icone && s.inclui.length >= 3, s.titulo);
  }
  assert.match(SERVICOS[3].ideal, /barbearias, clínicas/);
});

test("o index.html está em dia com os dados (rode 'npm run gerar' se este teste falhar)", () => {
  assert.equal(injetar(html), html);
});

test("os cards dos projetos estão escritos no HTML, com título pelo nicho e a demonstração", () => {
  for (const titulo of ["Loja Virtual com PDV e Estoque", "Sistema para Barbearias e Salões", "Sistema para Academias", "Cardápio Digital com Pedido pelo WhatsApp", "Site para Clínicas Odontológicas"]) {
    assert.ok(html.includes(`<h3>${titulo}</h3>`), titulo);
  }
  for (const demo of ["Jtech Loja Online", "Jtech Barbearia", "Volt Academia", "Jtech Espetaria", "Serena Odonto"]) {
    assert.ok(html.includes(`Demonstração: ${demo}`), demo);
  }
  assert.ok(!/<h3>Jtech /.test(html), "o título do card não começa mais com 'Jtech'");
  assert.equal((html.match(/class="ver-site"/g) || []).length, 5);
});

test("cada card tem o convite do nicho e o botão 'Pedir acesso ao painel' (o painel pede login de propósito)", () => {
  assert.ok(html.includes("Quero um sistema assim para minha agenda →"));
  assert.ok(html.includes("Quero uma loja virtual assim →"));
  assert.equal((html.match(/Pedir acesso ao painel/g) || []).length, 5);
  assert.ok(!html.includes("Testar painel"), "não oferecemos 'testar painel': ele pede login");
  assert.ok(!html.includes("Quer conhecer mais do projeto?"), "o convite genérico saiu");
  const links = html.match(/href="https:\/\/wa\.me\/5573988045634\?text=[^"]+"/g) || [];
  assert.ok(links.length >= 12, `links de WhatsApp: ${links.length}`); // topo + 4 convites + 4 painéis + 4 serviços + contato
});

test("os serviços e o contato aparecem escritos no HTML", () => {
  assert.ok(html.includes("(ideal para barbearias, clínicas, salões e estúdios)") || html.includes("Ideal para barbearias, clínicas"));
  assert.match(html, /orçamento sem compromisso/i);
  assert.ok(html.includes("Chamar no WhatsApp"));
  assert.ok(html.includes("(73) 98804-5634"));
});

test("SEO: description rica, com o que é oferecido, e tamanho de resumo do Google", () => {
  const descricao = html.match(/<meta name="description" content="([^"]+)"/)[1];
  assert.ok(descricao.length >= 120 && descricao.length <= 175, `tamanho ${descricao.length}`);
  for (const palavra of ["agendamento online", "loja virtual", "cardápio digital", "agentes de IA", "sem compromisso"]) {
    assert.ok(descricao.toLowerCase().includes(palavra.toLowerCase()), palavra);
  }
  assert.match(html, /<link rel="canonical" href="https:\/\/jhemisontech\.web\.app\/">/);
});

test("Sobre mim: foto, texto e SEO local (Itamaraju, extremo sul da Bahia)", () => {
  assert.match(html, /<section id="sobre"/);
  assert.match(html, /img\/jhemison\.jpg/);
  assert.match(html, /Quem está por trás da JhemisonTech\?/);
  const descricao = html.match(/<meta name="description" content="([^"]+)"/)[1];
  assert.match(descricao, /Itamaraju/);
  assert.match(descricao, /extremo sul da Bahia/);
  assert.match(html, /"addressLocality":"Itamaraju"/);
});

test("topo: subtítulo por benefício e botão que leva aos projetos", () => {
  assert.ok(html.includes("Ferramentas prontas para você vender mais, organizar sua rotina e atender clientes no WhatsApp 24 horas por dia."));
  assert.ok(html.includes("<a id=\"ver-projetos\" class=\"btn-secundario\" href=\"#projetos\">Ver projetos funcionando</a>"));
});
