# NovJ Digital: portfólio

Este é o portfólio da NovJ Digital (antes JhemisonTech), que faz sites, lojas virtuais, sistemas, agendamento online e agentes de IA para pequenos negócios. É uma página única e fixa: não tem banco de dados nem login.

- **Endereço:** https://novaaon.web.app (o domínio próprio entra depois, veja abaixo).
- O endereço antigo, https://jhemisontech.web.app, foi apagado em 2026-11-18 e não funciona mais. Links antigos (Instagram, cartões etc.) precisam ser trocados pelo novo.
- **Tecnologia:** HTML, CSS e JavaScript puros, sem build. A hospedagem é o Firebase Hosting.

## Arquivos

```
public/
  index.html        a página: topo, projetos, "O que eu faço" (com os valores), como funciona, sobre, perguntas, contato
  css/estilo.css    visual (cores no topo do arquivo) e animações
  js/projetos.js    LISTA DE PROJETOS dos cards: título pelo nicho, benefício, convite, link e prints
  js/servicos.js    cards de "O que eu faço": texto, "ideal para" e mensagem do WhatsApp (sem preços: cada card pede orçamento)
  js/planos.js      o que a mensalidade inclui, "Como funciona" e perguntas frequentes
  js/conteudo.js    monta o HTML dos cards, serviços e contato (usado por `npm run gerar`)
  scripts/gerar.mjs grava esse HTML direto no index.html (para o Google e quem está sem JavaScript)
  js/contato.js     WhatsApp, Instagram e e-mail (mude só aqui)
  js/pagina.js      monta os cards e preenche os contatos
  js/movimento.js   movimento ao rolar: blocos aparecem em sequência e os preços contam até o valor
  img/logo-luz.png  logo (lâmpada + cérebro com a luz azul)
  img/og.jpg        imagem da prévia quando o link é enviado no WhatsApp
  img/prints/       prints dos sites: {id}-pc.jpg e {id}-cel.jpg
tests/              testes dos dados (npm test)
docs/               design aprovado e plano de construção
```

## Colocar um projeto novo

1. Publique o projeto e anote o link.
2. Gere os prints:
   - `img/prints/<id>-pc.jpg`: 1280×800, a tela do computador;
   - `img/prints/<id>-cel.jpg`: 390×844, a tela do celular.

   O Claude tem um script que tira os dois automaticamente. Se for tirar à mão, use a primeira tela do site, sem rolar.
3. Em `public/js/projetos.js`, copie um bloco e troque `id`, `titulo` (pelo tipo de negócio do cliente), `nome` (nome da demonstração), `frase` (o benefício), `etiquetas` (3 ou 4), `convite` ("Quero um sistema assim para...") e `url`.
4. Não coloque prints do painel administrativo: os cards mostram só as telas do site. Os prints de dentro do painel ficam fora do projeto, para não aparecerem na internet.
5. Rode **`npm run gerar`**: ele grava os cards no `index.html`. Depois rode `npm test`. Ele confere se todo print citado existe e **avisa se você esqueceu de rodar o `gerar`**.

## Mudar um serviço ou uma pergunta

Serviços: edite `public/js/servicos.js`. Perguntas e "Como funciona": edite `public/js/planos.js`. Depois rode `npm run gerar` e `npm test`.

> Os cards, os serviços e o contato ficam escritos direto no HTML de propósito: assim o Google e quem abre a página sem JavaScript já veem tudo. Na aba **Painel** de cada card o botão vira "Pedir acesso ao painel" (os painéis pedem login de propósito: quem quer ver, pede).

## Testar no computador

- Abra `public/index.html` com a extensão **Live Server** do VS Code. Com dois cliques não funciona, por causa dos `import`.
- Rode `npm test` para os testes dos dados. Precisa só do Node 22.

## Publicar

Faça o commit primeiro e depois publique, **sempre com `--project`**. O projeto no Firebase tem o ID `jhemisontech-a080d` (o ID de um projeto nunca pode ser trocado). Para não precisar digitar o nome antigo, o `.firebaserc` tem o apelido `novaa`, que aponta para esse mesmo projeto. O portfólio fica no site `novaaon` (novaaon.web.app), e o `firebase.json` já aponta para ele.

```
firebase deploy --project novaa --only hosting
```

## Ligar um domínio próprio (quando tiver)

1. No console do Firebase, abra o site **novaaon** em **Hosting → Adicionar domínio personalizado** e digite o domínio.
2. O Firebase mostra os registros de DNS (um TXT e um ou dois A). Copie e cole na Hostinger, em **Domínios → DNS / Nameservers**.
3. Espere a verificação, que pode levar algumas horas. O cadeado HTTPS vem sozinho.
4. No `public/index.html`, troque `https://novaaon.web.app/` pelo domínio novo em `canonical`, `og:url`, `og:image` e nos dados para o Google (JSON-LD). Depois publique de novo.
