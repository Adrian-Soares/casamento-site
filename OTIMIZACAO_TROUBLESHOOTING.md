# 🔧 Guia de Otimização e Troubleshooting

---

## ✅ Checklist Pré-Lançamento

Antes de publicar seu site, verifique:

### 1. Imagem de Fundo
- [ ] Imagem otimizada (max 500KB)
- [ ] Testada em diferentes resoluções
- [ ] URL funciona (teste em nova aba)
- [ ] Credito à fonte (se necessário)

### 2. Navegadores
- [ ] Chrome 90+ (desktop)
- [ ] Firefox 88+ (desktop)
- [ ] Safari 15+ (macOS)
- [ ] Safari (iOS)
- [ ] Chrome mobile
- [ ] Firefox mobile

### 3. Performance
- [ ] Lighthouse score 90+ (Google)
- [ ] FPS constantes 60 (sem travamentos)
- [ ] Mobile: testado em 4G lento
- [ ] DevTools: sem erros no console

### 4. Acessibilidade
- [ ] Testado com `prefers-reduced-motion: reduce`
- [ ] Teclado: todos botões acessíveis
- [ ] Screen reader: conteúdo legível
- [ ] Contraste: WCAG AA ou AAA

### 5. Responsividade
- [ ] Mobile (320px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)
- [ ] Ultra-wide (1920px+)

---

## 🐛 Troubleshooting

### ❌ Problema: Animação não está rodando

**Solução 1: Verificar se a classe `loaded` foi adicionada**
```javascript
// Abra o Console (F12) e execute:
console.log(document.body.classList);
// Deve conter "loaded"
```

**Solução 2: Verificar se há erro no CSS**
```
DevTools → Console → Procure por erros vermelhos
```

**Solução 3: Limpar cache**
```
Ctrl+Shift+Del → Selecionar "Todos os tempos" → Limpar
```

**Solução 4: Testar em nova aba**
```
A animação roda apenas na PRIMEIRA carga (sessionStorage)
Abra em nova aba para ver novamente
```

---

### ❌ Problema: Imagem não aparece

**Verificar URL:**
```javascript
// Abra o Console e execute:
fetch('https://sua-url-da-imagem.jpg')
  .then(r => r.ok ? console.log('✅ OK') : console.log('❌ Erro'))
  .catch(e => console.log('❌ CORS ou URL inválida'))
```

**Alternativa: Usar imagem local**
```css
/* Em styles.css, mude para um arquivo local */
.hero::before {
  background-image: 
    linear-gradient(rgba(35, 25, 18, 0.3), rgba(35, 25, 18, 0.3)),
    url("./assets/minha-imagem.jpg");  /* Caminho relativo */
}
```

---

### ❌ Problema: Animação está travando/com lag

**Verificar FPS:**
1. DevTools → F12
2. Ctrl+Shift+P → "Show rendering"
3. Procure por "Rendering" → "Show FPS meter"
4. Deve estar em 60 FPS constante

**Possíveis Causas:**
- Imagem muito grande (compacte)
- Muitos elementos na página
- Browser desatualizado

**Soluções:**

Opção 1: Compactar imagem
```bash
# Via ImageMagick (Windows)
magick input.jpg -quality 80 -resize 1920x1080 output.jpg

# Via online: https://tinypng.com/
```

Opção 2: Reduzir qualidade do overlay
```css
.hero::before {
  background-image: 
    linear-gradient(rgba(35, 25, 18, 0.5), rgba(35, 25, 18, 0.5)),
                                 ↑ aumente de 0.3 para 0.5
    url("...");
}
/* Mais escuro = menos carga visual */
```

Opção 3: Reduzir duração
```css
/* Animação mais rápida = menos processamento */
animation: heroZoomOut 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                       ↑ de 2.8s para 2s
```

---

### ❌ Problema: Textos não aparecem em mobile

**Verificar Viewport:**
```html
<!-- Confirme se está no <head> de index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Verificar Espaçamento:**
```css
/* Em styles.css, aumente o margin */
.hero-content {
  margin: 4rem auto 0;  /* Mude para 6rem auto 0 */
}
```

**Testar em DevTools:**
1. F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Selecione "iPhone 12" ou "Pixel 6"
3. Veja se os textos ficam visíveis

---

### ❌ Problema: Botão não funciona

**Verificar atributo href:**
```html
<!-- Confirme que tem um href válido -->
<a class="btn btn-primary" href="#presentes">Presentear com Pix</a>
                           ↑ deve ter um href
