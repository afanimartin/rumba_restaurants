const functions = require("firebase-functions");

const app = require("express")();

const { login, signup, uploadProfilePhoto } = require("./api/users");
const auth = require("./util/auth");
const { getAllRestaurants } = require("./api/restaurants");

app.post("/login", login);
app.post("/signup", signup);
app.post("/user/image", auth, uploadProfilePhoto);
app.get("/restaurants", getAllRestaurants);

exports.api = functions.https.onRequest(app);
