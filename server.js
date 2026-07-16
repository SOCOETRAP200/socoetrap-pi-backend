const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "SOCOETRAP Pi Backend fonctionne correctement"
    });
});

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
