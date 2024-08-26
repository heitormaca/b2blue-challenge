# Desafio B2Blue

Este projeto foi desenvolvido para o desafio da empresa B2Blue. A documentação dos requisitos do desafio está dentro das releases do repositório.

## Requisitos

- Node.js v21.7.0 ou superior;
- Gerenciador de pacotes Pnpm v8.15.5 ou superior;

## Configuração do Back-end

O Back-end foi desenvolvido utilizando a biblioteca JSON Server. Para configurar o Back-end, siga os passos abaixo:

- Primeiramente, é necessário instalar o JSON Server caso você não o tenha na sua máquina.

  > pnpm install -g json-server

- Em seguida, clone o projeto para o seu local na máquina.
- Execute o servidor do backend inserindo o comando dentro do diretório raiz do seu projeto:
  > json-server --watch db.json

Pronto, agora o servidor será executado no endereço "http://localhost:3000".

## Configuração do Front-end

O Front-end foi desenvolvido utilizando Next.js v14 e Material UI v5. Para configurar o Frontend, siga os passos abaixo:

- Instale as dependências necessárias executando o seguinte comando dentro do diretório raiz do seu projeto:

  > pnpm install

- Inicie o projeto, executando o comando:
  > pnpm run dev

Pronto, agora para acessar a aplicação, basta abrir o endereço "http://localhost:3001" no seu navegador :).
