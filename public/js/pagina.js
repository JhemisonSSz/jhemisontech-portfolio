// pagina.js — Dá vida à página: abas Site | Painel, bolinhas e print ampliado.
// Os cards, os serviços e o contato já vêm escritos no index.html (feitos por "npm run gerar", a partir do
// projetos.js, servicos.js e contato.js). Aqui só ligamos o que se mexe.
import { htmlProjetos } from "./conteudo.js";

const $ = (s) => document.querySelector(s);

// Reserva: se os cards não estiverem no HTML (esqueceram de rodar "npm run gerar"), monta pelo JavaScript
if (!$("#lista-projetos").children.length) $("#lista-projetos").innerHTML = htmlProjetos();

// Mostra no card o print do site (foto = null) ou o print número "foto" do painel.
// Na aba Painel, o botão "Ver site" dá lugar a "Pedir acesso ao painel" (os painéis pedem login de propósito).
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
  artigo.querySelector(".ver-site").hidden = painel;
  artigo.querySelector(".pedir-painel").hidden = !painel;
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

$("#lista-projetos").addEventListener("click", aoClicar);
$("#lista-projetos").addEventListener("keydown", (e) => {
  const print = e.target.closest(".print");
  if (print && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); ampliar(print); }
});
