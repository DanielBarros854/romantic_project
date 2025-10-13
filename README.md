# 💕 Site Romântico

Um site romântico e interativo com duas páginas, criado especialmente para demonstrar carinho e amor.

## ✨ Funcionalidades

- **Página Inicial**: Botão "Clique Aqui" com animações de coração
- **Página Romântica** com:
  - 🎵 Player de música integrado (Spotify)
  - 📸 Carrossel de fotos automático
  - ⏰ Contador de tempo romântico
  - 💌 Mensagem personalizada

## 🎨 Características Visuais

- Design responsivo e moderno
- Animações suaves e efeitos visuais
- Gradientes românticos
- Fontes elegantes (Dancing Script + Poppins)
- Efeitos de partículas de coração
- Transições fluidas entre páginas

## 🚀 Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. Clique no botão "Clique Aqui" na página inicial
3. Navegue pela página romântica usando as setas do teclado ou botões do carrossel

## 🎮 Controles do Carrossel

### ⌨️ **Atalhos de Teclado:**
- **← →** (Setas): Navegar entre fotos
- **Espaço**: Pausar/Retomar carrossel automático
- **P**: Pausar carrossel
- **R**: Retomar carrossel

### 🎯 **Funcionalidades Inteligentes:**
- **Reset Automático**: Timer reseta quando você navega manualmente
- **Auto-play**: Fotos mudam automaticamente a cada 5 segundos
- **Controle Manual**: Botões de navegação sempre disponíveis

## 🎵 Integração com Spotify

### 🚀 **Player Sem Login (Recomendado)**

O site já vem com uma música romântica pré-carregada que toca automaticamente! Não precisa de configuração.

**Música padrão:** "Espelho" - Jorge e Mateus

**Para personalizar a música padrão:**
1. Abra o console do navegador (F12)
2. Use as funções disponíveis:

```javascript
// Alterar música padrão
setDefaultTrack('ID_DA_MUSICA')

// Tocar uma música específica
playTrack('ID_DA_MUSICA')

// Tocar música aleatória
playRandomTrack()

// Listar músicas disponíveis
listAvailableTracks()
```

### 🔧 **Player Avançado (Opcional)**

Para controle total da música, você pode ativar o modo avançado:

1. **Criar conta de desenvolvedor no Spotify:**
   - Acesse: https://developer.spotify.com/dashboard
   - Faça login com sua conta Spotify

2. **Criar uma aplicação:**
   - Clique em "Create App"
   - Preencha os dados da aplicação
   - Anote o **Client ID**

3. **Configurar URLs de redirecionamento:**
   - Adicione: `http://localhost:3000/callback` (desenvolvimento)
   - Adicione: `https://seudominio.com/callback` (produção)

4. **Configurar o Client ID:**
   - Abra o arquivo `spotify-config.js`
   - Substitua `YOUR_SPOTIFY_CLIENT_ID` pelo seu Client ID

5. **Ativar modo avançado:**
   - Clique no botão "Modo Avançado" no player de música

### 🎵 **Músicas Românticas Incluídas:**

- "Espelho" - Jorge e Mateus (padrão)
- "Perfect" - Ed Sheeran
- "All of Me" - John Legend
- "Thinking Out Loud" - Ed Sheeran
- "A Thousand Years" - Christina Perri
- "At Last" - Etta James
- "Make You Feel My Love" - Adele

**Como encontrar o ID de uma música:**
1. Abra o Spotify Web Player
2. Vá para a música desejada
3. Clique nos três pontos (...) > Compartilhar > Copiar link do Spotify
4. O link será: `https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh`
5. O ID é: `4iV5W9uYEdYUVa79Axb7Rh`

## 📅 Personalizando a Data do Contador

Para alterar a data de início do contador:

1. Abra o console do navegador (F12)
2. Digite: `setStartDate('YYYY-MM-DD')`
3. Substitua pela data desejada

**Exemplo:**
```javascript
setStartDate('2024-01-01')
```

## 📸 Adicionando Suas Fotos

Para adicionar suas próprias fotos ao carrossel:

1. Edite o arquivo `index.html`
2. Substitua as URLs das imagens na seção do carrossel
3. Adicione ou remova slides conforme necessário

**Localização no código:**
```html
<div class="carousel-slide">
    <img src="SUA_IMAGEM_AQUI" alt="Descrição">
    <div class="slide-caption">Sua legenda aqui</div>
</div>
```

## 💌 Personalizando a Mensagem

Para personalizar a mensagem romântica:

1. Edite o arquivo `index.html`
2. Modifique o conteúdo da seção `.romantic-message`
3. Altere o texto, adicione parágrafos ou modifique a assinatura

## 🎨 Personalizando Cores e Estilos

Para personalizar o visual:

1. Edite o arquivo `style.css`
2. Modifique as variáveis de cor nos gradientes
3. Ajuste fontes, tamanhos e espaçamentos conforme desejado

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 💻 Desktops
- 📱 Tablets
- 📱 Smartphones

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox e Grid)
- JavaScript (ES6+)
- Font Awesome (ícones)
- Google Fonts (tipografia)
- Spotify Web Playback SDK (música)

## 💡 Dicas de Uso

- Use fotos de alta qualidade para melhor visualização
- Escolha músicas que tenham boa qualidade de áudio
- Teste em diferentes dispositivos para garantir compatibilidade
- Personalize as mensagens para torná-las mais especiais

## 🚀 Deploy na Vercel

### Configuração Rápida:

1. **Instale a Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login na Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy do projeto:**
   ```bash
   vercel
   ```

4. **Configure as variáveis de ambiente:**
   - Acesse o dashboard da Vercel
   - Vá em Settings > Environment Variables
   - Adicione: `SPOTIFY_CLIENT_ID=seu_client_id`

### Deploy via GitHub:
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push!

### 📁 Arquivos de Configuração:
- `vercel.json` - Configurações do deploy
- `package.json` - Dependências do projeto
- `.vercelignore` - Arquivos ignorados no deploy

## 🎉 Pronto para Usar!

Seu site romântico está pronto! Basta abrir o `index.html` no navegador ou fazer deploy na Vercel.

---

*Criado com ❤️ para demonstrar carinho e amor*
