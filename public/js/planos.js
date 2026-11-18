// planos.js — Benefícios, modelo de contratação, "Como funciona", confiança e perguntas frequentes
// (textos do documento "NOVAA On atualizado"). Os serviços ficam em servicos.js.
// Para mudar um texto, edite aqui e rode "npm run gerar".

// "Você se identifica?": situações do dia a dia do cliente, logo depois do topo
export const DORES = {
  texto: "Se alguma dessas situações acontece no seu negócio, dá para resolver com uma solução digital simples.",
  // Uma situação para cada serviço: site (2), loja, sistema, agendamento, IA e automação (2)
  itens: [
    "Quando procuram sua empresa no Google, o cliente não encontra um site, só um perfil de rede social ou nada.",
    "Você precisa mandar foto, preço e endereço toda vez, porque não tem um lugar com todas as informações do seu negócio.",
    "Vende pelo direct e pelo WhatsApp, anota pedido na mão e às vezes vende o que já não tem no estoque.",
    "Clientes, mensalidades e caixa ficam em caderno ou planilha, e no fim do mês é difícil saber quanto entrou.",
    "A agenda fica no caderno ou nas conversas, e às vezes dois clientes marcam no mesmo horário.",
    "Perde clientes porque demorou para responder enquanto estava atendendo.",
    "Tarefas repetitivas, como confirmar horário, avisar cliente e passar dados para planilha, tomam horas do seu dia.",
  ],
  cta: "Quero resolver isso no meu negócio",
  mensagem: "Olá, Jhemison! Vim pelo site da NOVAA On e me identifiquei com algumas situações. Quero conversar sobre o meu negócio.",
};

// Seção de benefícios, depois do "Você se identifica?"
export const BENEFICIOS = [
  { titulo: "Mais profissionalismo", texto: "Apresente sua empresa com um site ou sistema que transmite confiança aos clientes." },
  { titulo: "Mais organização", texto: "Centralize pedidos, agendamentos, informações, estoque ou mensalidades em um só lugar." },
  { titulo: "Mais agilidade", texto: "Reduza o tempo gasto respondendo mensagens e realizando tarefas repetitivas." },
  { titulo: "Suporte direto", texto: "Fale diretamente com Jhemison pelo WhatsApp, sem intermediários e sem atendimento impessoal." },
];

// Modelo de contratação: implantação paga uma vez + mensalidade
export const CONTRATACAO = {
  titulo: "Implantação uma vez. Suporte e manutenção todos os meses.",
  texto: "Cada projeto começa com uma implantação, na qual a solução é configurada de acordo com o negócio. Depois, existe uma mensalidade para manter o site, sistema ou automação funcionando, atualizado e com suporte.",
  blocos: [
    { titulo: "A implantação pode incluir", itens: ["Conversa inicial", "Entendimento da rotina", "Definição da solução", "Configuração", "Personalização",
      "Criação ou adaptação de páginas", "Cadastro inicial de informações", "Testes", "Publicação", "Orientação básica de uso"] },
    { titulo: "A mensalidade pode incluir, conforme a proposta", itens: ["Hospedagem", "Domínio", "Manutenção básica", "Atualizações", "Site ou sistema no ar",
      "Suporte direto pelo WhatsApp", "Até duas pequenas alterações por mês"] },
    { titulo: "Exemplos de pequenas alterações", itens: ["Troca de preço", "Substituição de foto", "Alteração de texto", "Mudança de horário",
      "Atualização de resposta do atendente", "Pequenas correções visuais"] },
    { titulo: "O que pode ser cobrado à parte", itens: ["Novas páginas", "Novas áreas do sistema", "Novos módulos", "Mudanças estruturais", "Integrações adicionais",
      "Funcionalidades que não estavam no escopo", "Grandes alterações de layout", "Migração de dados", "Desenvolvimento de uma nova solução"] },
  ],
  aviso: "Mudanças pequenas podem estar incluídas na mensalidade, conforme o plano contratado. Novas funções, páginas ou alterações maiores são avaliadas e orçadas separadamente. Tudo deve ser combinado antes da execução.",
  cta: "Pedir orçamento",
  mensagem: "Olá, Jhemison! Vim pelo site da NOVAA On e gostaria de pedir um orçamento sem compromisso.",
};

// "Como funciona": é uma sequência de verdade, por isso aparece numerado
export const PASSOS = [
  { titulo: "A gente conversa", texto: "Pelo WhatsApp ou pessoalmente, você explica como funciona o seu negócio, quais são suas dificuldades e o que precisa melhorar." },
  { titulo: "Você vê uma prévia", texto: "Em poucos dias, você recebe um link ou uma demonstração para visualizar como a solução pode funcionar." },
  { titulo: "Ajustamos juntos", texto: "Alteramos fotos, textos, preços, horários, cores e informações para deixar tudo de acordo com o seu negócio." },
  { titulo: "Seu negócio fica no ar", texto: "Depois da aprovação, a solução é publicada. Você recebe o endereço e continua contando com suporte direto quando precisar." },
];

