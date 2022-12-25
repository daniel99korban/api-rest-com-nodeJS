# API REST

## Crud de Usuários
 - GET/users
 - GET/users:uuid
 - POST/users
 - PUT/users:uuid
 - DELETE/users:uuid

## Autenticação
 - POST/token 
 - POST/token/validate 

## Dependencias do projeto  

### `npm install --save-dev typescript`

biblioteca que fará a transpilação d codigo <b>js</b> para <b>ts</b>

### `npm install --save-dev @types/node`
auto complete nas bibliotecas gerais do [*nodeJS*](https://g.co/kgs/H4bmuw)

### `npm install --save express`
biblioteca para criação de rotas da API

### `npm install --save-dev @types/express`
auto complete nas bibliotecas gerais do [*express*](https://g.co/kgs/XAWazj)

### `npm install --save http-status-codes`
Constantes para facilitar leitura de [*http status code*](https://restfulapi.net/http-status-codes/)

### Compilar e startar a aplicação

### `npm run build`
### `npm run start`

### Compilar e startar a aplicação de forma automática

### `npm run dev`

### Ferramenta para teste da API

![postman](https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg)
[*Postman*](https://www.postman.com/)

### Código para simular os dados de **users**(a API sem conexão com o BD)
~~~TypeScript
// teste simulando os dados
const users = [{ id: 1, nome: "João" }, { id: 2, nome: "Maria" }, { id: 3, nome: "José" }];
~~~