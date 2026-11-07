// contato.js — Os contatos do Jhemison e os links do WhatsApp com mensagem pronta.
// Mude os contatos só aqui: a página inteira usa estes valores.

export const CONTATO = {
  whatsapp: "5573988045634",          // com 55 e DDD, só números
  whatsappTexto: "(73) 98804-5634",   // como aparece escrito na página
  instagram: "jhemisontech",          // sem o @
  email: "jhemisontech@gmail.com",
};

// Link que abre o WhatsApp do Jhemison já com a mensagem escrita
export const linkWhatsApp = (mensagem) => `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(mensagem)}`;

// Mensagem do link "Me chama no WhatsApp" de cada card
export const mensagemProjeto = (nome) => `Olá! Vi o projeto ${nome} no seu portfólio e quero saber mais.`;
