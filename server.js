const {
    getPayment,
    approvePayment,
    completePayment
} = require("./piService");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// =======================================
// Informations de l'application
// =======================================
app.get("/", (req, res) => {
    res.json({
        success: true,
        app: "SOCOETRAP",
        network: "Pi Testnet",
        version: "1.0.0",
        status: "online"
    });
});

// =======================================
// Health Check
// =======================================
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// =======================================
// Test
// =======================================
app.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "SOCOETRAP Backend fonctionne correctement"
    });
});

// =======================================
// Créer un paiement
// Le paiement est créé côté SDK Pi.
// Cette route prépare simplement les données.
// =======================================
app.post("/payments/create", async (req, res) => {

    try {

        const { amount, memo, metadata } = req.body;

        if (!amount || !memo) {

            return res.status(400).json({
                success: false,
                message: "amount et memo sont obligatoires."
            });

        }

        return res.json({
            success: true,
            payment: {
                amount,
                memo,
                metadata: metadata || {}
            }
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

// =======================================
// Approbation
// (sera connecté à l'API Pi)
// =======================================
app.post("/payments/approve", async (req, res) => {

    return res.json({
        success: true,
        message: "Route approve prête."
    });

});

// =======================================
// Finalisation
// (sera connecté à l'API Pi)
// =======================================
app.post("/payments/complete", async (req, res) => {

    return res.json({
        success: true,
        message: "Route complete prête."
    });

});

// =======================================
// Annulation
// =======================================
app.post("/payments/cancel", async (req, res) => {

    return res.json({
        success: true,
        message: "Paiement annulé."
    });

});

// =======================================
// Lancement
// =======================================
app.listen(PORT, () => {

    console.log("==================================");
    console.log("SOCOETRAP Backend");
    console.log("Port :", PORT);
    console.log("==================================");

});
