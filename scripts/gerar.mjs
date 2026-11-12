// gerar.mjs — Grava no public/index.html os cards dos projetos, os serviços e o contato.
// Rode depois de mudar projetos.js, servicos.js ou contato.js:   npm run gerar
// (o "npm test" avisa se você esquecer).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { injetar } from "../public/js/conteudo.js";

const INDEX = fileURLToPath(new URL("../public/index.html", import.meta.url));
const original = readFileSync(INDEX, "utf8");
const crlf = original.includes("\r\n");
const novo = injetar(original.replace(/\r\n/g, "\n"));
writeFileSync(INDEX, crlf ? novo.replace(/\n/g, "\r\n") : novo);
console.log(novo === original.replace(/\r\n/g, "\n") ? "index.html já estava em dia." : "index.html atualizado.");
