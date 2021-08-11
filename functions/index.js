const functions = require("firebase-functions");

const app = require("express")();

const { login } = require("./api/users");
const { getAllRestaurants } = require("./api/restaurants");

app.post("/login", login);
app.get("/restaurants", getAllRestaurants);

exports.api = functions.https.onRequest(app);
