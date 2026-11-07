// Testes dos dados do portfólio (public/js/contato.js e public/js/projetos.js). Rode com: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { CONTATO, linkWhatsApp, mensagemProjeto } from "../public/js/contato.js";
import { PROJETOS } from "../public/js/projetos.js";

const PUBLIC = fileURLToPath(new URL("../public/", import.meta.url));

test("contatos do Jhemison", () => {
  assert.equal(CONTATO.whatsapp, "5573988045634");
  assert.equal(CONTATO.whatsappTexto, "(73) 98804-5634");
  assert.equal(CONTATO.instagram, "jhemisontech");
  assert.equal(CONTATO.email, "jhemisontech@gmail.com");
});

test("link do WhatsApp com a mensagem codificada", () => {
  assert.equal(linkWhatsApp("Olá!"), "https://wa.me/5573988045634?text=Ol%C3%A1!");
});

test("mensagem do card cita o projeto", () => {
  assert.equal(mensagemProjeto("Jtech Barbearia"), "Olá! Vi o projeto Jtech Barbearia no seu portfólio e quero saber mais.");
});

test("três projetos com os textos aprovados no design", () => {
  assert.deepEqual(PROJETOS.map((p) => p.id), ["loja", "barbearia", "espetaria"]);
  const [loja, barbearia, espetaria] = PROJETOS;
  assert.equal(loja.nome, "Jtech Loja Online");
  assert.equal(loja.frase, "Loja virtual com carrinho e acompanhamento do pedido.");
  assert.deepEqual(loja.etiquetas, ["Catálogo", "Acompanhamento", "PDV", "Estoque"]);
  assert.equal(barbearia.nome, "Jtech Barbearia");
  assert.equal(barbearia.frase, "Agendamento online com painel para o barbeiro.");
  assert.deepEqual(barbearia.etiquetas, ["Agenda online", "Clube de assinatura", "PDV", "Relatórios"]);
  assert.equal(espetaria.nome, "Jtech Espetaria");
  assert.equal(espetaria.frase, "Cardápio digital com pedido pelo WhatsApp.");
  assert.deepEqual(espetaria.etiquetas, ["Cardápio", "Pedido pelo WhatsApp", "Painel do dono"]);
});

test("links dos sites publicados", () => {
  assert.deepEqual(PROJETOS.map((p) => p.url), [
    "https://jtech-loja-online.web.app/",
    "https://jtech-barbearia.web.app/",
    "https://jtech-espetaria.web.app/",
  ]);
});

test("todo projeto tem os campos e 3 a 4 etiquetas", () => {
  for (const p of PROJETOS) {
    for (const campo of ["id", "nome", "frase", "url"]) assert.ok(typeof p[campo] === "string" && p[campo], `${p.id}: ${campo}`);
    assert.ok(p.etiquetas.length >= 3 && p.etiquetas.length <= 4, `${p.id}: etiquetas`);
    assert.ok(Array.isArray(p.painel), `${p.id}: painel`);
  }
});

test("todos os prints citados existem em public/", () => {
  for (const p of PROJETOS) {
    for (const arquivo of [p.prints.pc, p.prints.cel, ...p.painel]) {
      assert.ok(existsSync(PUBLIC + arquivo), `${p.id}: falta ${arquivo}`);
    }
  }
});
