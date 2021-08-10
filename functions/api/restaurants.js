// const db = require("../util/admin"); will throw db.collection not a function error
const { db } = require("../util/admin");

exports.getAllRestaurants = (request, response) => {
  db.collection("restaurants")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let restaurants = [];
      data.forEach((doc) => {
        restaurants.push({
          id: doc.id,
          name: doc.data().name,
          location: doc.data().location,
          city: doc.data().city,
          menu: doc.data().menu,
          createdAt: doc.data().createdAt
        });
      });

      return response.json(restaurants);
    })
    .catch((error) => {
      console.log(error);

      return response.status(500).json({ error: error.code });
    });
};
