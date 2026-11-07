# JhemisonTech: portfólio

Este é o portfólio da JhemisonTech, que faz sites, sistemas e agentes de IA para pequenos negócios e autônomos. É uma página única e fixa: não tem banco de dados nem login.

- **Endereço:** https://jhemisontech.web.app (o domínio próprio entra depois, veja abaixo).
- **Tecnologia:** HTML, CSS e JavaScript puros, sem build. A hospedagem é o Firebase Hosting.

## Arquivos

```
public/
  index.html        a página: topo, projetos, "O que eu faço", contato
  css/estilo.css    visual (cores no topo do arquivo) e animações
  js/projetos.js    LISTA DE PROJETOS dos cards: textos, link e prints
  js/contato.js     WhatsApp, Instagram e e-mail (mude só aqui)
  js/pagina.js      monta os cards e preenche os contatos
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
3. Em `public/js/projetos.js`, copie um bloco e troque `id`, `nome`, `frase`, `etiquetas` (3 ou 4) e `url`.
4. Opcional: coloque prints de **dentro** do painel em `public/img/prints/painel/` (nome em minúsculas, sem espaço, por exemplo `loja-estoque.jpg`) e liste os arquivos em `painel: painel("loja-estoque.jpg", ...)`. O card ganha sozinho as abas **Site | Painel**, e com 2 ou mais prints aparecem as bolinhas.
   - **Antes de colocar, confira o print.** Não use a tela de login. Não use print da tela inteira, que mostra as abas do navegador, os favoritos e a barra do Windows. Tudo o que está em `public/` vai para a internet.
   - Os prints que não vão para o site ficam em `prints-painel-nao-usados/`, que fica fora do Git e fora do site.
5. Rode `npm test`. Ele confere se todo print citado existe.

## Testar no computador

- Abra `public/index.html` com a extensão **Live Server** do VS Code. Com dois cliques não funciona, por causa dos `import`.
- Rode `npm test` para os testes dos dados. Precisa só do Node 22.

## Publicar

Faça o commit primeiro e depois publique, **sempre com `--project`**:

```
firebase deploy --project jhemisontech --only hosting
```

## Ligar um domínio próprio (quando tiver)

1. No console do Firebase, vá em **Hosting → Adicionar domínio personalizado** e digite o domínio.
2. O Firebase mostra os registros de DNS (um TXT e um ou dois A). Copie e cole na Hostinger, em **Domínios → DNS / Nameservers**.
3. Espere a verificação, que pode levar algumas horas. O cadeado HTTPS vem sozinho.
4. No `public/index.html`, troque `https://jhemisontech.web.app/` pelo domínio novo em `og:url` e `og:image`. Depois publique de novo.
