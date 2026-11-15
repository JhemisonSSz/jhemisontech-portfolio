// Testes do movimento da página (public/js/movimento.js e as animações do estilo.css).
// O movimento é um enfeite: a página precisa funcionar e mostrar tudo mesmo sem JavaScript,
// e quem pediu "reduzir movimento" no aparelho não pode ver animação de entrada.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { ALVOS } from "../public/js/movimento.js";

const ler = (caminho) => readFileSync(fileURLToPath(new URL(caminho, import.meta.url)), "utf8").replace(/\r\n/g, "\n");
const html = ler("../public/index.html");
const css = ler("../public/css/estilo.css");

test("a página carrega o movimento.js", () => {
  assert.ok(html.includes('<script type="module" src="js/movimento.js"></script>'));
});

test("os elementos só ficam escondidos quando o JavaScript liga o movimento (sem JS, tudo aparece)", () => {
  assert.match(css, /\.com-movimento \[data-revela\]\s*\{[^}]*opacity:\s*0/);
  assert.ok(!/^\[data-revela\]\s*\{[^}]*opacity:\s*0/m.test(css), "não esconder sem a classe com-movimento");
  assert.ok(!html.includes("data-revela"), "o data-revela é posto pelo JavaScript, não fica escrito no HTML");
});

test("quem pediu 'reduzir movimento' vê tudo parado", () => {
  const bloco = css.match(/@media \(prefers-reduced-motion: reduce\) \{[\s\S]*?\n\}/g).join("\n");
  assert.match(bloco, /\[data-revela\]/);
  assert.match(bloco, /\.topo > \*/);
  assert.match(bloco, /\.servico-destaque/);
});

test("revela os blocos principais da página", () => {
  for (const alvo of [".projeto", ".servico", ".incluso", ".passos li", ".pergunta"]) {
    assert.ok(ALVOS.includes(alvo), alvo);
  }
});
