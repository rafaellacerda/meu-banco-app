# Desafio Técnico - React

## Tecnologias e Bibliotecas Utilizadas

- **React.js**
- **Typescript**
- **Axios**
- **Jotai**
- **Date-fns**
- **Sonner**
- **React Hook Forms**
- **Zod**
- **Styled Components**
- **Json-server** - Para criação de um servidor de mock da API durante o desenvolvimento.

## Como Executar o Projeto

### 1. Executando o Front-end

Clone o repositório e entre na pasta do projeto:

```bash
$ git clone <url-do-repositorio>
$ cd meu-banco-app
```

Instale as dependências:

```bash
$ pnpm install
```

Inicie o servidor de mocks (utilizando json-server):

```bash
$ pnpm run server
```

Inicie o ambiente de desenvolvimento:

```bash
$ pnpm dev
```

Rodar testes e2e:

```bash
$ pnpm run test:playwright
```

Instalar chromium playwright:

```bash
$ npx playwright install chromium
```

### 2. Dados de Autenticação

Os dados utilizados pela aplicação estão localizados na pasta `db/server.json`. A autenticação é realizada com base na tabela `user`, contendo os campos `user` e `password`. O sistema utiliza esses dados para validar as credenciais de login.
