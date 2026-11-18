// Testes dos dados de contratação, "Como funciona", confiança e perguntas (public/js/planos.js)
// e de como as perguntas aparecem no index.html (acordeão: clica e abre a resposta).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { CONTRATACAO, PASSOS, PERGUNTAS, CONFIANCA, BENEFICIOS } from "../public/js/planos.js";

const ler = (c) => readFileSync(fileURLToPath(new URL(c, import.meta.url)), "utf8").replace(/\r\n/g, "\n");
const html = ler("../public/index.html");
const css = ler("../public/css/estilo.css");

test("contratação: quatro blocos com as listas do documento", () => {
  assert.deepEqual(CONTRATACAO.blocos.map((b) => b.itens.length), [10, 5, 6, 9]);
  // A página não diz que hospedagem e domínio estão na mensalidade
  assert.ok(!/hospedagem/i.test(html), "hospedagem citada na página");
  assert.ok(!CONTRATACAO.blocos[1].itens.some((i) => /domínio/i.test(i)));
  assert.ok(!PERGUNTAS.some((q) => /domínio.*mensalidade|mensalidade.*domínio/i.test(q.pergunta + q.resposta)));
  assert.ok(!/R\$/.test(JSON.stringify(CONTRATACAO)));
});

test("benefícios e confiança têm o tamanho do documento", () => {
  assert.equal(BENEFICIOS.length, 4);
  assert.equal(CONFIANCA.itens.length, 14);
});

test("como funciona: quatro etapas em ordem", () => {
  assert.deepEqual(PASSOS.map((p) => p.titulo), ["A gente conversa", "Você vê uma prévia", "Ajustamos juntos", "Seu negócio fica no ar"]);
});

test("perguntas frequentes: 11, na ordem (a do domínio na mensalidade saiu)", () => {
  assert.deepEqual(PERGUNTAS.map((q) => q.pergunta), [
    "Preciso entender de tecnologia para contratar?",
    "Quanto tempo leva para ficar pronto?",
    "A solução fica no meu nome?",
    "Posso usar um domínio que já tenho?",
    "O que a mensalidade inclui?",
    "Posso alterar preços e horários depois?",
    "O que não está incluído na mensalidade?",
    "O atendente de IA funciona 24 horas?",
    "O WhatsApp tem custo extra?",
    "Você atende apenas na minha cidade?",
    "Posso cancelar quando quiser?",
  ]);
  for (const q of PERGUNTAS) assert.ok(q.resposta.length > 40, q.pergunta);
});

test("perguntas em acordeão: 11 blocos que abrem e fecham, com + que vira −", () => {
  assert.equal((html.match(/<details class="pergunta">/g) || []).length, 11);
  assert.match(css, /\.pergunta summary::after\s*\{[^}]*content:\s*"\+"/);
  assert.match(css, /\.pergunta\[open\] summary::after\s*\{[^}]*content:\s*"−"/);
  // área de toque boa no celular
  assert.match(css, /\.pergunta summary\s*\{[^}]*min-height:\s*48px/);
});
