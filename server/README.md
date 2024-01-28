# Shop.Co API - Documentação

Bem-vindo à documentação oficial da API Shop.Co. Esta API foi desenvolvida usando Node.js com o framework Fastify e se conecta a um banco de dados PostgreSQL. Ela oferece funcionalidades para gerenciar produtos, marcas, categorias, cores e comentários.

## Índice

1. [Visão Geral](#1-visão-geral)
2. [Configuração do Ambiente](#2-configuração-do-ambiente)
3. [Instalação](#3-instalação)
4. [Execução](#4-execução)
5. [Rotas da API](#5-rotas-da-api)
    - [Brands](#brands)
    - [Categories](#categories)
    - [Colors](#colors)
    - [Comments](#comments)
    - [Products](#products)
6. [Dependências](#6-dependências)
7. [Contribuição](#7-contribuição)
8. [Licença](#8-licença)

## 1. Visão Geral

Bem-vindo à API Shop.Co, uma plataforma de gerenciamento de produtos construída com Node.js e o framework Fastify. Esta API fornece um conjunto robusto de endpoints para operações CRUD (Create, Read, Update, Delete) relacionadas a produtos, marcas, categorias, cores e comentários.

### Funcionalidades Principais

- **Produtos**: Gerencie detalhes de produtos, incluindo nome, descrição, preço, estoque, marca, categoria e imagem.
- **Marcas**: Adicione, atualize e remova informações sobre marcas de produtos.
- **Categorias**: Crie e mantenha categorias para organizar seus produtos de forma eficiente.
- **Cores**: Gerencie uma variedade de cores para atribuir a produtos.
- **Comentários**: Permita que os usuários deixem comentários e classificações para os produtos.

### Tecnologias Utilizadas

- **Node.js com Fastify**: O projeto é construído usando Node.js, e o framework Fastify é escolhido para garantir desempenho eficiente.
- **PostgreSQL**: O banco de dados utilizado é o PostgreSQL, proporcionando confiabilidade e capacidade de escalabilidade.
- **dotenv**: As configurações de ambiente são gerenciadas usando o pacote dotenv.
- **npm**: O gerenciador de pacotes npm é utilizado para instalar e gerenciar as dependências do projeto.

### Objetivo do Projeto

O principal objetivo desta API é fornecer uma solução eficaz para gerenciar inventários de produtos. Seja para um comércio eletrônico, uma loja física ou qualquer outra aplicação, a API Shop.Co busca oferecer uma maneira flexível e escalável de lidar com informações relacionadas a produtos.

### Estrutura do Código

O código-fonte está organizado em controladores, rotas e uma camada de acesso a dados para manter uma estrutura modular e facilmente expansível. A integração com o PostgreSQL é feita através do pacote `postgres`.

### Como Contribuir

Contribuições são bem-vindas! Se você encontrar bugs, tiver sugestões ou quiser adicionar novos recursos, fique à vontade para abrir uma issue ou enviar uma pull request. Juntos, podemos fazer desta API uma ferramenta ainda mais poderosa.

### Agradecimentos

Agradecemos por considerar contribuir para a API Shop.Co. Esperamos que esta ferramenta seja útil para suas necessidades de gerenciamento de produtos.

## 2. Configuração do Ambiente

Antes de começar, certifique-se de ter as seguintes variáveis de ambiente configuradas no seu arquivo `.env`:

```plaintext
PGHOST
PGDATABASE
PGUSER
PGPASSWORD
ENDPOINT_ID
```

Estas variáveis são necessárias para a conexão com o banco de dados PostgreSQL.

## 3. Instalação

Clone o repositório para o seu ambiente local e instale as dependências usando o npm:

```bash
git clone https://github.com/felipebaptista-br/shop.co.git
cd shop.co
npm install
```

## 4. Execução

Inicie o servidor usando o seguinte comando:

```bash
npm start
```

### O servidor estará disponível em <http://localhost:5000>

Nesta seção, é fornecido o comando (`npm start`) para iniciar o servidor da aplicação. Após a execução desse comando, o servidor estará acessível em `http://localhost:5000`. Certifique-se de executar esse comando no terminal ou prompt de comando no diretório do projeto após ter concluído a instalação das dependências.

## 5. Rotas da API

### Brands

- **GET /brands**: Retorna todas as marcas.
- **GET /brand/:id**: Retorna detalhes de uma marca específica.
- **POST /brand**: Adiciona uma nova marca.
- **PUT /brand/:id**: Atualiza os detalhes de uma marca.
- **DELETE /brand/:id**: Remove uma marca.

### Categories

- **GET /categories**: Retorna todas as categorias.
- **GET /category/:id**: Retorna detalhes de uma categoria específica.
- **POST /category**: Adiciona uma nova categoria.
- **PUT /category/:id**: Atualiza os detalhes de uma categoria.
- **DELETE /category/:id**: Remove uma categoria.

### Colors

- **GET /colors**: Retorna todas as cores.
- **GET /color/:id**: Retorna detalhes de uma cor específica.
- **POST /color**: Adiciona uma nova cor.
- **PUT /color/:id**: Atualiza os detalhes de uma cor.
- **DELETE /color/:id**: Remove uma cor.

### Comments

- **GET /comments**: Retorna todos os comentários.
- **GET /comment/:id**: Retorna detalhes de um comentário específico.
- **POST /comment**: Adiciona um novo comentário.
- **PUT /comment/:id**: Atualiza os detalhes de um comentário.
- **DELETE /comment/:id**: Remove um comentário.

### Products

- **GET /products**: Retorna todos os produtos.
- **GET /product/:id**: Retorna detalhes de um produto específico.
- **POST /product**: Adiciona um novo produto.
- **PUT /product/:id**: Atualiza os detalhes de um produto.
- **DELETE /product/:id**: Remove um produto.

## 6. Dependências

- Fastify
- dotenv
- postgres

Certifique-se de ter todas as dependências instaladas antes de executar o projeto.

## 7. Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 8. Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
