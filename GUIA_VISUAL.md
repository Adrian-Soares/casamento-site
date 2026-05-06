# 📸 Guia Visual - Passo a Passo

## Passo 1: Abra a Demonstração

Localize o arquivo `DEMO_ANIMACAO.html` na pasta do projeto:

```
casamento-site/
├── index.html
├── script.js
├── styles.css
├── DEMO_ANIMACAO.html  ← Clique duplo aqui!
├── ANIMACAO_ENTRADA.md
├── TIMELINE_ANIMACOES.md
└── ...
```

**Resultado**: Navegador abre com a animação rodando automaticamente.

---

## Passo 2: Veja a Animação

```
┌─────────────────────────────────────────┐
│  DEMO_ANIMACAO.html - Chrome            │
├─────────────────────────────────────────┤
│                                         │
│                                         │
│          José & Maria                   │  ← Texto aparecendo
│     24 de Maio de 2026                  │     em sequência
│  Estamos felizes em compartilhar...     │
│                                         │
│      Presentear com Pix                 │
│                                         │
│                                         │
└─────────────────────────────────────────┘

🎬 Repetir (botão no canto superior direito)
```

---

## Passo 3: Clique no Botão "Repetir"

Se quiser ver a animação novamente, clique:

```
┌─────────────────────────┐
│ 🎬 Animação de Entrada  │
│ Duração total: ~3.6s    │
│ ┌─────────────────────┐ │
│ │ Repetir             │ ← Clique aqui
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

## Passo 4: Teste em Seu Site Real

1. Abra `index.html` em novo navegador
2. A animação deve rodar automaticamente
3. Atualize (F5) - a animação **não roda** (sessão)
4. Abra em nova aba - a animação **roda novamente**

---

## Passo 5: Personalize (Opcional)

### Se quiser mudar a velocidade:

1. Abra `styles.css`
2. Procure por: `animation: heroZoomOut`
3. Mude o tempo: `2.8s` → `3.5s` (mais lento)

```css
/* Antes */
animation: heroZoomOut 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

/* Depois */
animation: heroZoomOut 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
```

### Se quiser testar outros estilos:

Veja o arquivo `VARIACOES_CSS.md` - tem 7 estilos diferentes prontos para copiar/colar!

---

## Timeline Visual da Animação

```
Tempo    | Fundo        | Textos
─────────┼──────────────┼─────────────────────────────
0.0s     | 🎬 Zoom      | (invisível)
0.8s     | 🎬 Zoom      | 👁️ Eyebrow aparece
1.2s     | 🎬 Zoom      | 👁️ Eyebrow + 🎭 Título aparece
1.6s     | 🎬 Zoom      | 👁️ + 🎭 + 📅 Data aparece
2.0s     | 🎬 Zoom      | 👁️ + 🎭 + 📅 + 💬 Mensagem aparece
2.4s     | 🎬 Zoom      | 👁️ + 🎭 + 📅 + 💬 + 🔘 Botão aparece
2.8s     | ✅ Completo  | ✅ Tudo visível
3.6s     | ✅ Fim       | ✅ Animações concluídas
```

---

## Responsividade em Ação

### Desktop (1920px)
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                  José & Maria                          │
│              24 de Maio de 2026                        │
│     (Grande, centralizado, fácil de ler)              │
│                                                        │
│              Presentear com Pix                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Tablet (768px)
```
┌──────────────────────────────┐
│                              │
│      José & Maria            │
│    24 de Maio de 2026        │
│   (Médio, ainda centraliz.)  │
│     Presentear com Pix       │
│                              │
└──────────────────────────────┘
```

### Mobile (390px)
```
┌──────────────┐
│              │
│  José &      │
│  Maria       │
│              │
│  24 de Maio  │
│  de 2026     │
│ (Pequeno,    │
│  legível)    │
│              │
│  Presentear  │
│  com Pix     │
│              │
└──────────────┘
```

---

## DevTools: Verificar Animação Funcionando

### Passo 1: Abrir DevTools
```
F12  (ou Ctrl+Shift+I)
```

### Passo 2: Ir para Console
```
DevTools → Aba "Console"
```

### Passo 3: Executar Teste
```javascript
// Cole isso no Console:
console.log('Classe loaded:', document.body.classList.contains('loaded'));

