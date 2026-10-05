# checklist-final.md — Revisão final (Etapa 7)

> Documento interno. Data da revisão: 05/10/2026.

## Resultado geral

| Área | Situação |
|---|---|
| Conteúdo e dados da loja | OK |
| Links (WhatsApp, telefone, Maps, Instagram, âncoras) | OK |
| Layout responsivo | OK |
| Acessibilidade | OK |
| Desempenho e SEO | OK |
| Sem JavaScript | OK |
| Regra "nada de demo na página" | OK |
| **Fotos reais/externas** | **Pendente (etapa 4)** |
| **Domínio final (canonical, og:image, sitemap)** | **Pendente** |

## 1. Conteúdo e dados

- [x] WhatsApp (37) 99834-6733 → todos os 5 links usam `wa.me/5537998346733`.
- [x] Telefone fixo (37) 3231-5484 → todos os links usam `tel:+553732315484`.
- [x] Endereço "R. Padre Libério, 902 — JK, Pará de Minas, MG" igual em todas as seções e nos dados estruturados.
- [x] Horário "segunda a sábado, 9h às 18h" igual em todas as seções, no aviso aberto/fechado e nos dados estruturados.
- [x] Frase "Consulte condições especiais para clientes fiéis" sem detalhar regras.
- [x] Texto revisado do início ao fim (ortografia e acentuação).
- [x] Nenhuma ocorrência de "demo", "amostra" ou "exemplo" nos arquivos do site.
- [x] Itens fictícios listados em `demo-content.md`.

## 2. Links e interações

- [x] Nenhuma âncora quebrada; menu leva às seções certas.
- [x] Todo link externo abre em nova aba com `rel="noopener"` e aviso para leitor de tela.
- [x] Botão "Mostrar mapa aqui" abre e fecha o mapa; o mapa só carrega no primeiro toque.
- [x] Aviso aberto/fechado testado em 9 horários (dia útil, antes de abrir, depois de fechar, sábado à noite, domingo).
- [x] Sem JavaScript: botão do mapa e aviso somem; o resto funciona.
- [ ] **Teste manual no celular publicado**: tocar em cada WhatsApp e no "Ligar" (precisa ser feito pelo Vinicius).
- [ ] **Conferir se o mapa embutido mostra o pino no lugar certo** (usa o endereço digitado).

## 3. Telas testadas (sem rolagem lateral, sem erros no console)

- [x] Celular 320 px, 375 px (tela de alta densidade), celular deitado 667×375
- [x] Tablet 768 px, notebook 1280 px, monitor 1920 px
- [x] Fonte do sistema em 200% (pessoas que aumentam a letra no celular)
- [x] Zoom de 400% no navegador

## 4. Acessibilidade

- [x] axe-core (WCAG 2.2 AA + boas práticas): 0 violações no celular e no computador.
- [x] Todos os botões e links com área de toque ≥ 24 px (botões principais ≥ 56 px).
- [x] Navegação completa pelo teclado, foco visível em todos os itens, link "Pular para o conteúdo".
- [x] Um único H1, títulos em ordem, `alt` descritivo em todas as imagens.
- [x] Respeita "reduzir movimento" do sistema.
- [ ] Rever o contraste do texto sobre as fotos quando as imagens reais entrarem.

## 5. Desempenho e SEO (Lighthouse)

| | Desempenho | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| Celular | 99 | 100 | 100 | 100 |
| Computador | 100 | 100 | 100 | 100 |

Celular: LCP 2,0 s · CLS 0,027 · peso total 262 KB (com imagens provisórias).

## 6. Correções feitas nesta etapa

- Telefone e endereço do cartão da abertura viraram links (ligar e abrir no Maps).
- Faixa de números: "Sob medida" (repetido) trocado por "Loja física no bairro JK".
- Títulos do rodapé corrigidos para a hierarquia certa.
- Imagens de "antes e depois" e da loja ficavam altas demais no celular → corrigido (`height: auto`).
- Cartões de contato no computador passaram para 2 colunas (o @ do Instagram quebrava no meio).
- Textos não estouram mais a tela com a fonte do celular em 200%.
- Links do rodapé e do cartão da abertura com área de toque maior.
- Rótulo "A loja" ganhou fundo visível.

## 7. Pendências para fechar o projeto

1. **Fotos** (etapa 4): colocar em `assets/fotos/` ou substituir direto em `assets/img/` com os mesmos nomes.
2. **Domínio**: informar o endereço final para incluir `canonical`, `og:url`, `og:image` e `sitemap.xml`.
3. **Teste manual** no celular depois do deploy (itens marcados acima).
4. **Revisão com o cliente** dos itens em `demo-content.md`.
