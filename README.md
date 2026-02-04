# Landing Page - ADVOCACIA

Este projeto é um landing page focada para uso profissional de uma advocacia dos setores Jurídicos, Direito do Trabalho e Civil.


## Como Iniciar

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 20 ou superior)  
- Docker (opcional, para execução em containers)  
- Gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)

## Execução Local (Desenvolvimento)

### 1. Instalar dependências

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
docker build -t adv-img .
```

### 2. Executar o container

```bash
docker run -p 3000:3000 --env-file .env.local adv-web
```