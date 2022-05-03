
## Install:
```
npm install nodemon@2.0.15 -D  // Dev dependence
npm install express@4.17.3
```

## Executar:
```
npm run dev
```

## package.json documentation:
```
{
  "name": "alura-node", // é onde você define o nome pelo qual seu módulo será chamado;
  "version": "1.0.0",
  "description": "", // define o que será este módulo. Ideal que seja uma descrição curta e clara sobre o objetivo principal;
  "main": "server.js", // define o ponto de entrada da aplicação;
  "scripts": { // essa sessão tem alguns scripts pré-definidos
    "dev": "nodemon server.js", // auto refresh in case of code update
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [], //  é um array de palavras-chave sobre o projeto;
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.3"
  } //  define a lista de pacotes necessários para executar seu projeto num ambiente de produção;
  "devDependencies": {
    "nodemon": "^2.0.15",
    "jest": "^27.2.1"
  }, // define a lista de pacotes necessários para executar o projeto num ambiente de desenvolvimento e testes.
  "type": "module" // To load an ES module
}
```