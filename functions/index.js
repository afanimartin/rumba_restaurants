const functions = require("firebase-functions");

const app = require("express")();

const { login, signup, uploadProfilePhoto } = require("./api/users");
const { getAllRestaurants } = require("./api/restaurants");

app.post("/login", login);
app.post("/signup", signup);
app.post("/user/image", uploadProfilePhoto);
app.get("/restaurants", getAllRestaurants);

exports.api = functions.https.onRequest(app);
