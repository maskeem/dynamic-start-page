import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Requête reçue sur la route /");
  res.send("Hello, Dynamic Start Page backend");
});
