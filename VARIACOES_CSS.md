# 🎨 Variações de Animações

Este arquivo contém **snippets CSS prontos** para diferentes efeitos cinematográficos. Copie e cole em `styles.css` para testar!

---

## 1️⃣ VARIAÇÃO ORIGINAL (Padrão - Recomendado)

✅ **Balanced, elegante e profissional**

```css
/* Zoom-out suave */
.hero::before {
  transform: scale(1.1);
  animation: heroZoomOut 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes heroZoomOut {
  from { transform: scale(1.1); }
  to { transform: scale(1); }
}

/* Textos em sequência */
body.loaded .hero-content .eyebrow {
  animation: slideUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
}

body.loaded .hero-content h1 {
  animation: slideUpFadeIn 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
}

body.loaded .hero-content .wedding-date {
  animation: slideUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.6s forwards;
}

body.loaded .hero-content .hero-copy {
  animation: slideUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s forwards;
}

body.loaded .hero-content .btn {
  animation: slideUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.4s forwards;
}
```

**Duração Total**: 3.6s | **Feeling**: Elegante, sofisticado

---

## 2️⃣ VARIAÇÃO MAIS RÁPIDA (Ousada)

⚡ **Para um impacto mais imediato - Menos de 2 segundos**

```css
/* Zoom mais rápido */
.hero::before {
  transform: scale(1.15);  /* Zoom maior */
  animation: heroZoomOut 2s cubic-bezier(0.35, 0, 0.65, 1) forwards;
}

@keyframes heroZoomOut {
  from { transform: scale(1.15); }
  to { transform: scale(1); }
}

/* Textos aparecem mais rápido */
body.loaded .hero-content .eyebrow {
  animation: slideUpFadeIn 0.9s cubic-bezier(0.35, 0, 0.65, 1) 0.3s forwards;
}

body.loaded .hero-content h1 {
  animation: slideUpFadeIn 1s cubic-bezier(0.35, 0, 0.65, 1) 0.6s forwards;
}

body.loaded .hero-content .wedding-date {
  animation: slideUpFadeIn 0.9s cubic-bezier(0.35, 0, 0.65, 1) 0.9s forwards;
}

body.loaded .hero-content .hero-copy {
  animation: slideUpFadeIn 0.9s cubic-bezier(0.35, 0, 0.65, 1) 1.2s forwards;
}

body.loaded .hero-content .btn {
  animation: slideUpFadeIn 0.9s cubic-bezier(0.35, 0, 0.65, 1) 1.5s forwards;
}
```

**Duração Total**: 2.4s | **Feeling**: Dinâmico, impactante

---

## 3️⃣ VARIAÇÃO MUITO LENTA (Cinematográfica)

🎬 **Para máximo impacto emocional - Quase 5 segundos**

```css
/* Zoom lento e suave */
.hero::before {
  transform: scale(1.08);
  animation: heroZoomOut 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes heroZoomOut {
  from { transform: scale(1.08); }
  to { transform: scale(1); }
}

/* Textos aparecem devagar e elegantemente */
body.loaded .hero-content .eyebrow {
  animation: slideUpFadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
}

body.loaded .hero-content h1 {
  animation: slideUpFadeIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) 1.7s forwards;
}

body.loaded .hero-content .wedding-date {
  animation: slideUpFadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 2.5s forwards;
}

body.loaded .hero-content .hero-copy {
  animation: slideUpFadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards;
}

body.loaded .hero-content .btn {
  animation: slideUpFadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 3.9s forwards;
}
```

**Duração Total**: 5.4s | **Feeling**: Cinematográfico, emocional ❤️

---

## 4️⃣ VARIAÇÃO COM ENTRADA DRAMATIZADA (Wobble)

🎪 **Efeito com um pequeno "bounce" no final**

```css
/* Zoom-out + wobble */
.hero::before {
  transform: scale(1.1);
  animation: heroZoomOutWobble 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes heroZoomOutWobble {
  0% { transform: scale(1.1); }
  85% { transform: scale(0.98); }
  100% { transform: scale(1); }
}

/* Textos com bounce */
body.loaded .hero-content .eyebrow {
  animation: slideUpFadeInBounce 1.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
}

body.loaded .hero-content h1 {
  animation: slideUpFadeInBounce 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.2s forwards;
}

body.loaded .hero-content .wedding-date {
  animation: slideUpFadeInBounce 1.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.6s forwards;
}

body.loaded .hero-content .hero-copy {
  animation: slideUpFadeInBounce 1.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2s forwards;
}

body.loaded .hero-content .btn {
  animation: slideUpFadeInBounce 1.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2.4s forwards;
}

@keyframes slideUpFadeInBounce {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Duração Total**: 3.7s | **Feeling**: Lúdico, divertido 🎉

---

## 5️⃣ VARIAÇÃO COM ROTAÇÃO SUAVE (Elegante)

💫 **Textos giram levemente enquanto sobem**

```css
/* Zoom normal */
.hero::before {
  transform: scale(1.1);
  animation: heroZoomOut 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Textos com rotação */
body.loaded .hero-content .eyebrow {
  animation: slideUpRotateFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
}

body.loaded .hero-content h1 {
  animation: slideUpRotateFadeIn 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
}

body.loaded .hero-content .wedding-date {
  animation: slideUpRotateFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.6s forwards;
}

body.loaded .hero-content .hero-copy {
  animation: slideUpRotateFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s forwards;
}

body.loaded .hero-content .btn {
  animation: slideUpRotateFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.4s forwards;
}

@keyframes slideUpRotateFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px) rotateX(45deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}
```

**Duração Total**: 3.6s | **Feeling**: Tridimensional, sofisticado ✨

---

## 6️⃣ VARIAÇÃO MINIMALISTA (Só Opacity)

🎯 **Sem movimento, apenas fade-in. Mais sutil**

```css
/* Sem zoom, só aparência suave */
.hero::before {
  transform: scale(1);  /* Sem zoom */
  animation: none;  /* Sem animação */
}

