// projetos.js — A lista de projetos que aparece no portfólio, na ordem dos cards.
// Para colocar um projeto novo: copie um bloco, troque os textos e gere os prints (veja o README).
//
// Campos:
//   id         nome curto, sem espaço (usado nos nomes dos prints)
//   nome       título do card
//   frase      uma frase curta sobre o projeto
//   etiquetas  3 ou 4 funções principais
//   url        endereço do site publicado
//   prints     print do site no computador (pc) e no celular (cel), dentro de public/
//   painel     prints de DENTRO do painel (opcional), em img/prints/painel/.
//              Se tiver algum, o card ganha as abas "Site | Painel"; com 2 ou mais, aparecem bolinhas.
//              Não use print da tela de login nem print com abas do navegador ou barra do Windows.

const prints = (id) => ({ pc: `img/prints/${id}-pc.jpg`, cel: `img/prints/${id}-cel.jpg` });
const painel = (...arquivos) => arquivos.map((a) => `img/prints/painel/${a}`);

export const PROJETOS = [
  {
    id: "loja",
    nome: "Jtech Loja Online",
    frase: "Loja virtual com carrinho e acompanhamento do pedido.",
    etiquetas: ["Catálogo", "Acompanhamento", "PDV", "Estoque"],
    url: "https://jtech-loja-online.web.app/",
    prints: prints("loja"),
    painel: painel("loja-estoque.jpg", "loja-dashboard.jpg"),
  },
  {
    id: "barbearia",
    nome: "Jtech Barbearia",
    frase: "Agendamento online com painel para o barbeiro.",
    etiquetas: ["Agenda online", "Clube de assinatura", "PDV", "Relatórios"],
    url: "https://jtech-barbearia.web.app/",
    prints: prints("barbearia"),
    painel: painel("barbearia-agenda.jpg", "barbearia-relatorios.jpg"),
  },
  {
    id: "espetaria",
    nome: "Jtech Espetaria",
    frase: "Cardápio digital com pedido pelo WhatsApp.",
    etiquetas: ["Cardápio", "Pedido pelo WhatsApp", "Painel do dono"],
    url: "https://jtech-espetaria.web.app/",
    prints: prints("espetaria"),
    painel: painel("espetaria-editar-cardapio.jpg"),
  },
];
