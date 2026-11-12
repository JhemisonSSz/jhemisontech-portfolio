// servicos.js — Os cards de "O que eu faço". Para mudar um texto, edite aqui e rode "npm run gerar".
//
// Campos:
//   titulo, texto   o nome do serviço e o que ele faz
//   ideal           para quem serve (ajuda o visitante a se reconhecer)
//   mensagem        o que vai escrito no WhatsApp quando o visitante clica em "Quero isso"
//   icone           o desenho (traços SVG, dentro de um quadro de 22 x 22)

export const SERVICOS = [
  {
    titulo: "Landing pages",
    texto: "Uma página única, direta e rápida, feita para transformar visitas em contatos pelo WhatsApp.",
    ideal: "Ideal para divulgar um serviço, uma promoção ou colocar seu negócio na internet.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Landing pages.",
    icone: '<rect x="2" y="4" width="18" height="12" rx="2"/><path d="M8 20h6M11 16v4"/>',
  },
  {
    titulo: "Sites",
    texto: "Site completo, com várias páginas, o seu endereço na internet e a cara do seu negócio.",
    ideal: "Ideal para empresas e profissionais que querem ser encontrados no Google e passar confiança.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Sites.",
    icone: '<circle cx="11" cy="11" r="8"/><path d="M3 11h16M11 3c3 3 3 13 0 16M11 3c-3 3-3 13 0 16"/>',
  },
  {
    titulo: "Sistemas com painel admin",
    texto: "Agendamento online, loja com PDV e estoque, cardápio digital: um sistema feito sob medida, com painel para você controlar tudo.",
    ideal: "Ideal para barbearias, clínicas, academias, lojas e restaurantes.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Sistemas com painel admin.",
    icone: '<rect x="3" y="5" width="16" height="15" rx="2"/><path d="M3 9h16M7 2v4M15 2v4"/>',
  },
  {
    titulo: "Agentes de IA",
    texto: "Atendimento automático com inteligência artificial, que responde seus clientes.",
    ideal: "Ideal para quem perde venda por demorar a responder no WhatsApp.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Agentes de IA.",
    icone: '<rect x="4" y="7" width="14" height="11" rx="3"/><path d="M11 3v4M8 12h.01M14 12h.01M9 15h4"/>',
  },
];
