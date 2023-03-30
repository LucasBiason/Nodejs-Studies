# NodeStudies

Mini Projetos de Cursos, Livros e artigos de Node.js.

Aqui tenho projetos desde Node.js puro focado em padrões, tecnicas avançadas ou simples


## COMEÇANDO COM NODE.JS EM 2022
Pasta: nodejs-iniciando

Link: https://youtu.be/fm4_EuCsQwg

Sobre: Projeto inicial de cadastro simples com arquivo

## Node.js: Iniciando da teoria à prática | Masterclass #11
Pasta: nodejs-masterclass

Link: https://www.youtube.com/watch?v=DiXbJL3iWVs

Sobre: Armazenador de URLs para testar chamadas de API

## Node.js: API Rest com Express e MongoDB
Pasta: nodejs-api-rest-alura

Link: https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb

Sobre: O objetivo vai ser construir uma API para Livraria.

## Ambiente de desenvolvimento NodeJS com Docker e Docker Compose
Pasta: nodejs-docker

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
Pasta: nodejs-crud-typeorm

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
Pasta: graphql-fundamentos

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


## CRUD com Node.JS, Express, TypeORM e PostgreSQL
Pasta: nodejs-crud-typeorm

Link: https://www.youtube.com/watch?v=9AO2hZJsHrs

Sobre: Crud usando TypeORM, Node, Express e PostgresSQL


## Setup para apps Node.js (TypeScript, ESLint, Jest, Babel) | Code/Drops #33
Pasta: nodejs-setup

Link: https://www.youtube.com/watch?v=rCeGfFk-uCk

Sobre: Projeto base setup para aplicação node.js com typescript
```
>>> yarn add typescript@3.9.5
>>> yarn tsc --init
>>> yarn add express @types/express
>>> yarn add ts-node-dev
>>> yarn add tsconfig-paths
>>> yarn eslint --init

yarn run v1.22.18
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · none
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · google
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-google@latest
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-google@latest eslint@>=5.16.0 @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · yarn

>>> yarn add jest -D
>>> yarn jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … no

>>> yarn add @types/jest -D
```


## React Hooks com TypeScript | Masterclass #04
Pasta: react-hooks-typescript

Link: https://www.youtube.com/watch?v=GOB-lawExXc

Sobre: Explicação e exemplos dos hooks

```
>>> yarn create react-app hooks --template=typescript
>>> cd hooks
>>> yarn start
```



## GraphQL aplicado no Node.js | Diego Fernandes

Pasta: nodejs-graphql-aplicado

Link: https://www.youtube.com/watch?v=oD8GqurXZ-0

Sobre: Explicações e Exemplos

```

POST /graphql

Query:
{
    query users{
        users({ per_page: 20, page: 2, filter { nome: { "starts_with": "Diego" } }}){
            id
            nome
            groups {
                id
                title
            }
        }
    }
}

>>> yarn add graphql-yoga

query {
    users {
        id
        name
        email
    }
}
query {
    user(id: 1){
        id
        name
        email
    }
}



```