// Resposta esperada:
// Classe loaded: true
```

Se não der `true`, a animação pode não estar rodando. Verifique os arquivos!

### Passo 4: Verificar FPS
```
DevTools → Ctrl+Shift+P → "Show rendering"
```

Procure por "Show FPS meter" - deve estar sempre em ~60 FPS (sem travamentos).

---

## Testar em Diferentes Navegadores

### Chrome
```
Versão 90+
✅ Funciona perfeitamente
```

### Firefox
```
Versão 88+
✅ Funciona perfeitamente
```

### Safari
```
Versão 15+
✅ Funciona perfeitamente
```

### Edge
```
Versão 90+
✅ Funciona perfeitamente
```

### Navegadores antigos (IE 11)
```
Não suporta CSS Grid em animações
❌ Animação não roda, mas site continua funcionando
```

---

## Teste de Acessibilidade

### Ativar "Prefer Reduced Motion"

**Windows:**
1. Configurações → Facilidade de Acesso → Exibição
2. Ativar "Mostrar animações" (desligar)

**macOS:**
1. System Preferences → Accessibility → Display
2. Ativar "Reduce motion"

**Navegador (simular):**
1. DevTools → Ctrl+Shift+P
2. Procure por "Emulate CSS media"
3. Selecione "prefers-reduced-motion: reduce"

**Resultado Esperado:**
- Sem animações
- Textos aparecem imediatamente
- Sem zoom no fundo

---

## Teste de Performance

### Lighthouse (Google)

1. DevTools (F12)
2. Aba "Lighthouse"
3. Clique "Analyze page load"

**Resultado esperado:**
```
Performance:  90+ (verde)
Accessibility: 95+ (verde)
Best Practices: 90+ (verde)
SEO: 90+ (verde)
```

---

## Dúvidas Frequentes

### P: A animação está lenta em meu celular

**R:** Possível causa: Imagem muito grande
```
Solução: Compacte a imagem em https://tinypng.com/
```

### P: Não vejo a animação ao recarregar

**R:** Esperado! Usa `sessionStorage`
```
Solução: Abra em NOVA ABA para ver novamente
```

### P: Quero que a animação rode sempre

**R:** Remova `sessionStorage` do `script.js`
```javascript
// Remova estas linhas:
if (!sessionStorage.getItem("animationPlayed")) { ... }
sessionStorage.setItem("animationPlayed", "true");
```

### P: Como mudar a cor do overlay escuro?

**R:** Em `styles.css`:
```css
background-image: 
  linear-gradient(rgba(35, 25, 18, 0.3), rgba(35, 25, 18, 0.3)),
                        ↑ mude estas cores RGB
  url("...");
```

---

## Arquivos Importantes

```
casamento-site/
│
├── 🎨 DEMO_ANIMACAO.html ................. Ver animação ao vivo
├── 📖 ANIMACAO_ENTRADA.md ................ Documentação completa
├── 📊 TIMELINE_ANIMACOES.md .............. Timing detalhado com diagramas
├── 🎨 VARIACOES_CSS.md ................... 7 estilos para testar
├── 🔧 OTIMIZACAO_TROUBLESHOOTING.md ...... Resolver problemas
├── ⚡ README_RAPIDO.md ................... Início rápido (30 seg)
├── 📸 GUIA_VISUAL.md ..................... Este arquivo!
│
├── index.html ............................ Seu site (modificado ✅)
├── styles.css ............................ Seu CSS (modificado ✅)
├── script.js ............................ Seu JavaScript (modificado ✅)
│
└── assets/ .............................. Suas imagens
```

---

## 🎯 Próximo Passo

Escolha uma opção:

### Opção 1: Está tudo perfeito! 🎉
```
Deploy para produção
Seu site está pronto!
```

### Opção 2: Quer personalizar 🎨
```
Leia: VARIACOES_CSS.md
Escolha um dos 7 estilos
Copie e cole em styles.css
```

### Opção 3: Tem algum problema 🔧
```
Leia: OTIMIZACAO_TROUBLESHOOTING.md
Encontre sua situação
Siga a solução
```

---

**Parabéns!** 🎉

Seu site de casamento agora tem uma entrada cinematográfica profissional e elegante!

Que seja tão especial quanto seu dia! 💍✨

