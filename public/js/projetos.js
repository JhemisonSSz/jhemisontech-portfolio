// projetos.js — A lista de projetos que aparece no portfólio, na ordem dos cards.
// Para colocar um projeto novo: copie um bloco, troque os textos, gere os prints (veja o README)
// e rode "npm run gerar" para gravar o card no index.html.
//
// Campos:
//   id         nome curto, sem espaço (usado nos nomes dos prints)
//   titulo     título do card, pelo tipo de negócio do cliente (ex.: "Sistema para Barbearias e Salões")
//   nome       nome da demonstração, que aparece em letra menor embaixo do título
//   frase      o benefício em uma ou duas frases curtas
//   etiquetas  3 ou 4 funções principais
//   convite    o que o visitante diz no convite do WhatsApp (sem a seta): "Quero um sistema assim para minha barbearia"
//   url        endereço do site publicado
//   prints     print do site no computador (pc) e no celular (cel), dentro de public/
//   painel     prints de DENTRO do painel (opcional), em img/prints/painel/.
//              Se tiver algum, o card ganha as abas "Site | Painel"; com 2 ou mais, aparecem bolinhas.
//              Na aba Painel o botão vira "Pedir acesso ao painel" (os painéis pedem login de propósito).
//              Não use print da tela de login nem print com abas do navegador ou barra do Windows.

const prints = (id) => ({ pc: `img/prints/${id}-pc.jpg`, cel: `img/prints/${id}-cel.jpg` });
const painel = (...arquivos) => arquivos.map((a) => `img/prints/painel/${a}`);

export const PROJETOS = [
  {
    id: "loja",
    titulo: "Loja Virtual com PDV e Estoque",
    nome: "Jtech Loja Online",
    frase: "Venda pela internet e no balcão em um só lugar. Controle seu estoque automaticamente e deixe o cliente acompanhar o pedido.",
    etiquetas: ["Catálogo", "Acompanhamento", "PDV", "Estoque"],
    convite: "Quero uma loja virtual assim para o meu negócio",
    url: "https://jtech-loja-online.web.app/",
    prints: prints("loja"),
    painel: painel("loja-pdv.png", "loja-dashboard.png", "loja-pedidos.png", "loja-produtos.png", "loja-relatorios.png"),
  },
  {
    id: "barbearia",
    titulo: "Sistema para Barbearias e Salões",
    nome: "Jtech Barbearia",
    frase: "Acabe com os furos na agenda. Seus clientes marcam horário sozinhos e você gerencia assinaturas e faturamento no painel.",
    etiquetas: ["Agenda online", "Clube de assinatura", "PDV", "Relatórios"],
    convite: "Quero um sistema assim para minha barbearia",
    url: "https://jtech-barbearia.web.app/",
    prints: prints("barbearia"),
    painel: painel("barbearia-agenda.png", "barbearia-relatorios.png", "barbearia-contas-a-pagar.png"),
  },
  {
    id: "volt",
    titulo: "Sistema para Academias",
    nome: "Volt Academia",
    frase: "Seus alunos reservam aula sozinhos e você controla vagas, lista de espera e mensalidades no painel.",
    etiquetas: ["Reserva de aulas", "Lista de espera", "Mensalidade", "Painel do dono"],
    convite: "Quero um sistema assim para minha academia",
    url: "https://volt-academia.web.app/",
    prints: prints("volt"),
    painel: painel("volt-agenda.png", "volt-alunos.png", "volt-resumo.png"),
  },
  {
    id: "espetaria",
    titulo: "Cardápio Digital com Pedido pelo WhatsApp",
    nome: "Jtech Espetaria",
    frase: "Receba pedidos organizados direto no WhatsApp, sem pagar taxas de aplicativos e com painel fácil para atualizar preços.",
    etiquetas: ["Cardápio", "Pedido pelo WhatsApp", "Painel do dono"],
    convite: "Quero um cardápio digital assim para o meu negócio",
    url: "https://jtech-espetaria.web.app/",
    prints: prints("espetaria"),
    painel: painel("espetaria-editar-cardapio.jpg"),
  },
];
