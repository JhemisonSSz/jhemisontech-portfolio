// planos.js — Os planos, o que a mensalidade inclui, o "Como funciona" e as perguntas frequentes.
// Para mudar um preço ou um texto, edite aqui e rode "npm run gerar".
//
// Campos de cada plano:
//   titulo        nome do plano
//   mensal        valor da mensalidade ("R$ 79")
//   aPartirDe     true quando o valor é "a partir de" (projetos que variam de tamanho)
//   implantacao   valor da implantação, sempre "a partir de"
//   inclui        o que vem no plano (3 a 5 itens curtos)
//   botao         texto do botão
//   mensagem      o que vai escrito no WhatsApp quando o visitante clica no botão
//   destaque      true em UM plano só: ganha o selo "Mais procurado"

export const PLANOS = [
  {
    titulo: "Site do negócio",
    mensal: "R$ 39",
    aPartirDe: false,
    implantacao: "R$ 300",
    inclui: ["Página com serviços, preços e fotos", "Botão de WhatsApp e mapa", "Pronto para aparecer no Google", "Funciona bem no celular"],
    botao: "Quero um site",
    mensagem: "Olá, Jhemison! Vi os planos no seu site e tenho interesse no plano Site do negócio.",
  },
  {
    titulo: "Site + agendamento",
    mensal: "R$ 79",
    aPartirDe: false,
    implantacao: "R$ 300",
    inclui: ["Tudo do plano Site do negócio", "Seu cliente marca horário sozinho, 24h", "Painel com agenda, serviços e folgas", "Eu configuro tudo para você"],
    botao: "Quero este plano",
    mensagem: "Olá, Jhemison! Vi os planos no seu site e tenho interesse no plano Site + agendamento.",
    destaque: true,
  },
  {
    titulo: "Atendente de IA",
    mensal: "R$ 300",
    aPartirDe: true,
    implantacao: "R$ 1.000",
    inclui: ["Responde no WhatsApp a qualquer hora", "Treinado com as informações do seu negócio", "Você assume a conversa quando quiser", "No WhatsApp comum ou na API oficial"],
    botao: "Quero saber mais",
    mensagem: "Olá, Jhemison! Vi os planos no seu site e quero saber mais sobre o Atendente de IA no WhatsApp.",
  },
  {
    titulo: "Sistema sob medida",
    mensal: "R$ 350",
    aPartirDe: true,
    implantacao: "R$ 1.500",
    inclui: ["Barbearia com assinatura e PDV", "Academia: alunos, aulas e mensalidades", "Loja online com PDV e estoque", "Lanchonete e restaurante com pedidos", "Adaptado às regras do seu negócio"],
    botao: "Pedir orçamento",
    mensagem: "Olá, Jhemison! Vi os planos no seu site e quero um orçamento de um sistema sob medida.",
  },
];

// O que toda mensalidade cobre (aparece num quadro embaixo dos planos)
export const INCLUSO = [
  "Hospedagem e domínio, sem custo extra",
  "Site ou sistema sempre no ar, seguro e atualizado",
  "Até 2 alterações pequenas por mês, como trocar preço, foto, texto, horário ou respostas do atendente",
  "Suporte direto comigo pelo WhatsApp",
];

export const OBSERVACAO =
  "Só o agendamento, sem site: R$ 49/mês. No atendente de IA com a API oficial do WhatsApp, as mensagens que passarem do plano são pagas pelo cliente. Mudanças maiores, como uma página ou função nova, são orçadas à parte. Tudo fica combinado em contrato.";

// "Como funciona": é uma sequência de verdade, por isso aparece numerado
export const PASSOS = [
  { titulo: "A gente conversa", texto: "Pelo WhatsApp ou pessoalmente. Você me conta como funciona o seu negócio." },
  { titulo: "Você vê uma prévia", texto: "Em poucos dias você recebe um link para ver como vai ficar, já com a cara do seu negócio." },
  { titulo: "Ajustamos juntos", texto: "Fotos, textos, preços e cores do jeito que você quiser." },
  { titulo: "Seu negócio no ar", texto: "Com o seu endereço na internet e suporte direto comigo quando precisar." },
];

export const PERGUNTAS = [
  { pergunta: "Preciso entender de internet para ter um site?",
    resposta: "Não. Eu cuido de tudo: criação, endereço na internet e publicação. Se você sabe usar o WhatsApp, consegue usar o painel." },
  { pergunta: "Quanto tempo leva para ficar pronto?",
    resposta: "Um site simples fica pronto em poucos dias. Sistemas e agentes de IA levam um pouco mais, e eu te passo o prazo certinho na nossa conversa." },
  { pergunta: "O que a mensalidade cobre?",
    resposta: "Hospedagem, domínio, manutenção para manter tudo no ar, suporte pelo WhatsApp e até 2 alterações pequenas por mês. Você não tem outro custo para manter funcionando." },
  { pergunta: "Posso mudar preços e horários depois?",
    resposta: "Sim. No agendamento e nos sistemas com painel, você mesmo muda pelo celular. No site, é só me mandar uma mensagem." },
  { pergunta: "O endereço do site fica no meu nome?",
    resposta: "Sim. O domínio é registrado no seu nome ou no CNPJ do seu negócio. Eu cuido da parte técnica, mas o endereço é seu." },
  { pergunta: "Você atende na minha cidade?",
    resposta: "Sim. O trabalho pode ser feito todo pelo WhatsApp, então atendo negócios de qualquer cidade do Brasil." },
];
