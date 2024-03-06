const express = require("express");

const router = express.Router();
const client = require("../database/client");

// / GET
router.get("/", (request, response) => {
  client.all("SELECT * FROM peoples", (err, peoples) => {
    response.status(200).json(peoples);
  });
});

router.post("/", (request, response) => {
  console.log("POST people");
  console.log(request.body);
  const query = client.prepare(
    "INSERT INTO peoples (firstname, lastname, age, isGraduate, adress_street, adress_zipcode, adress_city, hobbies_0, hobbies_1, hobbies_2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  );
  query.run([
    request.body.firstname,
    request.body.lastname,
    request.body.age,
    request.body.isGraduate,
    request.body.adress_street,
    request.body.adress_zipcode,
    request.body.adress_city,
    request.body.hobbies_0,
    request.body.hobbies_1,
    request.body.hobbies_2,
  ]);
  response.sendStatus(201);
});

module.exports = router;

/** */