/* Só fade-in, sem slide */
body.loaded .hero-content .eyebrow {
  animation: fadeIn 1.2s ease-out 0.8s forwards;
}

body.loaded .hero-content h1 {
  animation: fadeIn 1.2s ease-out 1.2s forwards;
}

body.loaded .hero-content .wedding-date {
  animation: fadeIn 1.2s ease-out 1.6s forwards;
}

body.loaded .hero-content .hero-copy {
  animation: fadeIn 1.2s ease-out 2s forwards;
}

body.loaded .hero-content .btn {
  animation: fadeIn 1.2s ease-out 2.4s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Duração Total**: 3.6s | **Feeling**: Minimalista, requintado 🎨

---

## 7️⃣ VARIAÇÃO COM ESCALA DOS TEXTOS (Scale In)

🔍 **Textos crescem enquanto aparecem**

```css
/* Zoom-out normal */
.hero::before {
  transform: scale(1.1);
  animation: heroZoomOut 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Textos crescem e desaparecem */
body.loaded .hero-content .eyebrow {
  animation: scaleUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
}

body.loaded .hero-content h1 {
  animation: scaleUpFadeIn 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
}

body.loaded .hero-content .wedding-date {
  animation: scaleUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.6s forwards;
}

body.loaded .hero-content .hero-copy {
  animation: scaleUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s forwards;
}

body.loaded .hero-content .btn {
  animation: scaleUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.4s forwards;
}

@keyframes scaleUpFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

**Duração Total**: 3.6s | **Feeling**: Moderno, dinâmico 🚀

---

## 📋 Comparação Rápida

| Variação | Duração | Feeling | Melhor Para |
|----------|---------|---------|-------------|
| **Original** | 3.6s | Elegante | A maioria dos casamentos |
| **Rápida** | 2.4s | Ousado | Eventos vibrants |
| **Lenta** | 5.4s | Emocional | Cerimônias clássicas |
| **Wobble** | 3.7s | Lúdico | Casamentos descontraídos |
| **Rotação** | 3.6s | 3D | Casamentos modernos |
| **Minimalista** | 3.6s | Requintado | Casamentos sofisticados |
| **Scale** | 3.6s | Dinâmico | Casamentos contemporâneos |

---

## 🧪 Como Testar

1. Copie o código CSS de uma variação acima
2. Abra `styles.css`
3. Procure por `@keyframes heroZoomOut` e substitua
4. Procure pelos `body.loaded` e substitua
5. Salve e recarregue o navegador (Ctrl+Shift+R para cache limpo)
6. Abra em uma nova aba para ver a animação novamente (nova sessão)

---

## 🎯 Dica de Ouro

**Teste em diferentes dispositivos:**
- Desktop (Chrome Dev Tools)
- Mobile (simule em Dev Tools)
- 4G lento (simule em Network tab)

A animação deve rodar smooth em todos! ✅

---

## 🔧 Customizar Ainda Mais

### Mudar Atraso entre Textos
Altere os valores de delay (0.8s, 1.2s, 1.6s, 2.0s, 2.4s):

```css
/* Atrasar mais entre cada texto */
body.loaded .hero-content .eyebrow {
  animation: slideUpFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
  /* Mude para 1.2s para mais delay */
}
```

### Mudar Cor do Overlay
Em `.hero::before`, altere:
```css
background-image: 
  linear-gradient(rgba(35, 25, 18, 0.3), rgba(35, 25, 18, 0.3)),
                         ↑ cores (RGB)           ↑ opacidade (0-1)
```

Exemplos:
- `rgba(0, 0, 0, 0.4)` = Mais escuro
- `rgba(139, 69, 19, 0.5)` = Marrom romântico
- `rgba(255, 20, 147, 0.2)` = Rosa quente e leve

---

Divirta-se experimentando! 🎨✨
