// const db = require("../util/admin"); will throw db.collection not a function error
const { db } = require("../util/admin");

exports.getAllRestaurants = async (request, response) => {
  try {
    const data = await db
      .collection("restaurants")
      .orderBy("createdAt", "desc")
      .get();

    const restaurants = [];

    data.docs.forEach((doc) => {
      restaurants.push({
        id: doc.id,
        name: doc.data().name,
        location: doc.data().location,
        city: doc.data().city,
        menu: doc.data().menu,
        createdAt: doc.data().createdAt,
      });
    });

    response.json(restaurants);
  } catch (error) {
    console.error(error);
  }
};