```

**Verificar section de presentes:**
```html
<!-- Confirme que existe uma section com id="presentes" -->
<section id="presentes">
  ...
</section>
```

---

## ⚡ Otimizações Avançadas

### 1. Carregar Imagem Lazy (melhora performance inicial)

```html
<!-- Em index.html, no .hero -->
<header class="hero" style="background-image: linear-gradient(...), url(imagem-otimizada.jpg)">
```

Depois em CSS:
```css
.hero::before {
  background-image: none;  /* Não carrega logo */
}

body.loaded .hero::before {
  background-image: url("imagem-otimizada.jpg");  /* Carrega após animação */
}
```

### 2. Usar WebP (formatos modernos, menor tamanho)

```css
/* WebP em navegadores modernos */
@supports (background-image: url("image.webp")) {
  .hero::before {
    background-image: url("image.webp");
  }
}

/* Fallback para PNG/JPG */
@supports not (background-image: url("image.webp")) {
  .hero::before {
    background-image: url("image.jpg");
  }
}
```

### 3. Usar CSS Grid para melhor performance

```css
/* Melhor que flexbox para esta situação */
.hero {
  display: grid;
  place-items: center;  /* Centraliza sem margin */
}
```

### 4. Usar requestAnimationFrame para maior controle

```javascript
// Já implementado, mas você pode fazer mais:
let frameCount = 0;
function animationFrame() {
  frameCount++;
  if (frameCount < 60) {  // Aguarda 1 segundo (60 FPS)
    requestAnimationFrame(animationFrame);
  } else {
    document.body.classList.add("loaded");
  }
}
requestAnimationFrame(animationFrame);
```

### 5. Precarregar Fontes

```html
<!-- Em <head> de index.html -->
<link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap">
```

---

## 📊 Métricas de Performance

### Tempos Esperados:

| Métrica | Esperado | Seu Site |
|---------|----------|----------|
| First Paint | < 1s | ✅ |
| First Contentful Paint | < 1.5s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |
| Time to Interactive | < 3s | ✅ |

### Como Medir (Google Lighthouse):

1. DevTools → F12
2. Aba "Lighthouse"
3. Clique "Analyze page load"
4. Veja os scores

---

## 🎯 Boas Práticas

### ✅ Faça
- [ ] Use `transform` e `opacity` em animações (GPU-acelerado)
- [ ] Use `will-change` em elementos animados
- [ ] Respeite `prefers-reduced-motion`
- [ ] Teste em múltiplos navegadores
- [ ] Otimize imagens antes de usar
- [ ] Use `requestAnimationFrame` para triggers

### ❌ Evite
- [ ] Animar `width`, `height`, `top`, `left` (CPU-intensivo)
- [ ] Usar `!important` em demasia
- [ ] Adicionar muitas animações simultâneas
- [ ] Imagens muito grandes (> 500KB)
- [ ] JavaScript pesado no primeiro carregamento
- [ ] Desabilitar `prefers-reduced-motion`

---

## 🧪 Teste de Compatibilidade

### Linha de Comando (Linux/Mac)

```bash
# Testar em diferentes versões do Chrome
for browser in google-chrome chromium firefox; do
  $browser &
done

# Ou use BrowserStack online: https://browserstack.com
```

### DevTools Emulation

```
F12 → Ctrl+Shift+P → "Emulate CSS media feature prefers-reduced-motion"
```

---

## 🚀 Deployment

### Checklist Final

1. [ ] Todos os testes passando
2. [ ] Imagens otimizadas
3. [ ] CSS minificado (opcional, mas recomendado)
4. [ ] JavaScript sem console.log
5. [ ] Meta tags preenchidas
6. [ ] Favicon adicionado
7. [ ] SSL/HTTPS habilitado
8. [ ] Cache-Control configurado

### Minificar CSS (Opcional)

```bash
# Online: https://cssminifier.com/

# Ou via npm:
npm install -g csso-cli
csso-cli styles.css -o styles.min.css
```

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique o console do navegador (F12)
2. Leia as mensagens de erro
3. Procure em Stack Overflow
4. Teste em outro navegador
5. Limpe cache e cookies

---

## 🎓 Recursos de Aprendizado

- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [MDN: Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [Can I Use: Browser Compatibility](https://caniuse.com/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🎉 Pronto!

Seu site está otimizado e pronto para impactar seus visitantes! 🚀

Aproveite o casamento! 💍✨

