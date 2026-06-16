# Portfólio — Luiz Paullo Caetano

Portfólio pessoal **dark mode**, minimalista e responsivo, com pegada técnica (terminal/monospace). Analista de Suporte Técnico (N1, N2, N3) e desenvolvedor backend.

> Este README é o guia de implementação para reconstruir o protótipo em **HTML + CSS + JavaScript** puro.

---

## 📁 Estrutura do projeto

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── img/            # screenshots dos projetos
│   └── icons/          # ícones de redes sociais (opcional)
└── README.md
```

---

## 🎨 Design System

### Cores (CSS Custom Properties)

```css
:root {
  /* Fundos */
  --bg:        #0a0a0b;  /* fundo principal (quase preto) */
  --surface:   #0e0e10;  /* cards e seções */
  --surface-2: #131316;  /* terminal, botões */
  --surface-3: #0c0c0e;  /* cards de serviços */

  /* Bordas */
  --border:    rgba(255, 255, 255, 0.07);  /* divisórias */
  --border-2:  rgba(255, 255, 255, 0.12);  /* botões / cards */

  /* Texto */
  --text:      #f4f4f5;  /* principal */
  --muted:     #a1a1aa;  /* parágrafos */
  --faint:     #71717a;  /* labels secundários */
  --dim:       #52525b;  /* comentários mono */

  /* Destaque */
  --accent:    #86e29a;  /* verde-terminal */
}
```

> Design **monocromático**: apenas o `--accent` aparece, e de forma pontual (cursor, status, números de seção, barras de skill, `$` do terminal).

### Tipografia

```html
<!-- No <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

| Uso | Fonte | Pesos |
|---|---|---|
| Títulos, nome, números grandes | **Space Grotesk** | 600–700 |
| Corpo / parágrafos | **Manrope** | 400–600 |
| Labels técnicos, terminal, tags, `// comentários` | **JetBrains Mono** | 400–500 |

```css
--font-display: 'Space Grotesk', sans-serif;
--font-body:    'Manrope', system-ui, sans-serif;
--font-mono:    'JetBrains Mono', monospace;
```

### Escala de tipos (fluida com `clamp()`)

| Elemento | Tamanho | Letter-spacing |
|---|---|---|
| `h1` (hero) | `clamp(40px, 7.5vw, 78px)` | `-0.03em` |
| `h2` (seções) | `clamp(28px, 3.5vw, 40px)` | `-0.02em` |
| `h2` (contato) | `clamp(34px, 6vw, 60px)` | `-0.03em` |
| `h3` (cards) | `20px – 22px` | — |
| Parágrafo grande | `clamp(16px, 2vw, 19px)` | — |
| Parágrafo padrão | `14.5px – 17px` | — |
| Label mono | `12px – 14px` | `0.04em – 0.06em` |

### Espaçamento e raios

| Token | Valor |
|---|---|
| Largura máxima do conteúdo | `1180px` (centralizado, `margin: 0 auto`) |
| Padding lateral das seções | `clamp(20px, 5vw, 56px)` |
| Padding vertical das seções | `clamp(64px, 10vw, 130px)` |
| Raio de cards | `16px` |
| Raio de botões | `11px – 12px` |
| Raio de tags | `6px` |
| Raio de pílulas/badges | `100px` |
| `scroll-margin-top` das seções | `90px` (compensa a nav fixa) |

---

## 🧱 Componentes / Seções

### 1. Fundo decorativo (fixo)
- Grid sutil em `position: fixed; inset: 0; pointer-events: none`:
  ```css
  background-image:
    linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px);
  background-size: 64px 64px;
  ```
- Glow radial verde no topo: `radial-gradient`, `filter: blur(40px)`, opacidade ~0.06.

### 2. Navbar
- `position: sticky; top: 0`, fundo `rgba(10,10,11,.72)` + `backdrop-filter: blur(14px)`, borda inferior.
- Logo "LP" em caixa de 34px com borda. Texto `luiz.dev` em mono.
- Botão **Contato** invertido: fundo `#f4f4f5`, texto `#0a0a0b`.
- **Mobile (< 760px):** vira menu hambúrguer (toggle por JS — ver abaixo).

### 3. Hero
- Duas colunas em `display: flex; flex-wrap: wrap` (empilha no mobile).
- Badge "disponível para projetos" com bolinha pulsante.
- Eyebrow mono `// analista de suporte · backend`.
- Dois botões: primário (branco) + secundário (borda).

### 4. Card terminal
- `border-radius: 16px`, fundo `linear-gradient(180deg, #131316, #0e0e10)`.
- 3 bolinhas no topo + label `~/luiz — zsh`.
- Conteúdo em mono simulando comandos (`whoami`, `cat stack.txt`, `support --level`).
- Cursor `█` piscando (animação `blink`).
- Sombra: `box-shadow: 0 30px 80px -30px rgba(0,0,0,.8)`.

