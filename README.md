# Easymart – Gestão de Identidade e Acesso

Este projeto é o módulo central de gerenciamento de autenticação (AuthN) e autorização (AuthZ) para o ecossistema de sistemas **Easymart**.  
Fornece uma interface administrativa para controle de usuários, perfis de acesso e métricas de engajamento, sob uma arquitetura **White Label** e **Multi-tenant**.

## Principais Funcionalidades

- **Controle de Acesso (RBAC)**: Gestão granular de permissões por perfis.  
- **Visualização de Métricas**: Dashboards dinâmicos com dados de cadastros e status de usuários.  
- **Sistema White Label**: Personalização da identidade visual via variáveis de ambiente e paletas dinâmicas.  
- **Atividades Recentes**: Log em tempo real das ações realizadas no sistema.

## Como Iniciar

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 20 ou superior)  
- Docker (opcional, para execução em containers)  
- Gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)

## Execução Local (Desenvolvimento)

### 1. **Configurar variáveis de ambiente**
   Crie o arquivo .env.local na raiz do projeto:

```bash
   cp .env.example .env.local
```

### 2. Instalar dependências

```bash
    (npm | pnpm | yarn) install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
    npm run dev | pnpm dev
```

 > O sistema estará disponível em http://localhost:3000.

## Rodando com Docker

### 1. Construir a imagem

```bash
docker build -t easymart-auth-web .
```

### 2. Executar o container

```bash
docker run -p 3000:3000 --env-file .env.local easymart-auth-app
```

## Personalização (White Label)

## Personalização (White Label)

Configure no arquivo `.env`:

```env
NEXT_PUBLIC_BASE_API_URL=
NEXT_PUBLIC_TENANCY_NAME=

NEXT_PUBLIC_TENANCY_MAIN_LOGO_URL=
NEXT_PUBLIC_TENANCY_INVERTED_LOGO_URL=
NEXT_PUBLIC_MAIN_FAVICON_URL=

NEXT_PUBLIC_MAIN_COLOR=

NEXT_PUBLIC_PRIMARY_LIGHT=
NEXT_PUBLIC_PRIMARY_MAIN=
NEXT_PUBLIC_PRIMARY_DARK=
NEXT_PUBLIC_PRIMARY_CONTRAST=

NEXT_PUBLIC_SECONDARY_LIGHT=
NEXT_PUBLIC_SECONDARY_MAIN=
NEXT_PUBLIC_SECONDARY_DARK=
NEXT_PUBLIC_SECONDARY_CONTRAST=
```
