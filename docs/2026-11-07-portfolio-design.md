# Portfólio JhemisonTech: design

## Por quê
O portfólio é a página que o Jhemison manda a potenciais clientes (pequenos negócios e autônomos). Ela precisa mostrar, em poucos segundos, o que ele faz e provar com projetos funcionando. Hoje não existe nenhum portfólio.

**Sucesso:** a pessoa abre o link no celular, entende o que ele oferece, abre um projeto de exemplo e chama no WhatsApp.

## Objetivos
- Mostrar a marca JhemisonTech com o visual dos destaques do Instagram: traço fino preto, aquarela azul e fundo branco.
- Mostrar os projetos publicados (Loja, Barbearia, Espetaria e, desde 2026-11-11, a **Volt Academia**, um projeto de demonstração), cada um com print e o botão **Ver site**.
- Levar o visitante a falar no WhatsApp.

## Fora do escopo
- O Madeixas Studio, que é de uma cliente real e não foi aprovado. O jtech-modelo também fica de fora.
- O botão "Ver código" e o link para o GitHub.
- Login, banco de dados e formulário de contato.
- Card de Agentes de IA, porque por enquanto não há projeto desse tipo.

## O que não pode acontecer
- Publicar o login ou a senha de algum painel.
- Usar o número de WhatsApp de algum cliente. O único número é o do Jhemison.
- Ficar pesado ou lento no celular.

## Partes da página (decididas pelo usuário)
1. **Topo**
   - Logo e "JhemisonTech", com "Jhemison" escuro e "Tech" azul.
   - Menu: Projetos · Serviços · Contato.
   - Título: "Sites, sistemas e **agentes de IA**", com brilho azul animado em "agentes de IA". Abaixo: "para pequenos negócios e autônomos." e "Agendamento online, loja com PDV e atendimento automático."
   - Botão **Falar no WhatsApp**.
2. **Projetos:** os cards da Loja, da Barbearia e da Espetaria. Cada card tem:
   - o print;
   - o nome e uma frase sobre o projeto;
   - etiquetas com as funções;
   - o botão **Ver site**;
   - a frase "Quer conhecer mais do projeto? **Me chama no WhatsApp**", que abre o WhatsApp com uma mensagem citando o projeto.
3. **O que eu faço:** quatro serviços com ícones de traço fino azul: Sites com painel, Agendamento online, Loja + PDV e Agentes de IA.
4. **Contato:**
   - WhatsApp (73) 98804-5634;
   - Instagram @jhemisontech;
   - e-mail jhemisontech@gmail.com.

## Visual aprovado (mockup v20)
- **Fundo e manchas:** fundo branco, com manchas de aquarela azul que flutuam devagar.
- **Destaques animados:** o brilho azul passa pelo texto em destaque e pelo botão principal.
- **Ícones e cards:** os ícones de serviço "boiam" de leve, e os cards sobem um pouco quando o mouse passa por cima.
- **Logo:**
  - é a imagem do destaque, com a aquarela azul, o traço reforçado e o fundo transparente;
  - mede 56px e flutua 5px a cada 4 segundos;
  - **acende uma vez** quando chega no ponto mais alto.
- **Quem pediu "reduzir movimento" no aparelho:**
  - continuam: as manchas, o brilho no texto e a logo;
  - param: os ícones boiando e os cards subindo.

## Projetos nos cards (rascunho do texto; o usuário pode corrigir)
| Projeto | Frase | Etiquetas |
|---|---|---|
| Jtech Loja Online | Loja virtual com carrinho e acompanhamento do pedido. | Catálogo · Acompanhamento · PDV · Estoque |
| Jtech Barbearia | Agendamento online com painel para o barbeiro. | Agenda online · Clube de assinatura · PDV · Relatórios |
| Jtech Espetaria | Cardápio digital com pedido pelo WhatsApp. | Cardápio · Pedido pelo WhatsApp · Painel do dono |

## Como é feito
- **Tecnologia:** HTML, CSS e JS puros, sem build e sem Firebase no código (a página é fixa).
- **Os projetos ficam num arquivo `js/projetos.js`.** Para colocar um projeto novo, basta acrescentar um item nesse arquivo.
- **Prints:**
  - os das páginas públicas eu tiro automaticamente, nas versões de celular e de computador;
  - os dos painéis o usuário tira e salva em `prints-painel/`.
- **Hospedagem:** Firebase Hosting, com deploy sempre usando `--project`. No começo o endereço é `jhemisontech.web.app`, e o domínio próprio entra depois, sem mexer no site.
- **Git:** repositório público `jhemisontech-portfolio` no GitHub.

## Decisões minhas (o usuário pode trocar)
- **Card com abas "Site | Painel":** quando houver print do painel, ele aparece numa segunda aba do card. Sem print, o card mostra só o site.
- **Prévia do link:** a página terá a prévia que aparece quando o link é mandado no WhatsApp (imagem, título e descrição). Isso é importante porque o portfólio vai ser enviado por mensagem.
- **Rodapé:** "© 2026 JhemisonTech".
- **Testes:**
  - uma verificação automática do `projetos.js` (todo projeto tem nome, link, print e etiquetas);
  - um teste no navegador cobrindo os links do WhatsApp, a ausência de rolagem lateral no celular e a ausência de erros.

## Fica para depois
- O domínio próprio (o `mantoriafut.com.br` não combina com a marca, e o usuário está decidindo se registra `jhemisontech.com.br`).
- O texto final sobre Agentes de IA.
