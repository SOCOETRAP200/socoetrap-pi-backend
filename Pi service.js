const axios = require("axios");

const PI_API = "https://api.minepi.com/v2";

const headers = () => ({
    Authorization: `Key ${process.env.PI_API_KEY}`
});

// =======================================
// Obtenir les informations d'un paiement
// =======================================
async function getPayment(paymentId) {

    const response = await axios.get(
        `${PI_API}/payments/${paymentId}`,
        {
            headers: headers()
        }
    );

    return response.data;

}

// =======================================
// Approuver un paiement
// =======================================
async function approvePayment(paymentId) {

    const response = await axios.post(
        `${PI_API}/payments/${paymentId}/approve`,
        {},
        {
            headers: headers()
        }
    );

    return response.data;

}

// =======================================
// Finaliser un paiement
// =======================================
async function completePayment(paymentId, txid) {

    const response = await axios.post(
        `${PI_API}/payments/${paymentId}/complete`,
        {
            txid
        },
        {
            headers: headers()
        }
    );

    return response.data;

}

module.exports = {

    getPayment,
    approvePayment,
    completePayment

};
