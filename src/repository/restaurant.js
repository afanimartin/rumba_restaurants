import db from "./database_config";

const add = (restaurant) => {
  const newRestaurant = {
    id: restaurant.name,
    name: restaurant.name,
    location: restaurant.location,
    city: restaurant.city,
    menu: restaurant.menu,
  };
  try {
    db.collection("restaurants").add(newRestaurant);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  const restaurants = await db.collection("restaurants").get();

  if (!restaurants.exists) {
    console.log("restaurants not found!");
  } else {
    return restaurants.data;
  }
};

export default getAll;
