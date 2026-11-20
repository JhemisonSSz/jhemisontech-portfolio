// projetos.js — A lista de projetos que aparece no portfólio, na ordem dos cards.
// Os cards são protótipos: mostram só as telas (sem link para sistemas publicados).
// Para mudar um texto: edite aqui, gere os prints (veja o README) e rode "npm run gerar".
//
// Campos:
//   id         nome curto, sem espaço (usado nos nomes dos prints)
//   titulo     título do card, pelo tipo de sistema (ex.: "Sistema para Academias")
//   rotulo     (opcional) o que aparece antes do nome; padrão "Protótipo". Use "Sistema" para um produto publicado.
//   nome       nome que aparece embaixo do título (ex.: "Academia Modelo 1" ou "Agendanov")
//   frase      o benefício em uma ou duas frases curtas
//   etiquetas  3 ou 4 funções principais
//   convite    o texto do link do card (sem a seta): "Quero um sistema assim para minha academia"
//   mensagem   o texto que já aparece escrito no WhatsApp quando o visitante clica no convite
//   url        (opcional) endereço do sistema publicado; sem url, o card não tem o botão "Ver site"
//   prints     print do protótipo no computador (pc) e no celular (cel), dentro de public/
//   painel     prints de DENTRO do painel administrativo (opcional), em img/prints/painel/.
//              Se tiver algum, o card ganha as abas "Site | Painel"; com 2 ou mais, aparecem bolinhas.
//              Na aba Painel o botão vira "Pedir acesso ao painel" (os painéis pedem login de propósito).
//              Não use print da tela de login nem print com abas do navegador ou barra do Windows.

const prints = (id) => ({ pc: `img/prints/${id}-pc.jpg`, cel: `img/prints/${id}-cel.jpg` });

export const PROJETOS = [
  {
    id: "loja",
    titulo: "Loja Virtual com PDV e Estoque",
    nome: "Loja Modelo",
    frase: "Venda pela internet e no balcão em um só lugar. Controle seu estoque automaticamente e deixe o cliente acompanhar o pedido.",
    etiquetas: ["Catálogo", "Acompanhamento", "PDV", "Estoque"],
    convite: "Quero uma loja virtual assim",
    mensagem: "Olá, Jhemison! Vi o protótipo da loja virtual no seu portfólio e gostaria de saber como funciona para o meu negócio.",
    prints: prints("loja"),
    painel: [], // sem prints do painel administrativo (ficam fora do site)
  },
  {
    id: "barbearia",
    titulo: "Sistema para Barbearias e Salões",
    nome: "Barbearia Modelo",
    frase: "Acabe com os furos na agenda. Seus clientes marcam horário sozinhos e você gerencia assinaturas e faturamento no painel.",
    etiquetas: ["Agenda online", "Clube de assinatura", "PDV", "Relatórios"],
    convite: "Quero um sistema assim para minha agenda",
    mensagem: "Olá, Jhemison! Vi o protótipo do sistema de agendamento no seu portfólio e tenho interesse em colocar no meu negócio. Podemos conversar?",
    prints: prints("barbearia"),
    painel: [], // sem prints do painel administrativo (ficam fora do site)
  },
  {
    id: "agendanov",
    titulo: "Agendamento Online para Qualquer Negócio",
    rotulo: "Sistema", // produto próprio (SaaS de agendamento), não é protótipo
    nome: "Agendanov",
    url: "https://agendanov.web.app/",
    frase: "Seu cliente marca o horário sozinho e a confirmação chega no seu WhatsApp. Serve para barbearia, salão, manicure, lash e clínica.",
    etiquetas: ["Agendamento online", "Confirmação no WhatsApp", "Sem horário duplicado", "Painel simples"],
    convite: "Quero um agendamento online assim",
    mensagem: "Olá, Jhemison! Vi o Agendanov no seu portfólio e tenho interesse em um agendamento online para o meu negócio. Podemos conversar?",
    prints: prints("agendanov"),
    painel: [], // o painel pede login e ainda não tem prints próprios para mostrar
  },
  {
    id: "volt",
    titulo: "Sistema para Academias",
    nome: "Academia Modelo",
    frase: "Seus alunos reservam aula sozinhos e você controla vagas, lista de espera e mensalidades no painel.",
    etiquetas: ["Reserva de aulas", "Lista de espera", "Mensalidade", "Painel do dono"],
    convite: "Quero um sistema assim para minha academia",
    mensagem: "Olá, Jhemison! Vi o protótipo de sistema para academias no seu portfólio e tenho interesse em um sistema assim para a minha academia. Podemos conversar?",
    prints: prints("volt"),
    painel: [], // sem prints do painel administrativo (ficam fora do site)
  },
  {
    id: "espetaria",
    titulo: "Cardápio Digital com Pedido pelo WhatsApp",
    nome: "Restaurante Modelo",
    frase: "Receba pedidos organizados direto no WhatsApp, sem pagar taxas de aplicativos e com painel fácil para atualizar preços.",
    etiquetas: ["Cardápio", "Pedido pelo WhatsApp", "Painel do dono"],
    convite: "Quero um cardápio digital assim",
    mensagem: "Olá, Jhemison! Vi o protótipo de cardápio digital no seu portfólio e queria tirar algumas dúvidas sobre valores e prazos.",
    prints: prints("espetaria"),
    painel: [], // sem prints do painel administrativo (ficam fora do site)
  },
  {
    id: "serena",
    titulo: "Site para Clínicas Odontológicas",
    nome: "Clínica Modelo",
    frase: "Apresente sua clínica com um site rápido e transmita confiança. O paciente conhece os serviços e agenda a consulta direto pelo WhatsApp.",
    etiquetas: ["Site da clínica", "Agendamento pelo WhatsApp", "Mapa de localização", "Rápido no celular"],
    convite: "Quero um site assim para minha clínica",
    mensagem: "Olá, Jhemison! Vi o protótipo de site no seu portfólio e tenho interesse em um site assim para a minha clínica. Podemos conversar?",
    prints: prints("serena"),
    painel: [], // site institucional: não tem painel
  },
];
