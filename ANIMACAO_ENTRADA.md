# 🎬 Animação Cinematográfica de Entrada

## Visão Geral
Este projeto implementa uma entrada elegante e emocional para seu site de casamento com animações suaves e profissionais.

---

## ✨ O que foi implementado

### 1. **Zoom-Out na Imagem de Fundo**
- A imagem começa com escala 1.1 (levemente ampliada)
- Faz um zoom-out suave até escala 1.0 (normal)
- Duração: **2.8 segundos**
- Curva de animação: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out suave)
- Usa `will-change: transform` para otimizar performance

### 2. **Overlay Escuro**
- Camada semi-transparente rgba(35, 25, 18, 0.3) sobre a imagem
- Aplicado via `::before` pseudoelemento
- Mantém o contraste e legibilidade do texto

### 3. **Animação Sequencial de Textos**
Os elementos aparecem em sequência com fade-in + slide-up:

| Elemento | Duração | Delay | Efeito |
|----------|---------|-------|--------|
| Eyebrow (Vamos celebrar o amor) | 1.2s | 0.8s | Fade + Slide Up |
| Título (José & Maria) | 1.4s | 1.2s | Fade + Slide Up |
| Data (24 de Maio de 2026) | 1.2s | 1.6s | Fade + Slide Up |
| Mensagem | 1.2s | 2.0s | Fade + Slide Up |
| Botão | 1.2s | 2.4s | Fade + Slide Up |

**Duração total: ~3.6 segundos** (impacto visual importante nos primeiros segundos)

---

## 🛠️ Como Funciona

### HTML
Os elementos já existem na estrutura:
```html
<div class="hero-content reveal">
  <p class="eyebrow">Vamos celebrar o amor</p>
  <h1>José & Maria</h1>
  <p class="wedding-date">24 de Maio de 2026</p>
  <p class="hero-copy">Estamos muito felizes...</p>
  <a class="btn btn-primary" href="#presentes">Presentear com Pix</a>
</div>
```

### CSS
**Keyframe `heroZoomOut`** (animação de fundo)
```css
@keyframes heroZoomOut {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
```

**Keyframe `slideUpFadeIn`** (animação de textos)
```css
@keyframes slideUpFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### JavaScript
Adiciona a classe `loaded` ao `<body>` quando a página carrega:
```javascript
function triggerEntryAnimation() {
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
}
```

Usa `sessionStorage` para garantir que a animação rode **apenas na primeira carga**, não em cada navegação:
```javascript
if (!sessionStorage.getItem("animationPlayed")) {
  // Dispara animação
  sessionStorage.setItem("animationPlayed", "true");
}
```

---

## 📱 Responsividade

- ✅ Funciona em todos os tamanhos de tela
- ✅ Textos usam `clamp()` para escalar automaticamente
- ✅ Botão responsivo com bom espaçamento para toque
- ✅ Imagem de fundo usa `background-attachment: fixed` para efeito parallax

---

## ♿ Acessibilidade

- ✅ Respeita `prefers-reduced-motion` (desativa animações para usuários que preferem movimento reduzido)
- ✅ Contraste adequado com overlay escuro
- ✅ Texto legível em todos os tamanhos de tela

---

## 🎨 Personalizações Possíveis

### Alterar Duração da Animação de Fundo
Em `styles.css`, procure por `animation: heroZoomOut`:
```css
animation: heroZoomOut 2.8s cubic-bezier(...) forwards;
                      ↑
                   Mude para 2s, 3s, etc.
```

### Alterar Duração dos Textos
Procure pelos delays (0.8s, 1.2s, 1.6s, etc.):
```css
body.loaded .hero-content .eyebrow {
  animation: slideUpFadeIn 1.2s cubic-bezier(...) 0.8s forwards;
                                                    ↑
                                              Mude o delay
}
```

### Alterar Curva de Animação
Mude `cubic-bezier(0.25, 0.46, 0.45, 0.94)` para:
- `ease-out` (mais suave)
- `ease-in-out` (começa lento e termina lento)
- Ou gere seu próprio em: https://cubic-bezier.com

### Alterar Overlay Escuro
Em `styles.css`, procure por `background-image: linear-gradient(rgba(35, 25, 18, 0.3), ...)`:
```css
rgba(35, 25, 18, 0.3)  ← Mude para rgba(0, 0, 0, 0.4), etc.
                          Primeiro 3 valores: cor (RGB)
                          Último valor: opacidade (0-1)
```

### Alterar Imagem de Fundo
Em `styles.css`:
```css
background-image: linear-gradient(...),
  url("https://sua-imagem-aqui.jpg");
```

---

## 📊 Performance

- ✅ Usa `will-change: transform` (otimização do navegador)
- ✅ Usa `transform` e `opacity` (propriedades GPU-aceleradas)
- ✅ Sem JavaScript pesado (apenas adiciona classe)
- ✅ Animações via CSS (mais eficientes que JS)

---

## 🧪 Testando

1. **Primeira carga**: Veja a animação completa
2. **Recarregar a página (F5)**: A animação **não vai rodar** (controlada por `sessionStorage`)
3. **Abrir em nova aba**: A animação **vai rodar novamente** (nova sessão)
4. **Abrir DevTools** → Settings → Rendering → **Check "Disable paint timing"** para simular movimento reduzido

---

## 🐛 Troubleshooting

### A animação não está rodando
- Verifique se a classe `loaded` foi adicionada ao `<body>` (abra DevTools)
- Verifique se os arquivos CSS e JS estão sendo carregados (Console)
- Limpe o cache do navegador (Ctrl+Shift+Del)

### A imagem não está aparecendo
- Verifique a URL da imagem em `styles.css`
- Verifique se a imagem está acessível (teste a URL em uma nova aba)

### Animação travando
- Isso é raro, mas se acontecer:
  - Tente reduzir a duração das animações
  - Use navegador mais recente (Chrome 90+, Firefox 88+, Safari 15+)

---

## 📚 Referências de Easing

| Função | Comportamento |
|--------|---------------|
| `ease-out` | Começa rápido, termina lento (natural) |
| `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Ease-out customizado (suave) |
| `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic (quica) |

Teste em: https://cubic-bezier.com

---

## 🎯 Resultado Final

✨ **Uma entrada cinematográfica elegante que causa impacto visual imediato, transmitindo sofisticação e beleza ao visitante do seu site de casamento.**

Aproveite o momento especial! 💍

