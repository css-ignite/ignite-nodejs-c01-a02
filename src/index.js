// Criando uma constante com a instância do express
const express = require("express");

// Instanciando o express
const app = express();

// Criando uma rota de Get para a rota raiz "/"
app.get("/", (req, res) => {
  // Retorno do Status da Requisição Http
  res.status(200);

  return res.send("Api Online")._construct;
});

// Criando uma rota de Get para a rota "/json"
app.get("/status", (req, res) => {
  // Retorno do Status da Requisição Http
  res.status(200);

  return res.json({
    message: "Api Online",
  });
});

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);
