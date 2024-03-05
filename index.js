const express = require("express");

const app = express();
const peoplesRouter = require("./Controllers/peoplesRouter");

// GET, POST, PUT, DELETE

app.get("/", (request, response) => {
  console.log("Hello World");
  response.send("Hello World");
});

app.use("/peoples", peoplesRouter);

app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000`);
});
