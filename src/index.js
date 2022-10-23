// Criando uma constante com a instância do express
const express = require("express");

// Instanciando o express
const app = express();

// Criando uma rota de Get para a rota raiz "/"
app.get("/", (req, res) => {
  // Retorno do Status da Requisição Http
  res.status(200);

  // Retorno da rota
  return res.json({
    message: "Api Online",
  });
});

// Criando uma rota de Get para a rota "/json"
app.get("/status", (req, res) => {
  // Retorno do Status da Requisição Http
  res.status(200);

  // Retorno da rota
  return res.json({
    message: "Api Online",
  });
});

app.get("/account", (req, res) => {
  // Retorno do Status da Requisição Http
  res.status(200);
});

app.post("/account", (req, res) => {
  // Retorno do Status da Requisição Http
  res.status(200);
});

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);
