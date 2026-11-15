// Testes dos planos, do "Como funciona" e das perguntas (public/js/planos.js) e de como aparecem no index.html.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { PLANOS, INCLUSO, OBSERVACAO, PASSOS, PERGUNTAS } from "../public/js/planos.js";

const INDEX = fileURLToPath(new URL("../public/index.html", import.meta.url));
const html = readFileSync(INDEX, "utf8").replace(/\r\n/g, "\n");

test("planos: quatro, com mensalidade e implantação, e só um em destaque", () => {
  assert.deepEqual(PLANOS.map((p) => p.titulo), ["Site do negócio", "Site + agendamento", "Atendente de IA", "Sistema sob medida"]);
  assert.deepEqual(PLANOS.map((p) => p.mensal), ["R$ 39", "R$ 79", "R$ 300", "R$ 350"]);
  assert.deepEqual(PLANOS.map((p) => p.implantacao), ["R$ 300", "R$ 300", "R$ 1.000", "R$ 1.500"]);
  assert.equal(PLANOS.filter((p) => p.destaque).length, 1);
  assert.ok(PLANOS[1].destaque, "o plano em destaque é o Site + agendamento");
  for (const p of PLANOS) {
    assert.ok(p.inclui.length >= 3 && p.botao && p.mensagem, p.titulo);
    assert.match(p.mensagem, /^Olá, Jhemison!/, p.titulo);
  }
});

test("o plano Sistema sob medida cita os sistemas prontos para adaptar", () => {
  const sob = PLANOS[3].inclui.join(" ");
  for (const nicho of ["Barbearia", "Academia", "Loja", "Lanchonete"]) assert.ok(sob.includes(nicho), nicho);
});

test("o que a mensalidade inclui e a observação sobre custos extras", () => {
  assert.ok(INCLUSO.some((i) => /hospedagem e domínio/i.test(i)));
  assert.ok(INCLUSO.some((i) => /2 alterações pequenas/i.test(i)));
  assert.match(OBSERVACAO, /R\$ 49/);
  assert.match(OBSERVACAO, /API oficial/);
  assert.match(OBSERVACAO, /contrato/);
});

test("como funciona: quatro passos em ordem; perguntas com resposta", () => {
  assert.equal(PASSOS.length, 4);
  assert.ok(PERGUNTAS.length >= 5);
  for (const q of PERGUNTAS) assert.ok(q.pergunta.endsWith("?") && q.resposta.length > 20, q.pergunta);
});

test("planos, passos e perguntas estão escritos no HTML, com link no menu", () => {
  assert.ok(html.includes('<a href="#planos">Planos</a>'));
  assert.ok(html.includes('id="planos"') && html.includes('id="como-funciona"') && html.includes('id="perguntas"'));
  for (const p of PLANOS) assert.ok(html.includes(`<h3>${p.titulo.replace("+", "+")}</h3>`), p.titulo);
  assert.equal((html.match(/class="plano( |")/g) || []).length, 4);
  assert.equal((html.match(/<details class="pergunta">/g) || []).length, PERGUNTAS.length);
  assert.ok(html.includes("Toda mensalidade inclui"));
});
