# Livraria API
Uma API para gerenciar livros e autores em Node.js com MongoDB

## Sobre o projeto
Este é um projeto de API para uma livraria que permite realizar operações de CRUD (Create, Read, Update, Delete) em livros e autores. A API é construída com Node.js e utiliza MongoDB como banco de dados.

## Funcionalidades

### CRUD de Livros
- **Criar** um novo livro
- **Ler** um livro existente
- **Atualizar** um livro existente
- **Excluir** um livro existente

### CRUD de Autores
- **Criar** um novo autor
- **Ler** um autor existente
- **Atualizar** um autor existente
- **Excluir** um autor existente

## Instalação
Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/alexandrinodev/API-NodeJs-Livraria
    ```
2. Instale as dependências:
    ```sh
    npm install
    ```
3. Crie um banco de dados no MongoDB Atlas e obtenha a string de conexão.
4. Crie um arquivo `.env` na raiz do projeto e adicione a string de conexão no formato:
    ```env
    DB_CONNECTION_STRING=<sua_string_de_conexao>
    ```
5. Inicie o servidor:
    ```sh
    npm start
    ```

## Uso da API
A API é acessível através da URL `http://localhost:3000`. Você pode utilizar ferramentas como Postman ou cURL para testar as rotas.

### Rotas

#### Livros
- `GET /livros`: Retorna uma lista de todos os livros
- `GET /livros/:id`: Retorna um livro específico com o ID fornecido
- `POST /livros`: Cria um novo livro
- `PUT /livros/:id`: Atualiza um livro existente
- `DELETE /livros/:id`: Exclui um livro existente

#### Autores
- `GET /autores`: Retorna uma lista de todos os autores
- `GET /autores/:id`: Retorna um autor específico com o ID fornecido
- `POST /autores`: Cria um novo autor
- `PUT /autores/:id`: Atualiza um autor existente
- `DELETE /autores/:id`: Exclui um autor existente

## Contribuição
Se você quiser contribuir para o projeto, por favor, abra uma issue ou envie um pull request com as alterações que você deseja fazer.

## Licença
Este projeto está licenciado sob a licença MIT.

## Observações
- Certifique-se de que o arquivo `.env` esteja configurado corretamente com a string de conexão do seu banco de dados MongoDB.
- Se você estiver usando o MongoDB Atlas, certifique-se de que o banco de dados esteja configurado corretamente e que a string de conexão esteja válida.
