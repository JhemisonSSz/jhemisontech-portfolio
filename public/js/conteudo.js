// conteudo.js — Monta o HTML das partes da página que vêm dos dados: botões do topo, "Você se identifica?", benefícios, serviços,
// contratação, "Como funciona", projetos, confiança, perguntas, contato e o botão flutuante do WhatsApp
// (projetos.js, servicos.js, planos.js e contato.js). Não mexe na página: só devolve texto.
//
// Quem usa:
//   - scripts/gerar.mjs ("npm run gerar") grava esse HTML direto no index.html, entre os marcadores
//     <!-- gerar:NOME --> ... <!-- /gerar:NOME -->. Assim o Google e quem está sem JavaScript já veem tudo.
//   - pagina.js usa só como reserva, se por algum motivo os cards não estiverem no HTML.
import { PROJETOS } from "./projetos.js";
import { SERVICOS } from "./servicos.js";
import { DORES, BENEFICIOS, CONTRATACAO, PASSOS, PASSOS_CTA, CONFIANCA, PERGUNTAS } from "./planos.js";
import { CONTATO, linkWhatsApp, mensagemConvite, mensagemPainel } from "./contato.js";

// Protege textos antes de colocar no HTML
export const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const ZAP = 'target="_blank" rel="noopener"';

// ---- Projetos ----

// Print do site: no celular usa o print de celular, no computador o de computador
const printSite = (p) => `
  <picture>
    <source media="(max-width: 600px)" srcset="${esc(p.prints.cel)}">
    <img src="${esc(p.prints.pc)}" alt="Print do site ${esc(p.nome)}" loading="lazy" width="1280" height="800">
  </picture>`;

// Abas "Site | Painel": só aparecem quando o projeto tem prints do painel.
// Com 2 ou mais prints do painel, aparecem bolinhas para passar de um para outro.
const abasPainel = (p) => !p.painel.length ? "" : `
  <div class="abas">
    <div role="tablist" class="abas-botoes">
      <button class="aba ativa" data-aba="site" role="tab" aria-selected="true">Site</button>
      <button class="aba" data-aba="painel" role="tab" aria-selected="false">Painel</button>
    </div>
    ${p.painel.length < 2 ? "" : `<div class="bolinhas" hidden>${p.painel.map((_, i) =>
      `<button class="bolinha${i ? "" : " ativa"}" data-foto="${i}" aria-label="Print ${i + 1} do painel"></button>`).join("")}</div>`}
  </div>`;

const imagensPainel = (p) => p.painel.map((arq, i) =>
  `<img src="${esc(arq)}" alt="Print do painel ${esc(p.nome)} ${i + 1}" loading="lazy" hidden data-painel="${i}">`).join("");

export function card(p) {
  return `
    <article class="projeto" data-projeto="${esc(p.id)}">
      <div class="print" role="button" tabindex="0" aria-label="Ampliar print de ${esc(p.nome)}">
        ${printSite(p)}${imagensPainel(p)}
        <span class="ampliar" aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M11 8v6M8 11h6"/></svg>Ampliar</span>
      </div>
      ${abasPainel(p)}
      <div class="projeto-corpo">
        <h3>${esc(p.titulo)}</h3>
        <p class="demo">Demonstração: ${esc(p.nome)}</p>
        <p>${esc(p.frase)}</p>
        <ul class="etiquetas">${p.etiquetas.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
        <div class="acoes">
          <a class="ver-site" href="${esc(p.url)}" ${ZAP}>Ver site</a>
          <a class="pedir-painel" href="${esc(linkWhatsApp(mensagemPainel(p)))}" ${ZAP} hidden>Pedir acesso ao painel</a>
        </div>
        <p class="conhecer"><a class="zap-projeto" href="${esc(linkWhatsApp(mensagemConvite(p)))}" ${ZAP}>${esc(p.convite)} →</a></p>
      </div>
    </article>`;
}

export const htmlProjetos = () => PROJETOS.map(card).join("");

// ---- Você se identifica? ----

export const htmlDores = () => `
      <p class="sub">${esc(DORES.texto)}</p>
        <ul class="dores">${DORES.itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
        <p class="secao-cta"><a class="btn" href="${esc(linkWhatsApp(DORES.mensagem))}" ${ZAP}>${esc(DORES.cta)}</a></p>`;

// ---- Benefícios ----

export const htmlBeneficios = () => BENEFICIOS.map((b) => `
        <div class="beneficio">
          <h3>${esc(b.titulo)}</h3>
          <p>${esc(b.texto)}</p>
        </div>`).join("");

// ---- Serviços ----

