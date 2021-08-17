const { admin, db } = require("./admin");

const verifyToken = (request, response, next) => {
  let idToken;
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = request.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return response.status(403).json({ error: "Unauthorized" });
  }
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      request.user = decodedToken;
      return db
        .collection("users")
        .where("userId", "==", request.user.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      request.user.username = data.docs[0].data().username;
      request.user.level = data.docs[0].data().level;
      request.user.imageUrl = data.docs[0].data().imageUrl;
      return next();
    })
    .catch((err) => {
      console.error("Error while verifying token", err);
      return response.status(403).json(err);
    });
};

const isAdmin = (request, response, next) => {
  // check that a user has level===2
  db.doc(`/users/${request.user.username}`)
    .get()
    .then((doc) => {
      if (doc.exists && doc.data().level === 1) {
        return response.json({
          error: "Must be admin to access this resource",
        });
      } else {
        return next();
      }
    })
    .catch((error) => {
      console.error(error);

      return response.status(500).json({ erorr: error.code });
    });
};

module.exports = { verifyToken, isAdmin };
