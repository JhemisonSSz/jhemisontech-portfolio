// planos.js — O que toda mensalidade inclui, a observação sobre custos, o "Como funciona" e as perguntas frequentes.
// Os serviços ficam em servicos.js. Para mudar um texto, edite aqui e rode "npm run gerar".

// O que toda mensalidade cobre (aparece num quadro embaixo dos cards de serviço)
export const INCLUSO = [
  "Hospedagem e domínio, sem custo extra",
  "Site ou sistema sempre no ar, seguro e atualizado",
  "Até 2 alterações pequenas por mês, como trocar preço, foto, texto, horário ou respostas do atendente",
  "Suporte direto comigo pelo WhatsApp",
];

export const OBSERVACAO =
  "No atendente de IA com a API oficial do WhatsApp, as mensagens que passarem do que está incluído são pagas pelo cliente. Mudanças maiores, como uma página ou função nova, são orçadas à parte. Tudo fica combinado em contrato.";

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
  { pergunta: "Como funciona a mensalidade do atendente de IA?",
    resposta: "Ela cobre a plataforma do atendente, a conexão com o WhatsApp, o suporte e os ajustes nas respostas. No WhatsApp comum, o valor é fixo todo mês. Na API oficial do WhatsApp, cada mensagem tem um custo: a mensalidade já inclui uma quantidade, e se o seu volume passar dela, a diferença é paga por você. Tudo fica combinado em contrato." },
  { pergunta: "Posso mudar preços e horários depois?",
    resposta: "Sim. No agendamento e nos sistemas com painel, você mesmo muda pelo celular. No site, é só me mandar uma mensagem." },
  { pergunta: "O endereço do site fica no meu nome?",
    resposta: "Sim. O domínio é registrado no seu nome ou no CNPJ do seu negócio. Eu cuido da parte técnica, mas o endereço é seu." },
  { pergunta: "Você atende na minha cidade?",
    resposta: "Sim. O trabalho pode ser feito todo pelo WhatsApp, então atendo negócios de qualquer cidade do Brasil." },
];
