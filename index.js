const express = require("express");
const cors = require("cors");

require("dotenv").config();

const client = require("./database/client");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const peoplesRouter = require("./Controllers/peoplesRouter");
const catsRouter = require("./Controllers/catsRouter");

// GET, POST, PUT, DELETE

app.use(express.json());
app.get("/", (request, response) => {
  console.log("Hello World");
  response.send("Hello World");
});

app.use("/peoples", peoplesRouter);
app.use("/cats", catsRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `Example app listening on port http://localhost:${process.env.PORT}`
  );
});
