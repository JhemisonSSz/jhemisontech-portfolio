# Portfólio JhemisonTech: plano de construção

> **Para quem for executar:** use superpowers:executing-plans (execução inline, já escolhida pelo usuário). Os passos usam caixas `- [ ]`.

**Objetivo:** uma página única e fixa que apresenta a JhemisonTech, mostra 3 projetos com print e leva o visitante ao WhatsApp.

**Arquitetura:**
- **Página:** HTML, CSS e JS puros, com ES modules e sem build.
- **Dados:** os projetos ficam em `js/projetos.js` e os contatos em `js/contato.js`. Os dois são arquivos sem DOM e são testados com `node --test`.
- **Montagem:** o `js/pagina.js` monta os cards.
- **Visual:** é o do mockup v20 aprovado. O arquivo de referência é `.superpowers/brainstorm/2562-1794078584/content/visual-portfolio-v20.html`.

**Tecnologias:** Node 22 (só para os testes) e Firebase Hosting. Os testes de navegador usam o puppeteer-core da pasta de testes do scratchpad.

**Spec:** `docs/2026-11-07-portfolio-design.md`

## Regras gerais
- **WhatsApp:** o único número é `5573988045634`, com o texto exibido `(73) 98804-5634`.
- **Outros contatos:** Instagram `@jhemisontech` (`https://instagram.com/jhemisontech`) e e-mail `jhemisontech@gmail.com`.
- **Sem link para o código:** nenhum link para GitHub e nenhum botão "Ver código".
- **Sem dados de painel:** nenhum login, senha ou e-mail de painel aparece na página.
- **Textos dos cards:** exatamente os da tabela "Projetos nos cards" do design.
- **Links externos:** abrem em nova aba, com `target="_blank" rel="noopener"`.
- **Reduzir movimento:**
  - continuam: as manchas, o brilho no texto e a logo;
  - param: os ícones boiando e os cards subindo no hover.
- **Deploy:** sempre `firebase deploy --project <id>`. Quem roda o deploy é o usuário.

## Pontos para a revisão conferir
1. **Print que não carrega:** o card continua legível, com fundo azul-claro e o nome do projeto no `alt`.
2. **Etiquetas no celular:** quebram linha sem causar rolagem lateral em 390px.
3. **Links do WhatsApp:** os do card levam uma mensagem citando o nome do projeto, e o do topo leva uma mensagem genérica.
4. **Aba "Painel":** só aparece quando o projeto tem prints do painel. Hoje nenhum tem.
5. **Prévia no WhatsApp:** `og:image` com URL absoluta e `og:title`/`og:description` preenchidos.

---

### Tarefa 1: dados e contatos (TDD)

**Arquivos:** criar `public/js/contato.js`, `public/js/projetos.js`, `tests/dados.test.js` e `package.json` (`"test": "node --test \"tests/*.test.js\""`, `"type": "module"`).

**Produz:**
- `CONTATO = { whatsapp: "5573988045634", whatsappTexto: "(73) 98804-5634", instagram: "jhemisontech", email: "jhemisontech@gmail.com" }`
- `linkWhatsApp(mensagem: string) → "https://wa.me/5573988045634?text=<encodeURIComponent>"`
- `mensagemProjeto(nome: string) → "Olá! Vi o projeto <nome> no seu portfólio e quero saber mais."`
- `PROJETOS`: um array de objetos com os campos:
  - `id`, `nome`, `frase` e `etiquetas` (string[] de 3 a 4 itens);
  - `url` (https);
  - `prints: { pc, cel }` (caminhos relativos a `public/`);
  - `painel` (string[], vazio por enquanto).
  - Ids: `loja` → `https://jtech-loja-online.web.app/`, `barbearia` → `https://jtech-barbearia.web.app/`, `espetaria` → `https://jtech-espetaria.web.app/`.

- [ ] **Teste:** `tests/dados.test.js` confere:
  - o link exato do WhatsApp para "Olá!", que deve ser `https://wa.me/5573988045634?text=Ol%C3%A1!`;
  - que `mensagemProjeto("Jtech Barbearia")` contém "Jtech Barbearia";
  - que são 3 projetos, com os ids na ordem loja, barbearia, espetaria;
  - que nome, frase e etiquetas batem com a tabela do design;
  - que toda `url` começa com `https://`;
  - que todo arquivo citado em `prints` e `painel` existe em `public/`.
- [ ] **Rodar `npm test`.** Esperado: FALHA, porque os módulos ainda não existem.
- [ ] **Implementar** os dois módulos. Os prints serão gerados na Tarefa 2, então a checagem de arquivo só passa depois dela.
- [ ] **Rodar de novo.** Esperado: passam todos, menos o teste dos arquivos de print.

