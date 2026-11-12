// conteudo.js — Monta o HTML dos cards de projeto, dos serviços e do contato a partir dos dados
// (projetos.js, servicos.js e contato.js). Não mexe na página: só devolve texto.
//
// Quem usa:
//   - scripts/gerar.mjs ("npm run gerar") grava esse HTML direto no index.html, entre os marcadores
//     <!-- gerar:NOME --> ... <!-- /gerar:NOME -->. Assim o Google e quem está sem JavaScript já veem tudo.
//   - pagina.js usa só como reserva, se por algum motivo os cards não estiverem no HTML.
import { PROJETOS } from "./projetos.js";
import { SERVICOS } from "./servicos.js";
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

// ---- Serviços ----

export const htmlServicos = () => SERVICOS.map((s) => `
        <div class="servico">
          <svg viewBox="0 0 22 22" width="26" height="26" fill="none" stroke-width="1.5" aria-hidden="true">${s.icone}</svg>
          <div>
            <h3>${esc(s.titulo)}</h3>
            <p>${esc(s.texto)}</p>
            <ul class="inclui">${s.inclui.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
            <p class="ideal">${esc(s.ideal)}</p>
            <a class="servico-acao" href="${esc(linkWhatsApp(s.mensagem))}" ${ZAP}>Quero isso →</a>
          </div>
        </div>`).join("");

// ---- Topo e contato ----

export const htmlTopoCta = () =>
  `<a id="zap-topo" class="btn" href="${esc(linkWhatsApp("Olá, Jhemison! Vim pelo seu site e gostaria de fazer um orçamento sem compromisso."))}" ${ZAP}>Falar no WhatsApp</a>
   <a id="ver-projetos" class="btn-secundario" href="#projetos">Ver projetos funcionando</a>`;

export const htmlContato = () => `
      <h2>Peça seu orçamento sem compromisso</h2>
      <p class="sub">Me conta o que você precisa. Respondo rapidinho, e o orçamento é sem compromisso.</p>
      <a id="zap-contato" class="btn btn-grande" href="${esc(linkWhatsApp("Olá, Jhemison! Vim pelo seu site e gostaria de fazer um orçamento sem compromisso."))}" ${ZAP}>Chamar no WhatsApp</a>
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

const REGIOES = { "topo-cta": htmlTopoCta, projetos: htmlProjetos, servicos: htmlServicos, contato: htmlContato };

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
