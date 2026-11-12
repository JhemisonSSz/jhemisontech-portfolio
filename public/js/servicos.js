// servicos.js — Os cards de "O que eu faço". Para mudar um texto, edite aqui e rode "npm run gerar".
//
// Campos:
//   titulo, texto   o nome do serviço e o que ele faz
//   ideal           para quem serve (ajuda o visitante a se reconhecer)
//   mensagem        o que vai escrito no WhatsApp quando o visitante clica em "Quero isso"
//   icone           o desenho (traços SVG, dentro de um quadro de 22 x 22)

export const SERVICOS = [
  {
    titulo: "Sites com painel",
    texto: "Seu site com uma área para você mesmo mudar textos, fotos e preços.",
    ideal: "Ideal para quem quer aparecer no Google e atualizar tudo sozinho.",
    mensagem: "Olá! Vim pelo seu portfólio e quero saber mais sobre Sites com painel.",
    icone: '<rect x="2" y="4" width="18" height="12" rx="2"/><path d="M8 20h6M11 16v4"/>',
  },
  {
    titulo: "Agendamento online",
    texto: "Seus clientes marcam horário sozinhos, e você acompanha tudo na agenda.",
    ideal: "Ideal para barbearias, clínicas, salões e estúdios.",
    mensagem: "Olá! Vim pelo seu portfólio e quero saber mais sobre Agendamento online.",
    icone: '<rect x="3" y="5" width="16" height="15" rx="2"/><path d="M3 9h16M7 2v4M15 2v4"/>',
  },
  {
    titulo: "Loja + PDV",
    texto: "Loja virtual com estoque e caixa para as vendas no balcão.",
    ideal: "Ideal para lojas, mercadinhos e quem vende no balcão e na internet.",
    mensagem: "Olá! Vim pelo seu portfólio e quero saber mais sobre Loja + PDV.",
    icone: '<path d="M4 7h14l-1.3 13H5.3z"/><path d="M8 7a3 3 0 0 1 6 0"/>',
  },
  {
    titulo: "Agentes de IA",
    texto: "Atendimento automático com inteligência artificial, que responde seus clientes.",
    ideal: "Ideal para quem perde venda por demorar a responder no WhatsApp.",
    mensagem: "Olá! Vim pelo seu portfólio e quero saber mais sobre Agentes de IA.",
    icone: '<rect x="4" y="7" width="14" height="11" rx="3"/><path d="M11 3v4M8 12h.01M14 12h.01M9 15h4"/>',
  },
];
