// Testes dos dados do portfólio (public/js/contato.js e public/js/projetos.js). Rode com: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { CONTATO, linkWhatsApp, mensagemConvite, mensagemPainel } from "../public/js/contato.js";
import { PROJETOS } from "../public/js/projetos.js";

const PUBLIC = fileURLToPath(new URL("../public/", import.meta.url));

test("contatos do Jhemison", () => {
  assert.equal(CONTATO.whatsapp, "5573988045634");
  assert.equal(CONTATO.whatsappTexto, "(73) 98804-5634");
  assert.equal(CONTATO.instagram, "novj.jhemison");
  assert.equal(CONTATO.email, "novj@outlook.com.br");
});

test("link do WhatsApp com a mensagem codificada", () => {
  assert.equal(linkWhatsApp("Olá!"), "https://wa.me/5573988045634?text=Ol%C3%A1!");
});

test("mensagens do card citam o protótipo e o que a pessoa quer", () => {
  const barbearia = PROJETOS.find((p) => p.id === "barbearia");
  assert.equal(mensagemConvite(barbearia),
    "Olá, Jhemison! Vi o protótipo do sistema de agendamento no seu portfólio e tenho interesse em colocar no meu negócio. Podemos conversar?");
  assert.equal(mensagemPainel(barbearia),
    "Olá! Vi o painel da demonstração Barbearia Modelo no seu portfólio e quero pedir acesso para testar.");
});

test("seis protótipos com nome genérico do segmento, título pelo tipo de sistema e a frase com o benefício", () => {
  assert.deepEqual(PROJETOS.map((p) => p.id), ["loja", "barbearia", "agendanov", "volt", "espetaria", "serena"]);
  assert.deepEqual(PROJETOS.map((p) => p.nome), ["Loja Modelo", "Barbearia Modelo", "Agendanov", "Academia Modelo", "Restaurante Modelo", "Clínica Modelo"]);
  const [loja, barbearia, agendanov, volt, espetaria, serena] = PROJETOS;

  assert.equal(loja.titulo, "Loja Virtual com PDV e Estoque");
  assert.equal(loja.frase, "Venda pela internet e no balcão em um só lugar. Controle seu estoque automaticamente e deixe o cliente acompanhar o pedido.");
  assert.deepEqual(loja.etiquetas, ["Catálogo", "Acompanhamento", "PDV", "Estoque"]);
  assert.equal(loja.convite, "Quero uma loja virtual assim");
  assert.equal(loja.mensagem, "Olá, Jhemison! Vi o protótipo da loja virtual no seu portfólio e gostaria de saber como funciona para o meu negócio.");

  assert.equal(barbearia.titulo, "Sistema para Barbearias e Salões");
  assert.equal(barbearia.frase, "Acabe com os furos na agenda. Seus clientes marcam horário sozinhos e você gerencia assinaturas e faturamento no painel.");
  assert.deepEqual(barbearia.etiquetas, ["Agenda online", "Clube de assinatura", "PDV", "Relatórios"]);
  assert.equal(barbearia.convite, "Quero um sistema assim para minha agenda");

  assert.equal(agendanov.titulo, "Agendamento Online para Qualquer Negócio");
  assert.equal(agendanov.frase, "Seu cliente marca o horário sozinho e a confirmação chega no seu WhatsApp. Serve para barbearia, salão, manicure, lash e clínica.");
  assert.deepEqual(agendanov.etiquetas, ["Agendamento online", "Confirmação no WhatsApp", "Sem horário duplicado", "Painel simples"]);
  assert.equal(agendanov.convite, "Quero um agendamento online assim");

  assert.equal(volt.titulo, "Sistema para Academias");
  assert.equal(volt.frase, "Seus alunos reservam aula sozinhos e você controla vagas, lista de espera e mensalidades no painel.");
  assert.deepEqual(volt.etiquetas, ["Reserva de aulas", "Lista de espera", "Mensalidade", "Painel do dono"]);
  assert.equal(volt.convite, "Quero um sistema assim para minha academia");

  assert.equal(espetaria.titulo, "Cardápio Digital com Pedido pelo WhatsApp");
  assert.equal(espetaria.frase, "Receba pedidos organizados direto no WhatsApp, sem pagar taxas de aplicativos e com painel fácil para atualizar preços.");
  assert.deepEqual(espetaria.etiquetas, ["Cardápio", "Pedido pelo WhatsApp", "Painel do dono"]);
  assert.equal(espetaria.convite, "Quero um cardápio digital assim");

  assert.equal(serena.titulo, "Site para Clínicas Odontológicas");
  assert.equal(serena.frase, "Apresente sua clínica com um site rápido e transmita confiança. O paciente conhece os serviços e agenda a consulta direto pelo WhatsApp.");
  assert.deepEqual(serena.etiquetas, ["Site da clínica", "Agendamento pelo WhatsApp", "Mapa de localização", "Rápido no celular"]);
  assert.equal(serena.convite, "Quero um site assim para minha clínica");
});

test("Agendanov é produto próprio: rótulo 'Sistema' e link para o sistema no ar", () => {
  const agendanov = PROJETOS.find((p) => p.id === "agendanov");
  assert.equal(agendanov.rotulo, "Sistema");
  assert.equal(agendanov.url, "https://seuagendamentofacil.web.app/");
  assert.equal(agendanov.mensagem, "Olá, Jhemison! Vi o Agendanov no seu portfólio e tenho interesse em um agendamento online para o meu negócio. Podemos conversar?");
});

test("os outros cards são protótipos: sem rótulo próprio e sem link para sistemas publicados", () => {
  for (const p of PROJETOS.filter((x) => x.id !== "agendanov")) {
    assert.equal(p.url, undefined, `${p.id}: não deve ter link`);
    assert.equal(p.rotulo, undefined, `${p.id}: deve aparecer como Protótipo`);
  }
});

test("todo protótipo tem os campos e 3 a 4 etiquetas", () => {
  for (const p of PROJETOS) {
    for (const campo of ["id", "titulo", "nome", "frase", "convite", "mensagem"]) assert.ok(typeof p[campo] === "string" && p[campo], `${p.id}: ${campo}`);
    assert.ok(p.etiquetas.length >= 3 && p.etiquetas.length <= 4, `${p.id}: etiquetas`);
  }
});

test("nenhum print do painel administrativo aparece no portfólio", () => {
  for (const p of PROJETOS) assert.deepEqual(p.painel, [], `${p.id}: painel`);
});

test("todos os prints citados existem em public/", () => {
  for (const p of PROJETOS) {
    for (const arquivo of [p.prints.pc, p.prints.cel]) {
      assert.ok(existsSync(PUBLIC + arquivo), `${p.id}: falta ${arquivo}`);
    }
  }
});
