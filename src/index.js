const { v4: uuidv4 } = require("uuid");
const express = require("express");

const app = express();

app.use(express.json());

const customers = [];

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

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);
