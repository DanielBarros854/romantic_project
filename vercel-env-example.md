# Configuração de Variáveis de Ambiente na Vercel

## Variáveis Necessárias

Para o funcionamento completo do site, você precisa configurar as seguintes variáveis de ambiente na Vercel:

### 1. Acesse o Dashboard da Vercel
- Vá para [vercel.com](https://vercel.com)
- Faça login na sua conta
- Selecione seu projeto

### 2. Configure as Variáveis de Ambiente
- Vá em **Settings** > **Environment Variables**
- Adicione as seguintes variáveis:

```
SPOTIFY_CLIENT_ID=seu_client_id_aqui
SPOTIFY_REDIRECT_URI=https://seu-dominio.vercel.app/callback
```

### 3. Configuração do Spotify
1. Acesse [developer.spotify.com](https://developer.spotify.com/dashboard)
2. Crie uma nova aplicação
3. Configure as URLs de redirecionamento:
   - `https://seu-dominio.vercel.app/callback`
   - `http://localhost:3000/callback` (para desenvolvimento local)

### 4. Atualize o arquivo spotify-config.js
Substitua `YOUR_SPOTIFY_CLIENT_ID` pelo seu Client ID real.

## Deploy Automático

O projeto está configurado para:
- ✅ Deploy automático via Git
- ✅ Build otimizado
- ✅ Headers de segurança
- ✅ Cache para imagens
- ✅ SPA (Single Page Application) support
