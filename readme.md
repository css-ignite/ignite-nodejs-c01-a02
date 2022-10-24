
# Ignite Trilha NodeJS (Primeiro Projeto com NodeJS)

Este projeto tem por finalidade a criação de uma API fictícia para controle de transações financeiras.

## Bibliotevas Utilizadas

### UUID

- [https://www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid)

Instalação

```bash
npm install uuid
```

## Requisitos do Projeto

### Requisitos

Auui estão descritas todas as funcionalidades que serão implementadas na aplicação.

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar o extrato bancário do cliente
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [x] Deve ser possível buscar o extrato bancário do cliente por data
- [x] Deve ser possível atualizar dados da conta do cliente
- [x] Deve ser possível obter dados da conta do cliente
- [X] Deve ser possível deletar uma conta
- [x] Deve retornar o balance

### Regras de Negócio

Aqui estão descritas todas as regras de negócio que serão implementadas na aplicação.

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [x] Não deve ser possível buscar extrato em uma conta não existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [x] Não deve ser possível fazer saque em uma conta não existente
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente
- [X] Não deve ser possível excluir uma conta não existente
- [x] Não deve ser possível buscar balance de uma conta não existente

## Métodos da API

Aqui estão descritas todas as rotas implementadas na API.

### status

| Método | Rota | Descrição |
| ------ | ------ | ------ |
| GET | [http://{baseUrl}:3333/](http://{baseUrl}:3333/) | Retorna o Status de Funcionamento da API |
| GET | [http://{baseUrl}:3333/status](http://{baseUrl}:3333/status) | Retorna o Status de Funcionamento da API |

### accounts

| Método | Rota | Descrição |
| ------ | ------ | ------ |
| GET | [http://{baseUrl}:3333/accounts](http://{baseUrl}:3333/accounts) | Retorna todas as contas |
| GET | [http://{baseUrl}:3333/accounts/{cpf}](http://{baseUrl}:3333/accounts/{cpf}) | Retorna uma conta específica pelo cpf |
| POST | [http://{baseUrl}:3333/accounts](http://{baseUrl}:3333/accounts) | Cria uma nova conta nova |
| PUT | [http://{baseUrl}:3333/accounts](http://{baseUrl}:3333/accounts) | Atualiza uma conta específica pelo cpf |
| PATCH | [http://{baseUrl}:3333/accounts](http://{baseUrl}:3333/accounts) | Atualiza uma conta específica pelo cpf |
| DELETE | [http://{baseUrl}:3333/accounts](http://{baseUrl}:3333/accounts) | Deleta uma conta específica pelo cpf |

Validações da rota

- Não deve ser possível criar uma conta com um CFP já existente

### statements

| Método | Rota | Descrição |
| ------ | ------ | ------ |
| GET | [http://{baseUrl}:3333/statements](http://{baseUrl}:3333/statements) | Retorna o extrato bancário do cliente |
| GET | [http://{baseUrl}:3333/statements/date](http://{baseUrl}:3333/statements/date) | Retorna o extrato bancário do cliente por data |

Validações da rota

- Não deve ser possível buscar o extrato de uma conta não existente

### deposit

| Método | Rota | Descrição |
| ------ | ------ | ------ |
| POST | [http://{baseUrl}:3333/deposit](http://{baseUrl}:3333/deposit) | Realiza um depósito para uma conta específica pelo cpf |

Validações da rota

- Não deve ser possível fazer depósito para uma conta não existente

### withdraw

| Método | Rota | Descrição |
| ------ | ------ | ------ |
| POST | [http://{baseUrl}:3333/withdraw](http://{baseUrl}:3333/withdraw) | Realiza um saque para uma conta específica pelo cpf |

Validações da rota

- Não deve ser possível fazer saques para uma conta não existente
- Não deve ser possível fazer saques para uma conta sem saldo suficiente

### balance

| Método | Rota | Descrição |
| ------ | ------ | ------ |
| GET | [http://{baseUrl}:3333/balance](http://{baseUrl}:3333/statements) | Retorna o saldo para uma conta específica pelo cpf |

Validações da rota

- Não deve ser possível buscar o saldo de uma conta não existente