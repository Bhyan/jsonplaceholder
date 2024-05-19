# Jsonplaceholder API Teste

Desafio técnico para vaga de QA.

O desafio consistia na clicar no elementos web do [site](https://jsonplaceholder.typicode.com/) no endpoint [/users](https://jsonplaceholder.typicode.com/users) utilizando qualquer ferramenta de automação.

# Ferramenta utilizada
- [Cypress](https://www.cypress.io/)

## Requisitos
- [Node](https://nodejs.org) >= v18.16.0
- [Git](https://git-scm.com/)

## Instalação
```
$ git clone git@github.com:Bhyan/jsonplaceholder.git
$ cd jsonplaceholder/
$ npm install
```

## Execução

### Headless
```
$ npx cypress run
```

### Visual
```
$ npx cypress open
```

- Ao abrir a janela do Cypress clique na opção E2E Testing;
- Selecione o navegador e clique no botão Start E2E Testing in <nome_do_navegador>;
- Ao abrir o navegador, clique em um dos arquivos delete.cy.js, get.cy.js, post.cy.js ou put.cy.js;

## Verbos testados
- [x] POST
- [x] PUT
- [x] GET
- [x] DELETE