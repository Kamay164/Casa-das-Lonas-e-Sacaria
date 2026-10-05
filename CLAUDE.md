# CLAUDE.md — Landing Page Casa das Lonas e Sacaria

## 0. REGRA PRINCIPAL (LEIA PRIMEIRO)

- O projeto é dividido em **etapas**. **Execute UMA etapa por vez.**
- **NUNCA avance para a próxima etapa sem que o Vinicius autorize ou peça explicitamente.**
- Ao terminar uma etapa: pare, apresente o resumo + a verificação feita, e aguarde.
- Não crie, edite ou apague arquivos fora do escopo da etapa atual.
- Não invente informações da empresa (endereço, telefone, horário, preços, serviços, depoimentos). Se faltar um dado, use um marcador visível `[PREENCHER: ...]` e avise. Pergunte antes de supor.
- Não tente ler o Instagram automaticamente (bloqueado). O conteúdo vem da pasta `assets/` e de textos colados pelo Vinicius.

## 0.1 Natureza do projeto (atualizado pelo Vinicius)

- É um **site de demonstração (amostra) para apresentar ao cliente**, mas deve ser um **site real e funcional**, não um wireframe: HTML/CSS/JS completos, pronto para publicar.
- **Dados reais** (usar como estão): nome, slogan, endereço, telefones, horário, Instagram e link do Maps (em `conteudo.md`).
- **Conteúdo fictício é permitido** (textos de apoio, imagens ilustrativas) para mostrar o potencial do site. Regras:
  - Todo item fictício deve ser marcado `[DEMO]` em `conteudo.md` e listado em `demo-content.md` (somente internos), para troca fácil depois.
  - **Proibido** inventar depoimentos/avaliações de clientes com nomes, preços de produtos como se fossem reais, certificações, prêmios, números ou estatísticas da empresa. Se precisar de exemplo visual, usar rótulo genérico claramente de exemplo.
  - Fotos da loja enviadas em `assets/` são **apenas referência**; **não é obrigatório usá-las**. Podem ser usadas se fizer sentido.
- **A palavra "demo"/"demonstração"/"amostra"/"exemplo" NÃO pode aparecer em nenhum lugar visível da página** (textos, títulos, avisos, alt de imagens, meta tags, rodapé, nomes de arquivos de imagem públicos). O site deve parecer o site final da empresa.
- Os marcadores `[DEMO]` existem **apenas nos arquivos internos** (`conteudo.md` e `demo-content.md`), nunca dentro de `index.html`, CSS, JS ou nas imagens. Em `demo-content.md`, registrar item fictício, onde aparece no site (seção/arquivo) e como substituir.
- Logo: usar a `assets/logo.jpeg` atual (baixa resolução é aceitável por ora).
- Horário especial: usar exatamente o texto "Consulte condições especiais para clientes fiéis", sem detalhar regras.

## 1. Objetivo

