const { v4: uuidv4 } = require("uuid");
const express = require("express");

const app = express();
const customers = [];

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Api Online",
  });
});

app.get("/status", (req, res) => {
  return res.status(200).json({
    message: "Api Online",
  });
});

app.get("/account", (req, res) => {
  return res.status(200).json(customers);
});

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return res.status(400).json({
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

  return res.status(201).json({
    message: "Account created",
    data: {
      id,
      cpf,
      name,
      statement: [],
    },
  });
});

var server = app.listen(3333, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

app.get("/account/:cpf", (req, res) => {
  const { cpf } = req.params;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return res.status(404).json({
      error: "Customer not found",
    });
  }

  return res.status(200).json(customer);
});

app.get("/statement/:cpf", (req, res) => {
  const { cpf } = req.params;

  const customer = customers.find(customer => customer.cpf === cpf);

  if (!customer) {
    return res.status(404).json({
      error: "Customer not found",
    });
  }

  return res.status(200).json(customer.statement);
});