// servicos.js — Os cards de "O que eu faço". Para mudar um texto, edite aqui e rode "npm run gerar".
//
// Campos:
//   titulo, texto   o nome do serviço e o que ele faz
//   inclui          o que está incluído (aparece em marcadores)
//   ideal           para quem serve (ajuda o visitante a se reconhecer)
//   mensagem        o que vai escrito no WhatsApp quando o visitante clica em "Quero isso"
//   icone           o desenho (traços SVG, dentro de um quadro de 22 x 22)

export const SERVICOS = [
  {
    titulo: "Sites",
    texto: "O site do seu negócio, com seus serviços, preços e fotos, para o cliente te encontrar no Google e chegar até você.",
    inclui: ["Botão para agendar ou pedir pelo WhatsApp","Ou agenda online: o cliente marca o horário sozinho","Pronto para aparecer no Google","Rápido e bonito no celular"],
    ideal: "Ideal para salões, manicures, barbearias, clínicas e prestadores de serviço.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Sites.",
    icone: '<circle cx="11" cy="11" r="8"/><path d="M3 11h16M11 3c3 3 3 13 0 16M11 3c-3 3-3 13 0 16"/>',
  },
  {
    titulo: "Lojas Virtuais",
    texto: "Lojas online completas para você vender seus produtos 24 horas por dia, com gestão automatizada.",
    inclui: ["Catálogo com tamanhos, cores e cupons","Estoque com histórico e alerta de mínimo","PDV com controle de caixa no balcão","Pagamento combinado: Pix, cartão ou dinheiro"],
    ideal: "Ideal para lojistas que querem vender na internet e no balcão.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Lojas Virtuais.",
    icone: '<path d="M4 7h14l-1.3 13H5.3z"/><path d="M8 7a3 3 0 0 1 6 0"/>',
  },
  {
    titulo: "Sistemas Sob Medida",
    texto: "Sistemas completos e já testados, que eu adapto às regras do seu negócio. Seu cliente agenda ou compra, e você controla tudo num painel.",
    inclui: ["Barbearia e salão: agenda, clube de assinatura, PDV e relatórios","Academia: reserva de aulas, alunos e mensalidades","Lanchonete e restaurante: cardápio, pedidos e painel"],
    ideal: "Ideal para barbearias, academias, lanchonetes e restaurantes que querem organizar tudo num lugar só.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Sistemas Sob Medida.",
    icone: '<rect x="3" y="5" width="16" height="15" rx="2"/><path d="M3 9h16M7 2v4M15 2v4"/>',
  },
  {
    titulo: "Agentes de IA e Automações",
    texto: "Assistentes virtuais inteligentes e fluxos automatizados que atendem clientes e executam tarefas repetitivas sem intervenção humana.",
    inclui: ["Atendimento e vendas no WhatsApp 24/7","Qualificação automática de leads","Agendamento inteligente","Integração entre ferramentas"],
    ideal: "Ideal para quem perde venda por demorar a responder no WhatsApp.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Agentes de IA e Automações.",
    icone: '<rect x="4" y="7" width="14" height="11" rx="3"/><path d="M11 3v4M8 12h.01M14 12h.01M9 15h4"/>',
  },
];
