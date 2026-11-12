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
    titulo: "Landing Pages",
    texto: "Páginas únicas, rápidas e persuasivas, focadas em converter visitantes em clientes no WhatsApp ou no checkout.",
    inclui: ["Copywriting estratégico","Design responsivo","Alta velocidade de carregamento","Integração com pixel e analytics"],
    ideal: "Ideal para quem anuncia, roda tráfego pago ou lança um produto.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Landing Pages.",
    icone: '<rect x="2" y="4" width="18" height="12" rx="2"/><path d="M8 20h6M11 16v4"/>',
  },
  {
    titulo: "Sites Institucionais",
    texto: "Sites completos para apresentar sua empresa, serviços e portfólio, com design profissional e credibilidade.",
    inclui: ["Várias páginas (Home, Sobre, Serviços, Contato)","Otimização básica para o Google (SEO)","Painel simples para editar textos"],
    ideal: "Ideal para empresas e profissionais que querem ser encontrados no Google.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Sites Institucionais.",
    icone: '<circle cx="11" cy="11" r="8"/><path d="M3 11h16M11 3c3 3 3 13 0 16M11 3c-3 3-3 13 0 16"/>',
  },
  {
    titulo: "Lojas Virtuais",
    texto: "Lojas online completas para você vender seus produtos 24 horas por dia, com gestão automatizada.",
    inclui: ["Painel administrativo","Controle de estoque e variações","Cálculo de frete","Pix e cartão de crédito"],
    ideal: "Ideal para lojistas que querem vender na internet e no balcão.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Lojas Virtuais.",
    icone: '<path d="M4 7h14l-1.3 13H5.3z"/><path d="M8 7a3 3 0 0 1 6 0"/>',
  },
  {
    titulo: "Sistemas Web Sob Medida",
    texto: "Aplicações personalizadas para organizar processos internos, gerenciar dados e escalar a operação da sua empresa.",
    inclui: ["Painéis administrativos (dashboards)","Sistemas de agendamento","Áreas de membros","CRMs personalizados"],
    ideal: "Ideal para barbearias, clínicas, academias e empresas com processos manuais.",
    mensagem: "Olá, Jhemison! Vi seu portfólio e quero saber mais sobre Sistemas Web Sob Medida.",
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