export const PASSOS_CTA = {
  texto: "Quero conversar sobre meu projeto",
  mensagem: "Olá, Jhemison! Vim pelo site da NOVAA On e quero conversar sobre o meu projeto.",
};

// Confiança e transparência: o que fica combinado antes de começar
export const CONFIANCA = {
  texto: "Antes de começar, você recebe uma explicação sobre o que será desenvolvido, o que está incluído na implantação, o que faz parte da mensalidade e quais itens poderão ser cobrados à parte.",
  itens: ["O que será entregue", "Prazo estimado", "Valor da implantação", "Valor da mensalidade", "Forma de pagamento", "O que está incluído",
    "Limite de alterações", "Custos de plataformas externas", "Custos de mensagens do WhatsApp", "Responsabilidades do cliente", "Prazo de suporte",
    "Regras de cancelamento", "Propriedade e acesso aos dados", "Condições para usar domínio próprio"],
};

export const PERGUNTAS = [
  { pergunta: "Preciso entender de tecnologia para contratar?",
    resposta: "Não. Você só precisa me explicar como funciona o seu negócio e o que deseja melhorar. Toda a parte técnica de criação, configuração e publicação fica por conta da NOVAA On." },
  { pergunta: "Quanto tempo leva para ficar pronto?",
    resposta: "O prazo varia conforme o tipo de projeto (um site institucional é mais rápido que um sistema completo ou agente de IA) e a agilidade no envio das informações e aprovações. Antes de começarmos, eu passo a previsão exata de entrega na nossa conversa." },
  { pergunta: "A solução fica no meu nome?",
    resposta: "Os dados do seu negócio são seus, e o domínio pode ser registrado no seu nome. As condições de titularidade, registro do domínio e acessos ficam definidas claramente na proposta antes do início do projeto, para garantir sua segurança e autonomia." },
  { pergunta: "Posso usar um domínio que já tenho?",
    resposta: "Sim, desde que o endereço seja compatível e você tenha os dados de acesso da conta onde ele foi registrado para fazermos a configuração técnica." },
  { pergunta: "O que a mensalidade inclui?",
    resposta: "Conforme o plano contratado, a mensalidade cobre a hospedagem para manter tudo no ar, manutenção básica, atualizações, suporte direto comigo pelo WhatsApp e até duas pequenas alterações por mês (como trocar preços, fotos, horários ou textos)." },
  { pergunta: "O domínio está incluído na mensalidade?",
    resposta: "O registro e a renovação do domínio podem estar incluídos dependendo do plano escolhido. Todos os detalhes sobre taxas de renovação ou condições do endereço ficam discriminados na proposta antes do fechamento." },
  { pergunta: "Posso alterar preços e horários depois?",
    resposta: "Sim. Nos sistemas com painel administrativo você mesmo atualiza pelo celular, e nos sites institucionais basta me enviar uma mensagem dentro do seu limite mensal de pequenas alterações." },
  { pergunta: "O que não está incluído na mensalidade?",
    resposta: "Criação de novas páginas, novos módulos no sistema, integrações extras ou grandes mudanças de estrutura e layout não fazem parte da manutenção básica e são orçados separadamente mediante aprovação prévia." },
  { pergunta: "O atendente de IA funciona 24 horas?",
    resposta: "Sim, o agente fica ativo continuamente para responder dúvidas, apresentar serviços e realizar agendamentos conforme as regras configuradas para a sua empresa. Quando surge um caso fora do padrão, ele encaminha a conversa para o atendimento humano." },
  { pergunta: "O WhatsApp tem custo extra?",
    resposta: "Quando o projeto utiliza a API oficial do WhatsApp, a Meta pode cobrar taxas de acordo com o volume e o tipo de mensagem enviada. Esses valores e limites são sempre informados com transparência antes da contratação." },
  { pergunta: "Você atende apenas na minha cidade?",
    resposta: "Não. Todo o processo de criação, acompanhamento e suporte funciona de forma online pelo WhatsApp para negócios de qualquer lugar, com possibilidade de atendimento presencial conforme localização e disponibilidade de agenda." },
  { pergunta: "Posso cancelar quando quiser?",
    resposta: "Sim. As regras de cancelamento, prazos de aviso prévio e entrega dos acessos ou dados do seu negócio ficam registrados com clareza no contrato desde o início." },
];
