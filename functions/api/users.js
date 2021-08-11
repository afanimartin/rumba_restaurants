const { response } = require("express");
const { admin, db } = require("../util/admin");
const { firebase } = require("../util/config");
const { validateLoginData } = require("../util/validators");

exports.login = (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password,
  };

  const { valid, errors } = validateLoginData(user);
  if (!valid) return response.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return response.json({ token });
    })
    .catch((error) => {
      console.log(error);

      return response
        .status(403)
        .json({ general: "Invalid email/password, please try again" });
    });
};

exports.signup = (request, response) => {
  
}
