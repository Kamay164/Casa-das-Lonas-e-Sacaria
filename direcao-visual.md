# Direção visual e estrutura — Etapa 2

> Documento interno para aprovação. Nada aqui aparece no site. Itens `[DEMO]` são fictícios/ilustrativos e serão listados em `demo-content.md` na etapa 3.

> **Atualização da etapa 4 (pedido do Vinicius):** layout mais moderno e menos chamadas para o WhatsApp. A ordem atual das seções é: barra superior · abertura (foto de fundo + cartão com horário, endereço e telefone) · faixa de números · produtos em grade de tamanhos variados (sem botão por produto) · por que nós + "Atendemos" · como pedir orçamento (único botão de orçamento) · antes e depois · perguntas frequentes · venha nos visitar (com mapa sob demanda e aviso aberto/fechado) · fale com a gente · rodapé · botão flutuante. Botões agora em formato de pílula e cantos de 24 px. Paleta e tipografia mantidas.

## 1. Princípios

1. **Ler sem óculos**: letra grande, frases curtas, alto contraste.
2. **Um toque para falar com a loja**: WhatsApp visível o tempo todo; telefone e endereço sempre clicáveis.
3. **Rolar, não procurar**: página única, sem menu escondido (sem "hambúrguer"), botões grandes no lugar de links pequenos.
4. **Leve em sinal fraco**: sem bibliotecas, imagens comprimidas, mapa só carrega se a pessoa pedir.
5. **Cara de loja do agro, séria e de confiança**: verde da marca, fotos de campo e produto, nada de efeitos chamativos.

## 2. Paleta (contraste verificado, WCAG)

| Nome | Cor | Uso |
|---|---|---|
| Verde-mata (marca) | `#24402B` | Topo, rodapé, fundos de destaque, títulos sobre claro |
| Verde-folha (marca) | `#5AA64E` | **Só decorativo** (detalhes da logo, linhas, ícones grandes). Nunca texto pequeno |
| Verde-ação | `#1E7A34` | Botões de WhatsApp e principais (texto branco) |
| Palha | `#F2C14E` | Destaques pontuais (selo "23 anos", marcação de horário) |
| Creme | `#FAF7EE` | Fundo principal da página |
| Branco | `#FFFFFF` | Cartões sobre o creme |
| Texto | `#1C2620` | Texto principal |
| Texto suave | `#4A554D` | Textos secundários (legendas) |

Combinações aprovadas (mínimo AA = 4,5 para texto normal):

| Combinação | Contraste | Resultado |
|---|---|---|
| Texto sobre creme | 14,6 : 1 | AAA |
| Texto suave sobre creme | 7,3 : 1 | AAA |
| Branco sobre verde-mata | 11,4 : 1 | AAA |
| Branco sobre verde-ação (botão) | 5,4 : 1 | AA |
| Verde-mata sobre creme (títulos) | 10,6 : 1 | AAA |
| Texto sobre palha | 9,3 : 1 | AAA |
| Verde-folha sobre branco | 3,0 : 1 | **reprovado para texto** → só decorativo |

Observação: o verde oficial do WhatsApp (`#25D366`) com texto branco tem contraste de ~2 : 1 (ilegível). Usaremos o verde-ação com o ícone do WhatsApp, que é reconhecível e legível.

## 3. Tipografia

- **Texto**: fonte do sistema (`system-ui, "Segoe UI", Roboto, Arial, sans-serif`). Zero download, já é familiar no celular de cada pessoa.
- **Títulos**: **Montserrat Bold** em arquivo local (~25 KB, só 1 peso), parecida com a letra da logo. Se não houver Montserrat, cai para a fonte do sistema em negrito.
- Tamanhos (celular → computador):

| Elemento | Celular | Computador |
|---|---|---|
| Texto | 18 px | 20 px |
| Título principal (H1) | 34 px | 52 px |
| Título de seção (H2) | 28 px | 40 px |
| Título de cartão (H3) | 22 px | 24 px |
| Botões | 20 px, altura mínima 56 px | idem |

- Altura de linha 1,6; no máximo ~65 caracteres por linha; nunca texto em caixa alta em parágrafos (só em selos curtos).

## 4. Componentes

