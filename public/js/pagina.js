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

function card(p) {
  return `
    <article class="projeto" data-projeto="${esc(p.id)}">
      <div class="print" role="button" tabindex="0" aria-label="Ampliar print de ${esc(p.nome)}">
        ${printSite(p)}${imagensPainel(p)}
        <span class="ampliar" aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M11 8v6M8 11h6"/></svg>Ampliar</span>
      </div>
      ${abasPainel(p)}
      <div class="projeto-corpo">
        <h3>${esc(p.nome)}</h3>
        <p>${esc(p.frase)}</p>
        <ul class="etiquetas">${p.etiquetas.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
        <a class="ver-site" href="${esc(p.url)}" target="_blank" rel="noopener">Ver site</a>
        ${p.painelAberto ? "" : `<p class="conhecer">Quer conhecer mais do projeto?
          <a class="zap-projeto" href="${esc(linkWhatsApp(mensagemProjeto(p.nome)))}" target="_blank" rel="noopener">Me chama no WhatsApp</a></p>`}
      </div>
    </article>`;
}

// Mostra no card o print do site (foto = null) ou o print número "foto" do painel
function mostrar(artigo, foto) {
  const painel = foto !== null;
  artigo.querySelectorAll("[data-aba]").forEach((b) => {
    const ativo = (b.dataset.aba === "painel") === painel;
    b.classList.toggle("ativa", ativo);
    b.setAttribute("aria-selected", String(ativo));
  });
  artigo.querySelector("picture").hidden = painel;
  artigo.querySelectorAll("[data-painel]").forEach((img) => { img.hidden = Number(img.dataset.painel) !== foto; });
  const bolinhas = artigo.querySelector(".bolinhas");
  if (bolinhas) bolinhas.hidden = !painel;
  artigo.querySelectorAll("[data-foto]").forEach((b) => b.classList.toggle("ativa", Number(b.dataset.foto) === foto));
}

// ---- Print ampliado ----
// Abre em tamanho grande o print que está à mostra no card (no site, sempre o print de computador, que é o maior)
const zoom = $("#zoom");
function ampliar(print) {
  const painel = [...print.querySelectorAll("[data-painel]")].find((img) => !img.hidden);
  const img = painel || print.querySelector("picture img");
  zoom.querySelector("img").src = img.getAttribute("src");
  zoom.querySelector("img").alt = img.alt;
  zoom.showModal();
}
zoom.addEventListener("click", (e) => { if (e.target === zoom || e.target.closest(".fechar")) zoom.close(); });

function aoClicar(evento) {
  const aba = evento.target.closest("[data-aba]");
  const bolinha = evento.target.closest("[data-foto]");
  const print = evento.target.closest(".print");
  if (aba) mostrar(aba.closest(".projeto"), aba.dataset.aba === "painel" ? 0 : null);
  if (bolinha) mostrar(bolinha.closest(".projeto"), Number(bolinha.dataset.foto));
  if (print) ampliar(print);
}

$("#lista-projetos").innerHTML = PROJETOS.map(card).join("");
$("#lista-projetos").addEventListener("click", aoClicar);
$("#lista-projetos").addEventListener("keydown", (e) => {
  const print = e.target.closest(".print");
  if (print && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); ampliar(print); }
});

$("#zap-topo").href = linkWhatsApp("Olá! Vim pelo seu portfólio e quero um orçamento.");
$("#zap-contato").href = linkWhatsApp("Olá! Vim pelo seu portfólio.");
$("#zap-texto").textContent = CONTATO.whatsappTexto;
$("#insta").href = `https://instagram.com/${CONTATO.instagram}`;
$("#insta-texto").textContent = `@${CONTATO.instagram}`;
$("#email").href = `mailto:${CONTATO.email}`;
$("#email-texto").textContent = CONTATO.email;
