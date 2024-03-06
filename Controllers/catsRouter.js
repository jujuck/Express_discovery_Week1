const express = require("express");

const router = express.Router();

const cats = [
  {
    name: "toto",
    race: "turke",
    age: 1,
  },
  {
    name: "titi",
    race: "francais",
    age: 2,
  },
];

// / GET
router.get("/", (request, response) => {
  console.log("Hello Cats");
  response.status(200).json(cats);
});

module.exports = router;

/** */