- **Botão WhatsApp (principal)**: verde-ação, ícone + texto "Chamar no WhatsApp", largura total no celular, cantos arredondados (12 px).
- **Botão secundário**: contorno verde-mata, fundo transparente (ex.: "Ver como chegar", "Ligar para a loja").
- **Botão flutuante de WhatsApp**: canto inferior direito, formato pílula com ícone **e** a palavra "WhatsApp" (só ícone confunde), 60 px de altura, sombra leve. Não cobre conteúdo importante: a página ganha espaço extra no final.
- **Cartão de produto**: foto (proporção 4:3), título, 1–2 frases, botão "Pedir orçamento" que abre o WhatsApp com a mensagem já escrita daquele produto.
- **Ícones**: SVG desenhados no próprio código (telefone, WhatsApp, mapa, relógio, Instagram). Sem bibliotecas externas.
- **Foco visível** em todos os botões/links (contorno palha de 3 px) para quem navega pelo teclado.
- **Sem**: carrossel, pop-up, animação de entrada, vídeo automático, cookies/banner.

## 5. Ordem das seções

| # | Seção | Objetivo | Conteúdo |
|---|---|---|---|
| 0 | **Barra superior fixa** | Identificar a loja e ligar rápido | Logo + botão "Ligar" (celular). No computador, também links: Produtos · A loja · Contato |
| 1 | **Abertura** | Dizer em 3 segundos o que é e onde fica | Foto de campo/silagem ao fundo (escurecida); H1 "Lonas, ferramentas e jardinagem em Pará de Minas"; "Há 23 anos protegendo seu bem."; botões "Chamar no WhatsApp" e "Ver como chegar"; linha com horário "Seg. a sáb., 9h às 18h" |
| 2 | **Faixa de confiança** | Passar segurança | 3 itens com ícone: "23 anos de mercado" · "Lonas sob medida" · "Loja física em Pará de Minas" (todos reais) |
| 3 | **O que você encontra** | Mostrar produtos | 6 cartões (ver seção 6) |
| 4 | **Como pedir seu orçamento** `[DEMO]` | Facilitar para quem não tem costume | 3 passos grandes numerados: 1. Chame no WhatsApp · 2. Diga o que precisa e a medida · 3. Receba seu orçamento. Termina com botão "Pedir orçamento pelo WhatsApp". **Sem formulário** |
| 5 | **Trabalho feito** | Mostrar resultado | Antes e depois de capa de piscina com imagens externas `[DEMO]` (trocar depois pela foto real) |
| 6 | **Venha nos visitar** | Levar até a loja | Foto de loja/galpão externa `[DEMO]` (trocar depois pela fachada real); endereço; horário; "Consulte condições especiais para clientes fiéis"; botão "Abrir no Google Maps"; botão "Mostrar mapa aqui" (o mapa só carrega ao tocar) |
| 7 | **Fale com a gente** | Todos os contatos juntos | 4 cartões grandes: WhatsApp (37) 99834-6733 · Telefone (37) 3231-5484 · Instagram @casadaslonasesacaria · Endereço |
| 8 | **Rodapé** | Fechamento | Logo, slogan, endereço, horário, Instagram, "© 2026 Casa das Lonas & Sacaria" |
| — | **Botão flutuante WhatsApp** | Contato sempre à mão | Visível em toda a página |

Fora do escopo (para não inventar fatos): depoimentos, preços, "perguntas frequentes" com respostas sobre entrega/instalação/prazo. Podem entrar depois com dados do cliente.

## 6. Produtos (cartões da seção 3)

| Cartão | Texto proposto | Base | Imagem |
|---|---|---|---|
| Lonas para silo | "Lona para silagem, resistente ao sol e à chuva." | Real (arte Nortene) — marca não citada no texto | Externa `[DEMO]`: silagem coberta |
| Lonas sob medida | "Coberturas e tendas no tamanho que você precisa." | Real (arte "sob medida") | Externa `[DEMO]`: tenda/cobertura em lona |
| Capas para piscina | "Capa de proteção feita na medida da sua piscina." | Real (antes e depois) | Externa `[DEMO]` ou recorte do "depois" |
| Sacaria | "Sacos para grãos, ração e armazenagem." `[DEMO]` (texto genérico) | Nome da empresa | Externa `[DEMO]`: sacos de ráfia |
| Ferramentas | "Garfos, enxadas, correntes, cordas e cintas de carga." | Real (foto da loja) | Externa `[DEMO]` ou recorte da foto real |
| Jardinagem | "Tudo para cuidar do seu jardim e da sua horta." `[DEMO]` (texto genérico) | informações.txt | Externa `[DEMO]`: jardinagem |