### Tarefa 2: prints dos sites

**Arquivos:**
- criar o script `scratchpad/testes/portfolio-prints.cjs`;
- ele gera `public/img/prints/{id}-pc.jpg` (1280×800) e `public/img/prints/{id}-cel.jpg` (390×844, deviceScaleFactor 2), em JPEG de qualidade 80;
- só a área visível da tela, sem `fullPage`.

- [ ] **Rodar o script.** Esperado: 6 arquivos.
- [ ] **Abrir cada print com o Read** e confirmar que não aparece "Firebase não configurado" nem tela em branco.
- [ ] **Rodar `npm test`.** Esperado: todos passam.
- [ ] **Commit.**

### Tarefa 3: a página

**Arquivos:** criar `public/index.html`, `public/css/estilo.css`, `public/js/pagina.js`, `public/img/logo-luz.png` (copiado do mockup), `public/img/og.jpg` (1200×630, gerado pelo puppeteer a partir do topo da página) e o favicon (a própria `logo-luz.png`).

**Usa:** `PROJETOS`, `CONTATO`, `linkWhatsApp` e `mensagemProjeto`.

- **Seções:** `#topo`, `#projetos`, `#servicos` e `#contato`, mais o rodapé "© 2026 JhemisonTech". O menu leva a cada seção com rolagem suave.
- **Card:**
  - print `pc` no computador e `cel` no celular, com `<picture>` e `loading="lazy"`;
  - nome, frase e etiquetas;
  - botão "Ver site", que abre `url`;
  - frase "Quer conhecer mais do projeto? Me chama no WhatsApp", que abre `linkWhatsApp(mensagemProjeto(nome))`;
  - quando `painel.length > 0`, aparecem as abas "Site | Painel".
- **Serviços:** os 4 itens do design, com os ícones SVG do mockup.
- **Topo:** os textos exatos do design. O botão "Falar no WhatsApp" abre `linkWhatsApp("Olá! Vim pelo seu portfólio e quero um orçamento.")`.
- **Meta tags:** `title` "JhemisonTech: sites, sistemas e agentes de IA", `description`, `og:*` com a imagem `og.jpg` e `lang="pt-BR"`.
- **Layout:** no computador os cards ficam em grade de até 3 colunas. No celular fica 1 coluna, sem rolagem lateral.

- [ ] **Escrever o teste de navegador** `scratchpad/testes/portfolio.cjs`:
  - **Cards:** são 3, com o texto de cada um.
  - **Ver site:** os hrefs batem com as URLs.
  - **WhatsApp:** todos os `wa.me` usam `5573988045634`, e a mensagem do card da Barbearia cita "Jtech Barbearia".
  - **Proibidos:** nenhum link de github, nenhum "Ver código" e nenhum `@jtech.teste` no texto.
  - **Links externos:** todos têm `target=_blank` e `rel` com `noopener`.
  - **Contato:** Instagram e e-mail presentes (`mailto:`).
  - **Imagens:** todas carregam (`naturalWidth > 0`).
  - **Prévia:** a `og:image` existe.
  - **Rolagem lateral:** nenhuma em 390px nem em 1280px.
  - **Reduzir movimento:** com a emulação ligada, o `animation-name` dos ícones de serviço é `none` e o da logo não é `none`.
  - **Erros:** nenhum erro de JS.
- [ ] **Rodar o teste.** Esperado: FALHA, porque a página ainda não existe.
- [ ] **Construir a página.**
- [ ] **Rodar o teste de novo.** Esperado: todos passam.
- [ ] **Tirar prints de celular e de computador** e conferir com o Read.
- [ ] **Commit.**

### Tarefa 4: publicação e documentação

**Arquivos:**
- `firebase.json`: só hosting, `public`, cabeçalho no-cache para html/js/css e cache longo para `img/**`;
- `.firebaserc`: `{"projects":{"default":"jhemisontech"}}`;
- `.gitignore`: `.superpowers/`, `.firebase/`, `node_modules/`, `referencias-instagram/`;
- `README.md`: como adicionar um projeto em `projetos.js`, como gerar os prints, como publicar com `--project` e como ligar um domínio próprio.

- [ ] **Rodar `npm test` e o teste de navegador.** Esperado: tudo passa.
- [ ] **Rodar `git init -b main`** e fazer o commit.
- [ ] **Passar ao usuário as instruções:**
  - criar o projeto `jhemisontech` (só Hosting);
  - criar o repositório no GitHub e fazer o push;
  - rodar `firebase deploy --project jhemisontech --only hosting`.
