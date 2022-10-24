const { v4: uuidv4 } = require("uuid");
const express = require("express");

const app = express();
const customers = [];

app.use(express.json());

function middlewareVerifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

  request.customer = customer;

  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === "credit") {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);

  return balance;
}

app.get("/", (request, response) => {
  return response.status(200).json({
    message: "Api Online",
  });
});

app.get("/status", (request, response) => {
  return response.status(200).json({
    message: "Api Online",
  });
});

app.get("/account", (request, response) => {
  return response.status(200).json(customers);
});

app.get("/account/:cpf", (request, response) => {
  const { cpf } = request.params;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(404).json({
      error: "Customer not found",
    });
  }

  return response.status(200).json(customer);
});

app.get("/account/param/info", (request, response) => {
  const { cpf } = request.query;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(404).json({
      error: "Customer not found",
    });
  }

  return response.status(200).json(customer);
});

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({
      error: "Customer already exists!",
    });
  }

  const id = uuidv4();

  customers.push({
    id,
    cpf,
    name,
    statement: [],
  });

  return response.status(201).json({
    message: "Account created",
    data: {
      id,
      cpf,
      name,
      statement: [],
    },
  });
});

app.put("/account", middlewareVerifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body;
  const { customer } = request;

  customer.name = name;

  return response.status(201).json({
    message: "Account updated",
    data: {
      name,
      statement: [],
    },
  });
});

app.delete(
  "/account",
  middlewareVerifyIfExistsAccountCPF,
  (request, response) => {
    const { customer } = request;

    customers.splice(customer, 1);

    return response.status(200).json({
      message: "Account deleted",
    });
  }
);

var server = app.listen(3333, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

// Se eu informar no app, todas as rotas abaixo vão validar o middleware
//app.use(verifyIfExistsAccountCPF);

app.get(
  "/statement",
  middlewareVerifyIfExistsAccountCPF,
  (request, response) => {
    const { customer } = request;

    return response.status(200).send(customer.statement);
  }
);

app.get(
  "/statement/date",
  middlewareVerifyIfExistsAccountCPF,
  (request, response) => {
    const { customer } = request;
    const { date } = request.query;

    const dateFormat = new Date(date + " 00:00");

    const statement = customer.statement.filter((statement) => {
      const statementDate = statement.created_at;
      const formateDate = new Date(dateFormat);

      console.log(statementDate.toDateString());
      console.log(formateDate.toDateString());

      return statementDate.toDateString() === formateDate.toDateString();
    });

    return response.status(200).json(statement);
  }
);

app.post(
  "/deposit",
  middlewareVerifyIfExistsAccountCPF,
  (request, response) => {
    const { description, amount } = request.body;

    const { customer } = request;

    const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: "credit",
    };

    customer.statement.push(statementOperation);

    return response.status(201).json({
      message: "Deposit created",
      data: {
        description,
        amount,
        created_at: new Date(),
        type: "credit",
      },
    });
  }
);

app.post(
  "/withdraw",
  middlewareVerifyIfExistsAccountCPF,
  (request, response) => {
    const { description, amount } = request.body;
    const { customer } = request;

    const balance = getBalance(customer.statement);

    if (balance < amount) {
      return response.status(400).json({ error: "Insufficient funds!" });
    }

    const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: "debit",
    };

    customer.statement.push(statementOperation);

    return response.status(201).json({
      message: "Withdraw created",
      data: {
        description,
        amount,
        created_at: new Date(),
        type: "debit",
      },
    });
  }
);

app.get("/balance", middlewareVerifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  const balance = getBalance(customer.statement);

  return response.status(200).json({
    message: "Balance",
    data: {
      balance,
    },
  });
});
