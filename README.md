# NodeStudies

Mini Projetos de Cursos, Livros e artigos de Node.js.

Aqui tenho projetos desde Node.js puro focado em padrões, tecnicas avançadas ou simples

## COMEÇANDO COM NODE.JS EM 2022
Pasta: iniciando-com-node

Link: https://youtu.be/fm4_EuCsQwg

Sobre: Projeto inicial de cadastro simples com arquivo

## Node.js: Iniciando da teoria à prática | Masterclass #11
Pasta: node-masterclass

Link: https://www.youtube.com/watch?v=DiXbJL3iWVs

Sobre: Armazenador de URLs para testar chamadas de API

## Node.js: API Rest com Express e MongoDB
Pasta: nodejs-api-rest-alura

Link: https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb

Sobre: O objetivo vai ser construir uma API para Livraria.

## Ambiente de desenvolvimento NodeJS com Docker e Docker Compose
Pasta: docker-and-nodejs

Link: https://www.youtube.com/watch?v=AVNADGzXrrQ

Sobre: Tutorial de Docker e Docker Compose pra aplicações Node.js


## TypeScript, o início, de forma prática | MasterClass #07
Pasta: typescript-masterclass

Link: https://www.youtube.com/watch?v=0mYq5LrQN1s

Sobre: Aplicação inicial para entender o Typescript junto do Node.js e React
* Backend utilizar o ts-node-dev para compilar o TS para JS:
    yarn ts-node-dev --respawn src/index.ts
* Para executar o backend:
    yarn dev:server
* Create React Project:
    yarn create react-app frontend --template=typescript
* Para executar o frontend:
    yarn start

## CRUD com Node.JS, Express, TypeORM e PostgreSQL
Pasta: crud-typeorm-nodejs

Link: https://www.youtube.com/watch?v=9AO2hZJsHrs

Sobre: Crud usando TypeORM, Node, Express e PostgresSQL
Comandos:
    npm init -y
    yarn add typescript ts-node-dev express @types/express
    yarn tsc --init
    npm install typeorm reflect-metadata pg
    npm run typeorm migration:create -n src/migrations/name
    npm run typeorm migration:up


## Fundamentos do GraphQL na prática (Node.js + React) | Decode #019
Pasta: fundamentos-graphql

Link: https://www.youtube.com/watch?v=6SZOPKs9SUg

Sobre:

- Vantagens: (Quais problemas resolve?)

* Overfetching: buscar informações demais, a mais do que eu preciso
    http://localhost:3000/users
    (DB: usuarios + endereços)
* Underfetching: buscar informações a menos do que eu preciso, tendo que fazer requisições extras
    http://localhost:3000/users
    (DB: usuarios)
    http://localhost:3000/address
    (DB: endereços p/ cada usuario)

Como resolve? O Front fala o que ele precisa numa única rota...
    http://localhost:3000/graphql
    ```gql
        query {
            users {
                id
                name
                github
                address {
                    city
                }
            }
        }
    ```

- Dificuldades:
* Trabalhar com cache
* Tratativa de Erros
