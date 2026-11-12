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

// Mensagens prontas dos botões de cada card de projeto
// Convite do nicho: "Olá! Vi o Sistema para Barbearias e Salões (demonstração Jtech Barbearia) no seu portfólio. Quero um sistema assim para minha barbearia."
export const mensagemConvite = (p) => `Olá! Vi o ${p.titulo} (demonstração ${p.nome}) no seu portfólio. ${p.convite}.`;
// Botão "Pedir acesso ao painel" (os painéis pedem login de propósito: quem quer ver, pede)
export const mensagemPainel = (p) => `Olá! Vi o painel da demonstração ${p.nome} no seu portfólio e quero pedir acesso para testar.`;
