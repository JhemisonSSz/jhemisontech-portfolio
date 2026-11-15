// Testes do "Toda mensalidade inclui", do "Como funciona" e das perguntas, e de como aparecem no index.html.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { INCLUSO, OBSERVACAO, PASSOS, PERGUNTAS } from "../public/js/planos.js";
import { SERVICOS } from "../public/js/servicos.js";

const INDEX = fileURLToPath(new URL("../public/index.html", import.meta.url));
const html = readFileSync(INDEX, "utf8").replace(/\r\n/g, "\n");

test("sem preços na página: cada serviço convida para um orçamento sem compromisso", () => {
  assert.ok(!/R\$/.test(html), "nenhum valor em reais aparece na página");
  assert.ok(!html.includes('class="valores"'));
  for (const s of SERVICOS) assert.ok(!("precos" in s) && !("implantacao" in s), s.titulo);
  assert.equal((html.match(/class="servico-acao"[^>]*>Pedir orçamento →</g) || []).length, SERVICOS.length);
  assert.equal(SERVICOS.filter((s) => s.destaque).length, 1);
  assert.ok(SERVICOS[0].destaque, "o destaque fica em Sites");
});

test("o que a mensalidade inclui e a observação sobre custos extras", () => {
  assert.ok(INCLUSO.some((i) => /hospedagem e domínio/i.test(i)));
  assert.ok(INCLUSO.some((i) => /2 alterações pequenas/i.test(i)));
  assert.ok(!/R\$/.test(OBSERVACAO));
  assert.match(OBSERVACAO, /API oficial/);
  assert.match(OBSERVACAO, /contrato/);
});

test("como funciona: quatro passos em ordem; perguntas com resposta", () => {
  assert.equal(PASSOS.length, 4);
  assert.ok(PERGUNTAS.length >= 5);
  for (const q of PERGUNTAS) assert.ok(q.pergunta.endsWith("?") && q.resposta.length > 20, q.pergunta);
});

test("perguntas: explica a mensalidade do atendente de IA e o custo das mensagens na API oficial", () => {
  const ia = PERGUNTAS.find((q) => /atendente de IA/i.test(q.pergunta));
  assert.ok(ia, "falta a pergunta sobre o atendente de IA");
  assert.match(ia.resposta, /WhatsApp comum/);
  assert.match(ia.resposta, /API oficial/);
  assert.match(ia.resposta, /contrato/);
});

test("passos e perguntas estão escritos no HTML; a seção Planos saiu", () => {
  assert.ok(!html.includes('id="planos"') && !html.includes('href="#planos"'), "não existe mais seção Planos");
  assert.ok(!/class="plano[ "]/.test(html));
  assert.ok(html.includes('id="como-funciona"') && html.includes('id="perguntas"'));
  for (const s of SERVICOS) assert.ok(html.includes(`<h3>${s.titulo}</h3>`), s.titulo);
  assert.equal((html.match(/<details class="pergunta">/g) || []).length, PERGUNTAS.length);
  assert.ok(html.includes("Toda mensalidade inclui"));
});