Mensagem automática de cada botão: "Olá! Vim pelo site e gostaria de um orçamento de *[produto]*." Botão geral: "Olá! Vim pelo site da Casa das Lonas e gostaria de mais informações."

## 7. Wireframe (celular, de cima para baixo)

```
┌───────────────────────────────┐
│ [LOGO]              [📞 Ligar]│  barra fixa verde-mata
├───────────────────────────────┤
│  (foto de campo escurecida)   │
│  LONAS, FERRAMENTAS E         │
│  JARDINAGEM EM PARÁ DE MINAS  │
│  Há 23 anos protegendo        │
│  seu bem.                     │
│ [ Chamar no WhatsApp       ]  │  verde-ação, largura total
│ [ Ver como chegar          ]  │  contorno
│  🕘 Seg. a sáb., 9h às 18h     │
├───────────────────────────────┤
│ ★ 23 anos  ✂ Sob medida  📍 Loja│ faixa de confiança
├───────────────────────────────┤
│ O QUE VOCÊ ENCONTRA           │
│ ┌───────────────────────────┐ │
│ │ [foto]                    │ │
│ │ Lonas para silo           │ │  1 cartão por linha
│ │ texto curto               │ │  (2 no tablet, 3 no PC)
│ │ [ Pedir orçamento ]       │ │
│ └───────────────────────────┘ │
│  ... mais 5 cartões ...       │
├───────────────────────────────┤
│ COMO PEDIR SEU ORÇAMENTO      │
│  ① Chame no WhatsApp          │
│  ② Diga o que precisa         │
│  ③ Receba seu orçamento       │
├───────────────────────────────┤
│ TRABALHO FEITO                │
│ [foto ANTES] / [foto DEPOIS]  │
├───────────────────────────────┤
│ VENHA NOS VISITAR             │
│ [foto da fachada]             │
│ 📍 R. Padre Libério, 902 – JK  │
│ 🕘 Seg. a sáb., 9h às 18h      │
│ Consulte condições especiais  │
│ para clientes fiéis           │
│ [ Abrir no Google Maps ]      │
│ [ Mostrar mapa aqui ]         │
├───────────────────────────────┤
│ FALE COM A GENTE              │
│ [WhatsApp] [Telefone]         │
│ [Instagram] [Endereço]        │
├───────────────────────────────┤
│ rodapé verde-mata             │
└───────────────────────────────┘
                    (🟢 WhatsApp)  ← flutuante
```

No computador: abertura em 2 colunas (texto à esquerda, foto à direita), cartões em 3 colunas, "Venha nos visitar" com foto e dados lado a lado.

## 8. Plano de imagens (executado na etapa 4)

- **Real (de `assets/`)**: só a logo.
- **Todas as demais externas `[DEMO]`** (Unsplash/Pexels/Pixabay, licença livre, créditos em `assets/CREDITOS.md`): abertura (campo/silagem), silo, tenda/cobertura, capa de piscina, sacaria, ferramentas, jardinagem, antes/depois de piscina, loja/galpão.
- **Fácil de trocar por fotos reais**: cada imagem terá um nome fixo pela função em `assets/img/` (ex.: `abertura.webp`, `produto-silo.webp`, `produto-sacaria.webp`, `loja.webp`, `antes.webp`, `depois.webp`). Para trocar, basta salvar a foto real com o mesmo nome. O `README.md` (etapa 8) terá a lista com tamanhos recomendados.
- O `alt` de cada imagem descreve o que se vê, sem dizer que é ilustrativa.
- Formato final: WebP, ~1200 px de largura na abertura e ~800 px nos cartões, cada imagem idealmente < 120 KB.

## 9. Decisões aprovadas pelo Vinicius

1. Paleta, tipografia, ordem das seções e sem menu "hambúrguer": **aprovados**.
2. Os 6 produtos e seus textos: **aprovados**.
3. "Como pedir seu orçamento": **mantida**, e **todo contato leva ao WhatsApp. Nenhum formulário no site.**
4. Imagens: **usar externas** em tudo (exceto a logo), com nomes fixos para trocar por fotos reais depois.
5. Mapa: **só carrega ao tocar** em "Mostrar mapa aqui".