Criar uma landing page de uma página para a **Casa das Lonas e Sacaria** (Instagram: https://www.instagram.com/casadaslonasesacaria/), que gere contatos e visitas à loja.

Público: pessoas do **agro** e **mais velhas**, muitas em celular simples, conexão lenta e pouca familiaridade com tecnologia. Prioridade: **clareza, leitura fácil e contato em um toque**.

## 2. Contexto

- Pasta do projeto: `Portfolio/Casa das lonas` (raiz do projeto = esta pasta).
- Fonte de conteúdo: Instagram da loja (fotos baixadas pelo Vinicius em `assets/`) + textos fornecidos por ele (endereço, telefone/WhatsApp, horário, serviços/produtos).
- Identidade visual: usar logo e cores que o Vinicius colocar em `assets/`. Sem logo, perguntar antes de inventar.
- Idioma: **português do Brasil** em tudo (site e comunicação).

## 3. Tecnologias

- **HTML5 + CSS3 + JavaScript puro.** Sem frameworks, sem build, sem dependências, sem CDN obrigatória.
- Fontes do sistema (ou 1 fonte local, se necessário). Sem bibliotecas de ícones externas: usar SVG inline.
- Imagens otimizadas: WebP/JPG, `loading="lazy"`, `width`/`height` definidos, `alt` descritivo.
- Publicação alvo: hospedagem gratuita estática (Netlify, Vercel ou GitHub Pages). Domínio fica para depois.

## 4. Estrutura de pastas prevista

```
Casa das lonas/
├── CLAUDE.md
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── img/         # fotos otimizadas usadas no site
│   ├── originais/   # fotos originais do Instagram (não alterar)
│   └── logo/
├── conteudo.md      # dados da empresa aprovados (fonte da verdade)
├── direcao-visual.md # paleta, tipografia, seções e wireframe (etapa 2)
├── demo-content.md  # lista interna de itens fictícios (criado na etapa 3)
└── README.md        # como publicar e como editar textos/telefone
```

## 5. Etapas (cada uma separada; só avançar com autorização)

1. **Levantamento e conteúdo**: inventariar `assets/`, criar `conteudo.md` (endereço, telefone, WhatsApp, horário, serviços, produtos, frase de apresentação) e listar lacunas. *Não codar.*
2. **Direção visual e estrutura**: definir paleta (alto contraste), tipografia, ordem das seções e wireframe em texto. Aguardar aprovação.
3. **Estrutura HTML + CSS base**: esqueleto semântico, layout mobile-first, seções com conteúdo real/placeholder.
4. **Seções completas e imagens**: topo, serviços, produtos, a loja, como chegar, contato; fotos otimizadas.
5. **WhatsApp e interações**: botão flutuante fixo `wa.me` com mensagem pré-preenchida, botões "Ligar" e "Como chegar" (Google Maps), links nos contatos.
6. **Acessibilidade, desempenho e SEO**: contraste, fonte grande, foco, meta tags, Open Graph, dados estruturados LocalBusiness, favicon.
7. **Revisão final e testes**: checklist completo em celular e desktop, links, imagens, textos.
8. **Preparação de publicação**: `README.md` e instruções de deploy gratuito. Só publicar se o Vinicius pedir.

## 6. Requisitos da página

- Seções sugeridas: topo com nome + frase + botão WhatsApp; serviços (com foto); produtos (lonas, sacarias etc., conforme `conteudo.md`); a loja (fotos); localização com endereço e botão de rota; contato; rodapé com horário e link do Instagram.
- **Botão de WhatsApp**: fixo/flutuante, grande, verde, com texto "Falar no WhatsApp" (não só ícone), visível o tempo todo no celular; link `https://wa.me/55DDDNUMERO?text=...` com mensagem curta em português.
- Texto simples, frases curtas, sem jargão. Tom direto e acolhedor.
- Fonte base **mínimo 18px**; títulos grandes; espaçamento generoso; botões **mínimo 48px de altura**.
- Contraste **WCAG AA ou melhor**. Não depender só de cor para informar.
- Sem animações pesadas, carrossel automático, pop-ups, vídeo com autoplay ou menu escondido complicado.
- Navegação simples (âncoras na própria página); telefone e endereço sempre clicáveis.
- Mobile-first; funcionar bem em telas de 320px até desktop.

## 6.1 Política de imagens

- **Referência (não obrigatória)**: `assets/` tem exemplos enviados pelo Vinicius (logo, fachada, ferramentas, silo, lona sob medida, antes/depois, vídeo). Servem de referência de estilo e produto. A **logo** e as cores podem ser usadas; as demais imagens são opcionais (muitas são artes de Instagram com texto embutido).
- **Imagens externas (autorizado pelo Vinicius)**: como o site é uma amostra, buscar imagens externas/ilustrativas livremente para as seções (lonas, silo, sacaria, ferramentas, jardinagem, campo/agro).
  - Usar **somente** fontes com licença livre para uso comercial sem atribuição obrigatória (ex.: Unsplash, Pexels, Pixabay). Registrar fonte, link e licença em `assets/CREDITOS.md`.
  - Nunca copiar fotos de sites de concorrentes, lojas ou do Instagram de terceiros.
  - Imagem externa deve mostrar o produto/uso real (lona, sacaria, campo). Não usar imagens que sugiram produtos/marcas que a loja não vende.
  - **Mostrar ao Vinicius as imagens externas escolhidas e esperar aprovação** antes de usá-las. Marcá-las como "ilustrativa" no controle interno para troca futura por foto real.
- Imagem externa nunca deve ser apresentada como foto real da loja ou de um trabalho da loja; registrar como `[DEMO]`.
- Copiar para `assets/originais/` antes de otimizar; renomear com nomes descritivos (ex.: `lona-agricola.jpg`) nas pastas de uso.
- O vídeo só entra se for leve (comprimido), sem autoplay com som.

## 7. Regras e restrições

- Não inventar dados reais da empresa. Conteúdo fictício só conforme a seção 0.1 (sempre `[DEMO]`); imagens externas conforme a seção 6.1.
- Não alterar nem apagar arquivos em `assets/originais/`.
- Não instalar dependências, não criar backend, não coletar dados de visitantes. **Nenhum formulário no site: todo contato e orçamento vai para o WhatsApp.**
- Não incluir rastreadores/analytics sem pedido.
- Não publicar nem fazer deploy sem pedido explícito.
- Mudanças pequenas e focadas; não refatorar o que já foi aprovado.
- Antes de qualquer decisão que altere escopo ou custo, perguntar.

## 8. Padrões de trabalho

- Início de cada etapa: dizer qual etapa está executando e o que vai fazer (curto).
- Fim de cada etapa: resumo de 3–6 linhas, o que foi verificado, pendências e **pergunta de autorização** para a próxima.
- Código limpo e comentado de forma breve; classes CSS com nomes claros em português ou inglês consistente; variáveis CSS para cores e tamanhos.
- Economia de tokens: ler só os arquivos necessários, não repetir conteúdo longo no chat, editar com mudanças pontuais.
- Registrar decisões aprovadas em `conteudo.md` ou `README.md`.

## 9. Critérios de conclusão (geral)

- Todas as etapas aprovadas pelo Vinicius.
- Nenhum `[PREENCHER]` restante; todo `[DEMO]` listado em `demo-content.md`.
- Telefone, WhatsApp (`https://wa.me/5537998346733`), endereço, horário, Maps e Instagram conferidos e funcionando.
- Lighthouse (mobile): Acessibilidade ≥ 95, Desempenho ≥ 90, SEO ≥ 90.
- Carrega bem em conexão lenta (peso total da página idealmente < 1,5 MB).
- Testado em largura 320px, 375px e desktop; sem rolagem horizontal.

## 10. Critério de conclusão por etapa

| Etapa | Entrega | Como verificar |
|---|---|---|
| 1 | `conteudo.md` + lista de lacunas | Vinicius confere os dados |
| 2 | Paleta, tipografia, wireframe | Aprovação visual do Vinicius |
| 3 | `index.html` e `style.css` base | Abre no navegador sem erros; HTML válido |
| 4 | Seções e imagens finais | Todas as imagens carregam, com `alt`; revisão visual |
| 5 | WhatsApp, ligar, rota | Cada link abre o destino correto no celular |
| 6 | A11y/SEO/desempenho | Lighthouse nas metas; contraste verificado |
| 7 | Checklist final | Lista completa sem pendências |
| 8 | README + instruções de deploy | Vinicius consegue seguir os passos |

## 11. Modelo e esforço por etapa (referência)

Confirme os nomes disponíveis com `/model` e ajuste o esforço com `/effort`. Trocar só quando indicado.

- Etapas 1, 5, 8: **Sonnet, esforço médio** (tarefas diretas).
- Etapa 2: **Opus, esforço alto** (decisões de design e conteúdo para público específico).
- Etapas 3 e 4: **Sonnet, esforço médio**; subir para alto se o layout ficar inconsistente.
- Etapa 6: **Sonnet, esforço alto** (checagens detalhadas).
- Etapa 7: **Opus, esforço médio/alto** como revisor final, ou Sonnet alto.
- Tarefas mecânicas (renomear, otimizar imagens, ajustes de texto): **Haiku/Sonnet, esforço baixo**.
- Trocar para Opus ou subir esforço se: houver 2 tentativas falhas no mesmo problema, bug de layout difícil, ou decisão com muitos trade-offs.
