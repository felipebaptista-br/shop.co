# Shop.Co Front-end - Documentação

Bem-vindo à documentação oficial da API Shop.Co. Esta API foi desenvolvida usando Node.js com o framework Fastify e se conecta a um banco de dados PostgreSQL. Ela oferece funcionalidades para gerenciar produtos, marcas, categorias, cores e comentários.

## Índice

1. [Visão Geral](#1-visão-geral)
3. [Instalação](#1-instalação)
4. [Execução](#2-execução)
5. [Rotas da API consumida](#3-rotas-da-api)
    - [Brands](#brands)
    - [Categories](#categories)
    - [Colors](#colors)
    - [Comments](#comments)
    - [Products](#products)
6. [Dependências](#4-dependências)
7. [Contribuição](#5-contribuição)
8. [Licença](#6-licença)

## 1. Visão Geral

Bem-vindo(a) à Shop.Co, uma aplicação Web E-commerce criada para a compra de roupas, construída com TypeScript, React e Nextjs. Contém além de um Front-end imersivo, segue Design Patterns de Composição e metodologias modernas de desenvolvimento Web.

### Funcionalidades Principais

- **Adição de Produtos no carrinho**: Você poderá escolher uma série de produtos no catálogo e adicionar ao carrinho de compras.
- **Remoção de Produtos do carrinho**: Remova os itens que não gostou do carrinho de compras.
- **Filtragem de Produtos por categorias**: Escolha produtos por categorias.
- **Finalização de Compra**: Finalize a compra de forma fictícia.

### Tecnologias Utilizadas

- **Nextjs**: O projeto contém componentes dinâmicos e estáticos renderizados lado servidor para aumento de performance.
- **React**: Nesse caso, foram utilizados os Hooks do React, como (useState, useEffect, e useContext) para melhor configuração de projeto.

### Como Contribuir

Contribuições são bem-vindas! Se você encontrar bugs, tiver sugestões ou quiser adicionar novos recursos, fique à vontade para abrir uma issue ou enviar uma pull request.

### Agradecimentos

Agradecemos por considerar contribuir ao projeto Shop.Co.

## 1. Instalação

Clone o repositório para o seu ambiente local e instale as dependências usando o npm ou yarn:

```bash
git clone https://github.com/felipebaptista-br/shop.co.git
cd shop.co/client
npm install ou yarn install
```

## 2. Execução

Inicie o client usando o seguinte comando:

```bash
npm run dev
ou
yarn run dev
```

## 3. Rotas da API consumida

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

## 4. Dependências

- axios
- next
- date-fns
- react
- reac-dom

Certifique-se de ter todas as dependências instaladas antes de executar o projeto.

## 5. Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 6. Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
