# 🎵 Configuração de Música de Fundo

## Como Funciona

Adicionamos um sistema elegante de música de fundo com:
- ✨ **Fade In Suave**: A música começa silenciosa e aumenta o volume gradualmente em 3 segundos
- 🔇 **Fade Out Suave**: Quando pausada, a música diminui o volume gradualmente em 1 segundo
- 🎵 **Volume Padrão**: 30% (suave para não prejudicar a conversa)
- 🔘 **Botão de Controle**: Circulado com borda dourada na navegação, com ícone de play/pausa

## Como Adicionar Sua Música

1. **Prepare sua música**:
   - Formato: MP3, WAV, OGG ou qualquer formato suportado pelo navegador
   - Duração: Recomendado 5-10 minutos (ou em loop)
   - Qualidade: 128-192 kbps é ideal

2. **Hospede a música**:
   - Opção 1: Upload na pasta `assets/` do site
   - Opção 2: Use um serviço de hospedagem como Cloudinary, DigitalOcean Spaces, etc.

3. **Atualize a URL no HTML**:
   
   No arquivo `index.html`, procure pela seção de áudio:
   ```html
   <audio id="background-music" preload="none">
     <source src="https://seu-dominio.com/musica.mp3" type="audio/mpeg" />
     Seu navegador não suporta áudio.
   </audio>
   ```

   Substitua `https://seu-dominio.com/musica.mp3` pela URL da sua música.

## Recomendações de Músicas

Para um casamento elegante, procure por:
- Músicas instrumentais clássicas ou modernas
- Softwares gratuitos: Pixabay Music, Incompetech, YouTube Audio Library
- Gêneros: Clássico, Piano, Orquestra, Ambient

## Personalizando o Volume e Duração do Fade

Edite no arquivo `script.js`:

```javascript
const FADE_IN_DURATION = 3000; // tempo em ms (3000 = 3 segundos)
const FADE_OUT_DURATION = 1000; // tempo em ms (1000 = 1 segundo)
const TARGET_VOLUME = 0.3; // volume final (0.0 = mudo, 1.0 = máximo)
```

## Notas Importantes

⚠️ **Autoplay**: Navegadores modernos bloqueiam autoplay de áudio. A música só toca quando o usuário clica no botão (isso é por design, para melhorar a experiência do usuário).

📱 **Responsivo**: O botão de música aparece na navegação em telas de 640px ou maiores. Em telas menores, o botão fica oculto (você pode modificar isso se desejar).

🔗 **CORS**: Se usar URL externa, certifique-se que o servidor permite requisições CORS.

## Personalizações Avançadas

### Mudar cor do botão
No `styles.css`, procure por `.music-toggle` e mude:
```css
border: 2px solid var(--gold); /* cor da borda */
color: var(--gold); /* cor do ícone */
```

### Posição do botão
O botão está dentro de `.nav-links`. Para movê-lo, edite a estrutura em `index.html`.

### Música em loop automático
No `index.html`, adicione `loop` no elemento audio:
```html
<audio id="background-music" preload="none" loop>
```