### 5. Marquee de tecnologias
- Faixa com texto rolando infinitamente.
- Truque: duplicar o conteúdo e animar `translateX` de `0` a `-50%`.

### 6. Sobre
- Layout 2 colunas (título estreito + texto largo).
- Grid de **3 estatísticas** (`2+ anos`, `N1—N3`, `7 tecnologias`).

### 7. Projetos
- Grid `repeat(auto-fit, minmax(290px, 1fr))`, gap `22px`.
- 3 cards com: placeholder de imagem, código do projeto (mono), título, descrição e tags.
- **Placeholder de imagem** (listras):
  ```css
  background-image: repeating-linear-gradient(135deg,
    rgba(255,255,255,.03) 0 10px, transparent 10px 20px);
  ```

### 8. Serviços
- Grid `repeat(auto-fit, minmax(250px, 1fr))`.
- 4 cards numerados (Suporte Técnico, Backend, Banco de Dados, Automação).
- **Truque de borda interna:** container com `gap: 1px` e `background: var(--border)`; cada card com fundo sólido → as bordas viram linhas de 1px.

### 9. Experiência
- Coluna 1: **timeline** com `border-left: 1px solid var(--border-2)` e bolinha verde posicionada com `position: absolute; left: -5px`.
- Coluna 2: **barras de skill**.
  - Trilho: `rgba(255,255,255,.06)`, altura `6px`, raio `100px`.
  - Preenchimento: `var(--accent)`, largura via `width: %`.
  - Níveis: Java 70%, PostgreSQL 80%, Python 72%, MySQL 75%, HTML/CSS 78%, JavaScript 40%.

### 10. Contato
- Centralizado, `max-width: 640px`.
- Botão **copiar e-mail** com feedback `copiar → copiado!` (JS).
- Links: LinkedIn, GitHub, WhatsApp.

### 11. Footer
- Duas notas em mono: copyright + "feito com café & código".

---

## ⚡ Animações (CSS `@keyframes`)

```css
/* Cursor piscando */
@keyframes blink   { 0%,49% { opacity:1 } 50%,100% { opacity:0 } }

/* Bolinha de status */
@keyframes pulse   { 0%,100% { opacity:1; transform:scale(1) }
                     50%     { opacity:.45; transform:scale(.85) } }

/* Marquee de tecnologias */
@keyframes marquee { from { transform:translateX(0) }
                     to   { transform:translateX(-50%) } }

/* Entrada de elementos (opcional) */
@keyframes fade    { from { opacity:0; transform:translateY(14px) }
                     to   { opacity:1; transform:translateY(0) } }
```

Extras:
- `html { scroll-behavior: smooth; }` para navegação suave por âncoras.
- `scroll-margin-top: 90px` em cada `<section>` para a âncora não ficar atrás da nav.

---

## 🟨 JavaScript

Apenas **2 comportamentos**:

### 1. Menu mobile (hambúrguer)
```js
const btn  = document.querySelector('.nav-toggle');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => menu.classList.toggle('open'));

menu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => menu.classList.remove('open'))
);
```
> Dica: no CSS, mostre/esconda a navbar desktop e o botão hambúrguer com `@media (max-width: 760px)`.

### 2. Copiar e-mail
```js
const copyBtn = document.querySelector('.copy-email');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('luizpc.contato@gmail.com');
  const hint = copyBtn.querySelector('.hint');
  hint.textContent = 'copiado!';
  setTimeout(() => (hint.textContent = 'copiar'), 1800);
});
```

---

## 📐 Estratégia responsiva

O layout é quase todo **fluido, sem media queries**:
- `clamp()` para tamanhos de fonte e paddings.
- `flex-wrap: wrap` para colunas que empilham.
- `grid-template-columns: repeat(auto-fit, minmax(Xpx, 1fr))` para os grids.

Use `@media (max-width: 760px)` apenas para alternar a **navbar ↔ menu hambúrguer**.

---

## 🏷️ Estrutura semântica + nomes de classes

Convenção de nomenclatura: **BEM** (Bloco `__` Elemento `--` Modificador).
Ex.: `.project-card` (bloco), `.project-card__title` (elemento), `.btn--solid` (modificador).

### Estrutura geral

| Região | Tag | Classe |
|---|---|---|
| Cabeçalho fixo | `<header>` | `.site-header` |
| Menu de navegação | `<nav>` | `.navbar` |
| Conteúdo principal | `<main>` | — |
| Cada seção | `<section>` | `.section` + modificador |
| Rodapé | `<footer>` | `.site-footer` |
| Fundo decorativo | `<div>` | `.bg-grid` / `.bg-glow` |

