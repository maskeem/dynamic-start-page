import express from "express";

const server = express();
const PORT = process.env.PORT || 3000;

server.get("/", (_req, res) => {
  console.log("Requête reçue sur la route /");
  res.send("Hello, Dynamic Start Page backend");
});

server.listen(PORT, () => {
  console.log(`Serveur disponible sur http://localhost:${PORT}`);
});
