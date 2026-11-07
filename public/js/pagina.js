// pagina.js — Monta os cards dos projetos e preenche os links de contato.
// Os textos dos projetos vêm do projetos.js; os contatos, do contato.js.
import { PROJETOS } from "./projetos.js";
import { CONTATO, linkWhatsApp, mensagemProjeto } from "./contato.js";

const $ = (s) => document.querySelector(s);

// Protege textos antes de colocar no innerHTML
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Print do site: no celular usa o print de celular, no computador o de computador
const printSite = (p) => `
  <picture>
    <source media="(max-width: 600px)" srcset="${esc(p.prints.cel)}">
    <img src="${esc(p.prints.pc)}" alt="Print do site ${esc(p.nome)}" loading="lazy" width="1280" height="800">
  </picture>`;

// Só aparece quando o projeto tem prints do painel
const abasPainel = (p) => !p.painel.length ? "" : `
  <div class="abas" role="tablist">
    <button class="aba ativa" data-aba="site" role="tab" aria-selected="true">Site</button>
    <button class="aba" data-aba="painel" role="tab" aria-selected="false">Painel</button>
  </div>`;

const imagensPainel = (p) => p.painel.map((arq, i) =>
  `<img src="${esc(arq)}" alt="Print do painel ${esc(p.nome)} ${i + 1}" loading="lazy" hidden data-painel>`).join("");

function card(p) {
  return `
    <article class="projeto" data-projeto="${esc(p.id)}">
      <div class="print">${printSite(p)}${imagensPainel(p)}</div>
      ${abasPainel(p)}
      <div class="projeto-corpo">
        <h3>${esc(p.nome)}</h3>
        <p>${esc(p.frase)}</p>
        <ul class="etiquetas">${p.etiquetas.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
        <a class="ver-site" href="${esc(p.url)}" target="_blank" rel="noopener">Ver site</a>
        <p class="conhecer">Quer conhecer mais do projeto?
          <a class="zap-projeto" href="${esc(linkWhatsApp(mensagemProjeto(p.nome)))}" target="_blank" rel="noopener">Me chama no WhatsApp</a></p>
      </div>
    </article>`;
}

// Troca entre o print do site e os do painel
function trocarAba(evento) {
  const botao = evento.target.closest("[data-aba]");
  if (!botao) return;
  const artigo = botao.closest(".projeto");
  const painel = botao.dataset.aba === "painel";
  artigo.querySelectorAll("[data-aba]").forEach((b) => {
    const ativo = b === botao;
    b.classList.toggle("ativa", ativo);
    b.setAttribute("aria-selected", String(ativo));
  });
  artigo.querySelector("picture").hidden = painel;
  artigo.querySelectorAll("[data-painel]").forEach((img) => { img.hidden = !painel; });
}

$("#lista-projetos").innerHTML = PROJETOS.map(card).join("");
$("#lista-projetos").addEventListener("click", trocarAba);

$("#zap-topo").href = linkWhatsApp("Olá! Vim pelo seu portfólio e quero um orçamento.");
$("#zap-contato").href = linkWhatsApp("Olá! Vim pelo seu portfólio.");
$("#zap-texto").textContent = CONTATO.whatsappTexto;
$("#insta").href = `https://instagram.com/${CONTATO.instagram}`;
$("#insta-texto").textContent = `@${CONTATO.instagram}`;
$("#email").href = `mailto:${CONTATO.email}`;
$("#email-texto").textContent = CONTATO.email;
