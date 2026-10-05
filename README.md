# Casa das Lonas & Sacaria — Landing Page

Landing page de uma página para a **Casa das Lonas & Sacaria** (Pará de Minas, MG), pensada para quem trabalha no campo e para pessoas mais velhas: letras grandes, alto contraste e contato com a loja em um toque pelo WhatsApp.

- Instagram: [@casadaslonasesacaria](https://www.instagram.com/casadaslonasesacaria/)
- Slogan: *Há 23 anos protegendo seu bem.*

## Status

| Etapa | Descrição | Situação |
|---|---|---|
| 1 | Levantamento de conteúdo | Concluída |
| 2 | Direção visual e estrutura | Concluída |
| 3 | HTML e CSS base | Concluída |
| 4 | Seções completas e imagens | Pendente (faltam as fotos) |
| 5 | WhatsApp, mapa e interações | Concluída |
| 6 | Acessibilidade, desempenho e SEO | Concluída |
| 7 | Revisão final e testes | Concluída |
| 8 | Publicação | Concluída |

As imagens do site ainda são provisórias (degradê verde com o nome final em `public/assets/img/`); a etapa 4 fecha quando as fotos entrarem.

## Tecnologias

HTML5, CSS3 e JavaScript puro (só para o mapa e o aviso "aberto agora"; o site funciona sem JavaScript). Sem frameworks, sem build e sem dependências. Fonte Montserrat (700) hospedada localmente; ícones em SVG dentro do próprio HTML.

## Estrutura

Só a pasta `public/` vai para o ar. Os documentos internos (`.md`) e os materiais de referência ficam fora dela e **não ficam acessíveis no site**.

```
.
├── public/                  # TUDO que o site publica
│   ├── index.html           # página única
│   ├── css/style.css        # estilos (mobile-first)
│   ├── js/main.js           # mapa sob demanda e aviso aberto/fechado
│   ├── fonts/               # Montserrat Bold (woff2)
│   ├── assets/
│   │   ├── img/             # imagens do site (nomes fixos)
│   │   └── logo.jpeg
│   ├── favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png
│   └── robots.txt, site.webmanifest
├── assets/                  # materiais de referência do cliente (não publicados)
├── vercel.json              # pasta de saída (public) e cabeçalhos de segurança
├── .gitignore
├── CLAUDE.md                # regras e etapas do projeto (para o Claude Code)
├── conteudo.md              # dados da empresa (fonte da verdade)
├── direcao-visual.md        # paleta, tipografia, seções e wireframe
├── demo-content.md          # lista interna de itens provisórios
├── checklist-final.md       # resultado da revisão final
└── README.md
```

## Como ver no computador

Abra `public/index.html` no navegador. Ou, com Node instalado:

```bash
npx serve public
```

## Como editar

| O que mudar | Onde |
|---|---|
| Telefone, WhatsApp, endereço, horário | `public/index.html` (procure por `5537998346733`, `3231-5484`, `Padre Libério`, `9h às 18h`) |
| Mensagem pronta do WhatsApp | O texto depois de `?text=` nos links `wa.me` (precisa estar codificado para URL) |
| Horário do aviso "aberto agora" | Constantes `ABRE` e `FECHA` no começo de `public/js/main.js` |
| Local do mapa embutido | Variável `MAPA_URL` em `public/js/main.js` |
| Cores e tamanhos de letra | Variáveis no começo de `public/css/style.css` (`:root`) |
| Imagens | Salvar a nova foto em `public/assets/img/` com o **mesmo nome** (lista em `demo-content.md`), formato `.jpg`, 1600 px de largura na abertura e 1200 px nas demais |

Link do WhatsApp: `https://wa.me/55` + DDD + número, por exemplo `https://wa.me/5537998346733`.

## Dados da empresa

| | |
|---|---|
| Endereço | R. Padre Libério, 902 — JK, Pará de Minas, MG |
| WhatsApp | (37) 99834-6733 |
| Telefone | (37) 3231-5484 |
| Horário | Segunda a sábado, das 9h às 18h |
| Mapa | https://maps.app.goo.gl/EQXuwzE8LzYk3DZr7 |

## Publicação (Vercel)

O site é estático e não tem build. A Vercel publica só a pasta `public/` (definida em `vercel.json`).

### Primeira vez

1. Envie o código para o GitHub (branch `main`).
2. Na Vercel: **Add New → Project** e escolha este repositório.
3. Em **Framework Preset**, selecione **Other**. Deixe **Build Command** e **Install Command** em branco. O **Output Directory** já vem do `vercel.json` (`public`).
4. Clique em **Deploy**. O endereço provisório será algo como `nome-do-projeto.vercel.app`.

### Atualizações

A cada mudança: salve os arquivos e rode

```bash
git add .
git commit -m "Descreva a mudança"
git push
```

A Vercel publica sozinha em cerca de um minuto. Branches diferentes da `main` geram um link de pré-visualização, sem mexer no site principal.

### Voltar atrás

No painel da Vercel, abra **Deployments**, escolha uma versão anterior que estava boa e use **Promote to Production** (ou **Instant Rollback**).

### Domínio próprio

1. Na Vercel: **Settings → Domains → Add** e digite o domínio (ex.: `casadaslonas.com.br`).
2. A Vercel mostra os registros de DNS. No site onde o domínio foi registrado, crie o que ela indicar (normalmente um registro `A` para o domínio raiz e um `CNAME` para o `www`).
3. Aguarde a verificação (de minutos a algumas horas). O certificado HTTPS é automático.
4. **Depois que o domínio estiver ativo**, peça ao Claude: *"inclua canonical, og:url, og:image e sitemap com o domínio X"*. Isso melhora a pré-visualização no WhatsApp e o Google.

### Depois de cada publicação

- [ ] Abrir o site no celular e conferir o topo da página.
- [ ] Tocar em **Chamar no WhatsApp** (deve abrir a conversa com a mensagem pronta).
- [ ] Tocar em **Ligar** e conferir o número.
- [ ] Tocar em **Mostrar mapa aqui** e conferir se o pino cai na loja.
- [ ] Abrir `seu-site/CLAUDE.md` e `seu-site/demo-content.md`: **devem dar página não encontrada** (arquivos internos não podem ser públicos).
- [ ] Rodar o PageSpeed Insights (pagespeed.web.dev) no endereço publicado.

## Fluxo de trabalho

O projeto é feito por etapas, uma de cada vez, com aprovação a cada passo. As regras estão em [`CLAUDE.md`](CLAUDE.md).

## SEO e acessibilidade

- Título, descrição, Open Graph, dados estruturados (loja local e perguntas frequentes), ícones e `robots.txt` já estão no projeto.
- Lighthouse (celular): desempenho 99, acessibilidade 100, boas práticas 100, SEO 100. Detalhes dos testes em `checklist-final.md`.
- **Pendente quando o domínio estiver definido:** `canonical`, `og:url`, `og:image` (precisa de URL completa) e `sitemap.xml`.

## Observações

- Nenhum formulário: todo contato e pedido de orçamento vai para o WhatsApp.
- Imagens externas devem ter fonte e licença registradas em `assets/CREDITOS.md` (fora de `public/`).
