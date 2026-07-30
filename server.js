const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ===============================
// Accueil
// ===============================
app.get("/", (req, res) => {
  res.json({
    success: true,
    app: "SOCOETRAP",
    network: "Pi Testnet",
    status: "Online",
    version: "1.0.0"
  });
});

// ===============================
// Health Check
// ===============================
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

// ===============================
// Test Backend
// ===============================
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "SOCOETRAP Pi Backend fonctionne correctement"
  });
});

// ===============================
// Paiements Pi
// (À compléter avec les appels
// officiels de l'API Pi)
// ===============================

// Créer un paiement
app.post("/payments/create", async (req, res) => {
  console.log("POST /payments/create");
  console.log(req.body);

  res.json({
    success: true,
    message: "Route create prête."
  });
});

// Approuver un paiement
app.post("/payments/approve", async (req, res) => {
  console.log("POST /payments/approve");
  console.log(req.body);

  res.json({
    success: true,
    message: "Route approve prête."
  });
});

// Finaliser un paiement
app.post("/payments/complete", async (req, res) => {
  console.log("POST /payments/complete");
  console.log(req.body);

  res.json({
    success: true,
    message: "Route complete prête."
  });
});

// Annuler un paiement
app.post("/payments/cancel", async (req, res) => {
  console.log("POST /payments/cancel");
  console.log(req.body);

  res.json({
    success: true,
    message: "Route cancel prête."
  });
});

// ===============================
// Démarrage du serveur
// ===============================
app.listen(PORT, () => {
  console.log(`🚀 SOCOETRAP Backend démarré sur le port ${PORT}`);
});