const lista = (itens) => `<ul class="inclui">${itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

// Lista simples ou separada por tipo de negócio (Sistemas sob medida)
const listaServico = (s) => s.grupos
  ? `<div class="grupos">${s.grupos.map((g) => `<div class="grupo"><h4>${esc(g.nome)}</h4>${lista(g.itens)}</div>`).join("")}</div>`
  : lista(s.itens);

// No celular, as listas longas mostram só o começo e um botão "Ver todos" (o pagina.js liga isso).
// Sem JavaScript, o botão fica escondido e a lista aparece inteira.
export const ITENS_CURTOS = 5;
export const escondidos = (s) => s.grupos ? s.grupos.length - 1 : Math.max(0, s.itens.length - ITENS_CURTOS);
const verTodos = (s) => !escondidos(s) ? "" :
  `<button type="button" class="ver-todos" hidden>${s.grupos ? "Ver todos os exemplos" : "Ver todos os recursos"} (+${escondidos(s)})</button>`;

export const htmlServicos = () => SERVICOS.map((s) => `
        <div class="servico${s.destaque ? " servico-destaque" : ""}">
          ${s.destaque ? '<span class="selo">Mais procurado</span>' : ""}
          <svg viewBox="0 0 22 22" width="26" height="26" fill="none" stroke-width="1.5" aria-hidden="true">${s.icone}</svg>
          <div class="servico-corpo">
            <p class="rotulo">${esc(s.rotulo)}</p>
            <h3>${esc(s.titulo)}</h3>
            <p>${esc(s.texto)}</p>
            <p class="lista-titulo">${esc(s.listaTitulo)}</p>
            ${listaServico(s)}
            ${verTodos(s)}
            ${s.publico ? `<p class="ideal"><strong>Público indicado:</strong> ${esc(s.publico)}</p>` : ""}
            ${(s.notas || []).map((n) => `<p class="nota">${esc(n)}</p>`).join("")}
            <a class="servico-acao" href="${esc(linkWhatsApp(s.mensagem))}" ${ZAP}>${esc(s.cta)} →</a>
          </div>
        </div>`).join("");

// ---- Modelo de contratação, "Como funciona", confiança e perguntas ----

export const htmlContratacao = () => `
      <h2>${esc(CONTRATACAO.titulo)}</h2>
      <p class="sub">${esc(CONTRATACAO.texto)}</p>
        <div class="contratacao">${CONTRATACAO.blocos.map((b) => `
          <div class="bloco-contratacao">
            <h3>${esc(b.titulo)}</h3>
            ${lista(b.itens)}
          </div>`).join("")}
        </div>
        <p class="aviso">${esc(CONTRATACAO.aviso)}</p>
        <p class="secao-cta"><a class="btn" href="${esc(linkWhatsApp(CONTRATACAO.mensagem))}" ${ZAP}>${esc(CONTRATACAO.cta)}</a></p>`;

export const htmlPassos = () => `
        <ol class="passos">${PASSOS.map((p) => `
          <li><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`).join("")}
        </ol>
        <p class="secao-cta"><a class="btn" href="${esc(linkWhatsApp(PASSOS_CTA.mensagem))}" ${ZAP}>${esc(PASSOS_CTA.texto)}</a></p>`;

export const htmlConfianca = () => `
        <p class="sub">${esc(CONFIANCA.texto)}</p>
        <ul class="confianca-lista">${CONFIANCA.itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

export const htmlPerguntas = () => PERGUNTAS.map((q) => `
        <details class="pergunta">
          <summary>${esc(q.pergunta)}</summary>
          <p>${esc(q.resposta)}</p>
        </details>`).join("");

// ---- Topo e contato ----

const MENSAGEM_GERAL = "Olá, Jhemison! Vim pelo site da NOVAA On e gostaria de fazer um orçamento sem compromisso.";

export const htmlTopoCta = () =>
  `<a id="zap-topo" class="btn" href="${esc(linkWhatsApp(MENSAGEM_GERAL))}" ${ZAP}>Falar pelo WhatsApp</a>
   <a id="ver-solucoes" class="btn-secundario" href="#servicos">Ver soluções</a>`;

// Botão redondo do WhatsApp que fica sempre no canto da tela (principalmente para o celular)
export const htmlZapFlutuante = () =>
  `<a id="zap-flutuante" class="zap-flutuante" href="${esc(linkWhatsApp(MENSAGEM_GERAL))}" ${ZAP} aria-label="Falar pelo WhatsApp" title="Falar pelo WhatsApp">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.5 8.5 0 1 1 21 11.5z"/><path d="M9 8.5c.3 2.6 2.4 4.9 5.6 6l1.4-1.4-2-1.2-1 .8c-.9-.4-1.6-1.1-2-2l.8-1-1.2-2z"/></svg>
  </a>`;

export const htmlContato = () => `
      <h2>Peça seu orçamento sem compromisso</h2>
      <p class="sub">Me conta o que você precisa. Respondo rapidinho, e o orçamento é sem compromisso.</p>
      <a id="zap-contato" class="btn btn-grande" href="${esc(linkWhatsApp(MENSAGEM_GERAL))}" ${ZAP}>Contar o que eu preciso</a>
      <p class="contato-numero">${esc(CONTATO.whatsappTexto)} · ou se preferir:</p>
      <div class="contatos">
        <a id="insta" class="contato-item" href="https://instagram.com/${esc(CONTATO.instagram)}" ${ZAP}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
          <span>@${esc(CONTATO.instagram)}</span>
        </a>
        <a id="email" class="contato-item" href="mailto:${esc(CONTATO.email)}">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
          <span>${esc(CONTATO.email)}</span>
        </a>
      </div>`;

// ---- Gravação no index.html ----

const REGIOES = {
  "topo-cta": htmlTopoCta, dores: htmlDores, beneficios: htmlBeneficios, servicos: htmlServicos, contratacao: htmlContratacao, passos: htmlPassos,
  projetos: htmlProjetos, confianca: htmlConfianca, perguntas: htmlPerguntas, contato: htmlContato, "zap-flutuante": htmlZapFlutuante,
};

// Troca o que está entre os marcadores <!-- gerar:NOME --> e <!-- /gerar:NOME --> pelo conteúdo novo.
// O texto do index.html precisa estar com quebras de linha "\n" (o gerar.mjs cuida disso).
export function injetar(html) {
  let saida = html;
  for (const [nome, montar] of Object.entries(REGIOES)) {
    const marcadores = new RegExp(`<!-- gerar:${nome} -->[\\s\\S]*?<!-- /gerar:${nome} -->`);
    if (!marcadores.test(saida)) throw new Error(`Faltam os marcadores "gerar:${nome}" no index.html`);
    saida = saida.replace(marcadores, () => `<!-- gerar:${nome} -->${montar()}\n<!-- /gerar:${nome} -->`);
  }
  return saida;
}
