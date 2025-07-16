# 🏖️ BaixioTurismo - Dashboard de Análise de Redes Sociais com IA

Um dashboard moderno e inteligente para análise de redes sociais, desenvolvido especificamente para o BaixioTurismo. Esta aplicação oferece análises detalhadas de performance em múltiplas plataformas sociais, geração de conteúdo com IA e relatórios personalizados.

## ✨ Funcionalidades Principais

### 📊 Dashboard Central

- Visão geral consolidada de todas as redes sociais
- Métricas em tempo real (seguidores, engajamento, alcance)
- Cards de performance por plataforma
- Análise de crescimento e tendências

### 🤖 Análise com Inteligência Artificial

- **Analisador de Perfis**: Análise inteligente de perfis usando Gemini AI
- **Comparador de Perfis**: Comparação entre diferentes contas
- **Teste de Conexão IA**: Verificação de conectividade com APIs de IA
- **Geração de Conteúdo**: Criação automática de posts otimizados

### 📱 Análise por Plataforma

- **Instagram**: Métricas, posts populares, hashtags, melhores horários
- **Facebook**: Alcance, engajamento, eventos, posts recentes
- **TikTok**: Visualizações, curtidas, vídeos em destaque, tendências
- **YouTube**: Inscritos, visualizações, vídeos populares, demografia

### 📈 Relatórios e Analytics

- Relatórios personalizados por período
- Análise de ROI por plataforma
- Métricas de conversão e leads
- Exportação de dados em múltiplos formatos
- Análise de conteúdo e temas populares

### 👥 Gestão de Personas

- Criação e gerenciamento de personas
- Histórico de posts por persona
- Análise de performance por público-alvo

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Shadcn/ui
- **Roteamento**: React Router 7
- **Formulários**: React Hook Form + Zod
- **HTTP Client**: Axios
- **Ícones**: Lucide React + React Icons
- **Notificações**: Sonner
- **IA**: Gemini AI Integration

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

## 🚀 Instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd frontend
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto:

   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── api/                 # Serviços de API
├── assets/             # Recursos estáticos
├── components/         # Componentes reutilizáveis
│   ├── AiAnalyzer/     # Componentes de IA
│   ├── DashBoard/      # Componentes do dashboard
│   ├── Facebook/       # Componentes do Facebook
│   ├── Instagram/      # Componentes do Instagram
│   ├── TikTok/         # Componentes do TikTok
│   ├── Youtube/        # Componentes do YouTube
│   ├── Report/         # Componentes de relatórios
│   └── ui/             # Componentes de UI base
├── contexts/           # Contextos React
├── hooks/              # Hooks customizados
├── layout.tsx          # Layout principal
├── main.tsx            # Ponto de entrada
├── pages/              # Páginas da aplicação
├── routes.tsx          # Configuração de rotas
├── types/              # Definições de tipos TypeScript
└── global.css          # Estilos globais
```

## 🎯 Como Usar

### 1. **Dashboard Principal**

- Acesse a página inicial para ver o resumo geral
- Visualize métricas consolidadas de todas as plataformas
- Acompanhe o crescimento e performance

### 2. **Análise por Plataforma**

- Navegue pelo menu lateral para acessar cada rede social
- Visualize métricas específicas de cada plataforma
- Analise posts populares e tendências

### 3. **Ferramentas de IA**

- **Analisador de Perfis**: Insira usernames para análise detalhada
- **Comparador**: Compare diferentes perfis lado a lado
- **Gerador de Posts**: Crie conteúdo otimizado com IA

### 4. **Relatórios**

- Configure filtros por período e plataforma
- Gere relatórios personalizados
- Exporte dados em diferentes formatos

### 5. **Gestão de Personas**

- Crie e gerencie personas para diferentes públicos
- Acompanhe histórico de posts por persona
- Analise performance por segmento

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção

# Linting
npm run lint         # Executa ESLint

# Preview
npm run preview      # Visualiza build de produção
```

## 🎨 Personalização

### Temas e Cores

O projeto utiliza Tailwind CSS com tema escuro. Para personalizar:

1. Edite `src/global.css` para cores globais
2. Modifique classes Tailwind nos componentes
3. Ajuste variáveis CSS para temas customizados

### Componentes UI

- Baseados em Shadcn/ui e Radix UI
- Altamente customizáveis
- Sistema de design consistente

## 🔒 Autenticação

O sistema utiliza autenticação baseada em contexto:

- Login necessário para acessar funcionalidades
- Rotas protegidas automaticamente
- Sessão persistente com cookies

## 📊 Integração com APIs

### APIs de Redes Sociais

- Instagram Graph API
- Facebook Graph API
- TikTok Business API
- YouTube Data API

### API de IA

- Gemini AI para análise de conteúdo
- Geração de posts otimizados
- Análise de sentimentos

## 🚀 Deploy

### Build de Produção

```bash
npm run build
```

### Servidor de Produção

```bash
npm run preview
```

### Deploy em Vercel/Netlify

1. Conecte o repositório
2. Configure variáveis de ambiente
3. Deploy automático a cada push

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas:

- Abra uma issue no GitHub
- Entre em contato com a equipe de desenvolvimento
- Consulte a documentação das APIs utilizadas

## 🔄 Atualizações

Mantenha o projeto atualizado:

```bash
npm update
npm audit fix
```
---
