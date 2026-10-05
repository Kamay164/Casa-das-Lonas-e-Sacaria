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
| 4 | Seções completas e imagens | Pendente |
| 5 | WhatsApp, mapa e interações | Pendente |
| 6 | Acessibilidade, desempenho e SEO | Pendente |
| 7 | Revisão final e testes | Pendente |
| 8 | Publicação | Pendente |

As imagens do site ainda são blocos de cor provisórios (etapa 4).

## Tecnologias

HTML5, CSS3 e JavaScript puro. Sem frameworks, sem build e sem dependências. Fonte Montserrat (700) hospedada localmente; ícones em SVG dentro do próprio HTML.

## Estrutura

```
.
├── index.html             # página única
├── css/style.css          # estilos (mobile-first)
├── fonts/                 # Montserrat Bold (woff2)
├── assets/                # logo e materiais de referência
├── CLAUDE.md              # regras e etapas do projeto (para o Claude Code)
├── conteudo.md            # dados da empresa (fonte da verdade)
├── direcao-visual.md      # paleta, tipografia, seções e wireframe
├── demo-content.md        # lista interna de itens provisórios
└── README.md
```

## Como ver no computador

Abra o arquivo `index.html` no navegador. Ou, com Node instalado:

```bash
npx serve .
```

## Como editar

| O que mudar | Onde |
|---|---|
| Telefone, WhatsApp, endereço, horário | `index.html` (procure por `5537998346733`, `3231-5484`, `Padre Libério`, `9h às 18h`) |
| Mensagem pronta do WhatsApp | O texto depois de `?text=` nos links `wa.me` (precisa estar codificado para URL) |
| Cores e tamanhos de letra | Variáveis no começo de `css/style.css` (`:root`) |
| Imagens | Salvar a nova foto com o **mesmo nome** da função (ver `demo-content.md`), em `assets/img/` (a partir da etapa 4) |

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

O projeto é um site estático, sem build:

1. Envie o código para o GitHub.
2. Na Vercel: **Add New → Project** e escolha este repositório.
3. Em **Framework Preset**, selecione **Other**. Deixe **Build Command** e **Output Directory** em branco (raiz do projeto).
4. Clique em **Deploy**. Cada novo `git push` na branch `main` publica automaticamente.

## Fluxo de trabalho

O projeto é feito por etapas, uma de cada vez, com aprovação a cada passo. As regras estão em [`CLAUDE.md`](CLAUDE.md).

## Observações

- Nenhum formulário: todo contato e pedido de orçamento vai para o WhatsApp.
- Imagens externas devem ter fonte e licença registradas em `assets/CREDITOS.md` (a partir da etapa 4).
