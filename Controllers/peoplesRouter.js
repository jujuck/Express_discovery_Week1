const express = require("express");

const router = express.Router();

const peoples = [
  {
    firstname: "Marc",
    lastname: "Philippe",
    age: 42,
    hobbies: ["Foot", "Basket", "Food"],
    isGraduate: false,
    adress: {
      street: "Une rue parmis d'autres",
      zipcode: 12345,
      city: "Paris",
    },
  },
  {
    firstname: "Bob",
    lastname: "Martin",
    age: 35,
    hobbies: ["Guitar", "Books"],
    isGraduate: true,
    adress: {
      street: "Une autre rue parmis d'autres",
      zipcode: 12345,
      city: "Paris BIS",
    },
  },
  {
    firstname: "Pierre",
    lastname: "Michel",
    age: 35,
    hobbies: ["Guitar", "Books"],
    isGraduate: true,
    adress: {
      street: "Une autre rue parmis d'autres",
      zipcode: 12345,
      city: "Paris BIS",
    },
  },
  {
    firstname: "Philippe",
    lastname: "Zinclair",
    age: 35,
    hobbies: ["Guitar", "Books"],
    isGraduate: false,
    adress: {
      street: "Une autre rue parmis d'autres",
      zipcode: 12345,
      city: "Paris BIS",
    },
  },
];

// / GET
router.get("/", (request, response) => {
  console.log("Hello Peoples");
  response.status(200).json(peoples);
});

module.exports = router;

/** */
