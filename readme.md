
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
- [ ] Deve ser possível realizar um depósito
- [ ] Deve ser possível realizar um saque
- [ ] Deve ser possível buscar o extrato bancário do cliente por data
- [ ] Deve ser possível atualizar dados da conta do cliente
- [ ] Deve ser possível obter dados da conta do cliente
- [ ] Deve ser possível deletar uma conta

### Regras de Negócio

Aqui estão descritas todas as regras de negócio que serão implementadas na aplicação.

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [ ] Não deve ser possível fazer depósito em uma conta não existente
- [ ] Não deve ser possível buscar extrato em uma conta não existente
- [ ] Não deve ser possível fazer saque em uma conta não existente
- [ ] Não deve ser possível excluir uma conta não existente
- [ ] Não deve ser possível fazer saque quando o saldo for insuficiente

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
| POST | [http://{baseUrl}:3333/accounts](http://{baseUrl}:3333/accounts) | Cria uma nova conta |

Validações da rota

- Não deve ser possível criar uma conta com um CFP já existente

### statements

| Método | Rota | Descrição |
| ------ | ------ | ------ |
| GET | [http://{baseUrl}:3333/statements/:id](http://{baseUrl}:3333/statements/:id) | Retorna o extrato bancário do cliente |

Validações da rota

- Não deve ser possível buscar o extrato de uma conta não existente
