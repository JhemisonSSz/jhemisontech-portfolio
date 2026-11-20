// servicos.js — Os cards da seção "Serviços" (textos do documento "NovJ Digital atualizado").
// Os valores não aparecem na página: cada card leva a uma conversa no WhatsApp.
// Para mudar um texto, edite aqui e rode "npm run gerar".
//
// Campos:
//   rotulo        o nome do serviço, em letra pequena acima do título
//   titulo        a frase principal do card
//   texto         o que o serviço faz
//   listaTitulo   o nome da lista ("Recursos possíveis", "Possibilidades"...)
//   itens         a lista (ou "grupos", quando a lista é separada por tipo de negócio)
//   publico       para quem serve (opcional)
//   notas         avisos de transparência (opcional)
//   cta           o texto do botão, que abre o WhatsApp com a "mensagem" já escrita
//   destaque      true em UM serviço só: ganha o selo "Mais procurado" e ocupa a linha inteira no computador
//   icone         o desenho (traços SVG, dentro de um quadro de 22 x 22)

export const SERVICOS = [
  {
    rotulo: "Sites profissionais",
    titulo: "Sites para colocar seu negócio na internet",
    texto: "Tenha um site com os serviços, preços, fotos, horários e formas de contato da sua empresa. O cliente encontra as informações com facilidade e pode falar com você pelo WhatsApp ou realizar um agendamento online.",
    listaTitulo: "Recursos possíveis",
    itens: ["Apresentação dos serviços", "Preços", "Fotos", "Horários de funcionamento", "Localização", "Botão para WhatsApp",
      "Formulário de contato", "Agenda online", "Integração com redes sociais", "Estrutura preparada para mecanismos de busca", "Layout adaptado para celular"],
    publico: "Salões, barbearias, manicures, clínicas, profissionais autônomos, prestadores de serviço e pequenas empresas locais.",
    cta: "Quero criar meu site",
    mensagem: "Olá, Jhemison! Vim pelo site da NovJ Digital e quero criar o site do meu negócio.",
    destaque: true,
    icone: '<circle cx="11" cy="11" r="8"/><path d="M3 11h16M11 3c3 3 3 13 0 16M11 3c-3 3-3 13 0 16"/>',
  },
  {
    rotulo: "Lojas virtuais",
    titulo: "Venda seus produtos pela internet",
    texto: "Tenha uma loja virtual para apresentar seus produtos, receber pedidos e organizar melhor suas vendas. A estrutura pode ser adaptada ao seu catálogo e à rotina do seu negócio.",
    listaTitulo: "Recursos possíveis",
    itens: ["Catálogo de produtos", "Tamanhos", "Cores", "Variações", "Cupons", "Controle de estoque", "Alerta de estoque mínimo",
      "Histórico de movimentações", "Pedidos", "Painel de gerenciamento", "Controle de caixa", "PDV", "Pagamento por Pix",
      "Pagamento por cartão", "Pagamento em dinheiro"],
    notas: ["Os recursos disponíveis dependem da solução contratada e das integrações necessárias para o negócio."],
    cta: "Quero vender pela internet",
    mensagem: "Olá, Jhemison! Vim pelo site da NovJ Digital e quero uma loja virtual para vender pela internet.",
    icone: '<path d="M4 7h14l-1.3 13H5.3z"/><path d="M8 7a3 3 0 0 1 6 0"/>',
  },
  {
    rotulo: "Sistemas sob medida",
    titulo: "Um sistema adaptado ao seu negócio",
    texto: "Nem todo negócio funciona da mesma maneira. Por isso, a NovJ Digital pode adaptar sistemas existentes ou desenvolver uma solução de acordo com as regras e necessidades da sua empresa.",
    listaTitulo: "Exemplos",
    grupos: [
      { nome: "Barbearias e salões", itens: ["Agenda", "Cadastro de clientes", "Clube de assinatura", "Controle de mensalidades", "PDV", "Relatórios"] },
      { nome: "Academias", itens: ["Reserva de aulas", "Cadastro de alunos", "Mensalidades", "Controle de planos", "Acompanhamento de pagamentos"] },
      { nome: "Lanchonetes e restaurantes", itens: ["Cardápio", "Pedidos", "Painel de atendimento", "Organização de produtos", "Controle de caixa"] },
    ],
    cta: "Quero organizar meu negócio",
    mensagem: "Olá, Jhemison! Vim pelo site da NovJ Digital e quero um sistema para organizar o meu negócio.",
    icone: '<rect x="3" y="5" width="16" height="15" rx="2"/><path d="M3 9h16M7 13h3M7 16h6"/>',
  },
  {
    rotulo: "Agendamento online",
    titulo: "Deixe o cliente marcar o horário sozinho",
    texto: "Facilite o atendimento permitindo que o cliente veja os horários disponíveis e faça o próprio agendamento. Você acompanha a agenda e reduz a troca de mensagens manuais.",
    listaTitulo: "Possibilidades",
    itens: ["Escolha do serviço", "Escolha do profissional", "Seleção de data e horário", "Confirmação do agendamento",
      "Organização da agenda", "Lembretes, conforme a configuração", "Integração com o site ou WhatsApp"],
    cta: "Quero uma agenda online",
    mensagem: "Olá, Jhemison! Vim pelo site da NovJ Digital e quero uma agenda online para o meu negócio.",
    icone: '<rect x="3" y="5" width="16" height="15" rx="2"/><path d="M3 9h16M7 2v4M15 2v4M8 14l2 2 4-4"/>',
  },
  {
    rotulo: "Agentes de IA e automações",
    titulo: "Atenda melhor sem precisar responder tudo manualmente",
    texto: "Agentes de inteligência artificial e automações podem ajudar sua empresa a responder clientes, apresentar serviços, qualificar contatos, realizar agendamentos e executar tarefas repetitivas.",
    listaTitulo: "Aplicações possíveis",
    itens: ["Atendimento inicial no WhatsApp", "Respostas para dúvidas frequentes", "Apresentação de preços e serviços", "Qualificação de leads",
      "Agendamento inteligente", "Encaminhamento para atendimento humano", "Integração entre ferramentas", "Organização de informações",
      "Notificações automáticas", "Acompanhamento de pedidos"],
    notas: [
      "O comportamento do agente depende das informações, regras e integrações configuradas para cada negócio. O atendimento automatizado não substitui necessariamente o atendimento humano em todas as situações.",
      "Quando for utilizada a API oficial do WhatsApp, podem existir custos relacionados às mensagens e às regras da plataforma. Esses custos devem ser informados antes da contratação e podem ser cobrados diretamente pela plataforma ou repassados conforme o contrato.",
    ],
    cta: "Quero automatizar meu atendimento",
    mensagem: "Olá, Jhemison! Vim pelo site da NovJ Digital e quero automatizar o atendimento do meu negócio.",
    icone: '<rect x="4" y="7" width="14" height="11" rx="3"/><path d="M11 3v4M8 12h.01M14 12h.01M9 15h4"/>',
  },
];