### 1. Navbar — `<nav class="navbar">`
- Logo → `<a class="logo">` com `<span class="logo-mark">` (caixa LP) + `<span class="logo-text">`
- Links desktop → `<ul class="nav-links">` com vários `<li><a class="nav-link">`
- Botão contato → `<a class="btn btn--solid">`
- Botão hambúrguer → `<button class="nav-toggle">`
- Menu mobile → `<div class="mobile-menu">` (recebe `.open` quando ativo)

### 2. Hero — `<section class="hero">`
- Coluna texto → `<div class="hero__content">`
  - Badge → `<span class="badge">` + `<span class="badge__dot">`
  - Eyebrow → `<p class="eyebrow">`
  - Título → `<h1 class="hero__title">`
  - Descrição → `<p class="lead">`
  - Botões → `<div class="btn-group">` com `<a class="btn btn--solid">` e `<a class="btn btn--outline">`
- Coluna terminal → `<div class="hero__visual">`

### 3. Terminal — `<div class="terminal">`
- Topo → `<div class="terminal__bar">` com 3 `<span class="terminal__dot">` + `<span class="terminal__title">`
- Corpo → `<div class="terminal__body">` com várias `<p class="terminal__line">`
- Prompt `$` → `<span class="terminal__prompt">` · cursor → `<span class="terminal__cursor">`

### 4. Marquee — `<div class="marquee">`
- Trilho → `<div class="marquee__track">` com vários `<span class="marquee__item">`

### 5. Sobre — `<section class="section section--about">`
- Cabeçalho → `<div class="section__head">` com `<p class="section__num">` + `<h2 class="section__title">`
- Texto → `<div class="about__text">`
- Estatísticas → `<div class="stats">` com vários `<div class="stat">` → `<span class="stat__value">` + `<span class="stat__label">`

### 6. Projetos — `<section class="section section--projects">`
- Grid → `<div class="projects-grid">`
- Cada card → `<article class="project-card">`
  - Imagem → `<div class="project-card__media">`
  - Corpo → `<div class="project-card__body">`
    - Código → `<span class="project-card__id">`
    - Título → `<h3 class="project-card__title">`
    - Descrição → `<p>`
    - Tags → `<div class="tags">` com vários `<span class="tag">`

### 7. Serviços — `<section class="section section--services">`
- Grid → `<div class="services-grid">`
- Cada item → `<article class="service-card">` → `<span class="service-card__num">` + `<h3>` + `<p>`

### 8. Experiência — `<section class="section section--experience">`
- Timeline → `<div class="timeline">`
  - Cada item → `<div class="timeline__item">` com `<span class="timeline__dot">`, `<span class="timeline__date">`, `<h3>`, `<span class="timeline__company">`, `<ul>`
- Skills → `<div class="skills">`
  - Cada skill → `<div class="skill">` com `<div class="skill__head">` (nome + nível) e `<div class="skill__bar">` → `<div class="skill__fill">`

### 9. Contato — `<section class="section section--contact">`
- Wrapper → `<div class="contact">`
  - Título → `<h2>` · descrição → `<p class="lead">`
  - Botão → `<button class="copy-email">` com `<span class="copy-email__hint">`
  - Redes → `<div class="socials">` com vários `<a class="social-link">`

### 10. Footer — `<footer class="site-footer">`
- Dois `<span class="footer__note">`

### Classes utilitárias reaproveitáveis
Use em qualquer seção: `.btn`, `.btn--solid`, `.btn--outline`, `.tag`, `.eyebrow`, `.lead`, `.section`, `.section__num`, `.section__title`, `.badge`.

---

## ✅ Checklist de implementação

- [ ] Estrutura de pastas + arquivos base
- [ ] Importar fontes do Google Fonts
- [ ] Definir variáveis de cor e tipografia (`:root`)
- [ ] Fundo decorativo (grid + glow)
- [ ] Navbar + menu mobile
- [ ] Hero + card terminal
- [ ] Marquee de tecnologias
- [ ] Seção Sobre + estatísticas
- [ ] Seção Projetos (substituir placeholders por projetos reais)
- [ ] Seção Serviços
- [ ] Seção Experiência (timeline + skills)
- [ ] Seção Contato (botão copiar e-mail)
- [ ] Footer
- [ ] Animações (blink, pulse, marquee)
- [ ] Testar responsividade (desktop / tablet / mobile)
- [ ] Preencher links reais (LinkedIn, GitHub, WhatsApp)

---

## 👤 Conteúdo

**Luiz Paullo Caetano** — Analista de Suporte Técnico (N1, N2, N3) na **Up Business**.
2+ anos de experiência. Stack: Java, Python, PostgreSQL, MySQL, HTML, CSS, JavaScript.
E-mail: `luizpc.contato@gmail.com`

---

*Feito com café & código ☕*
