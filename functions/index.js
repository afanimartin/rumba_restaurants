const functions = require("firebase-functions");

const app = require("express")();

const { getAllRestaurants } = require("./api/restaurants");

app.get("/restaurants", getAllRestaurants);

exports.api = functions.https.onRequest(app);
