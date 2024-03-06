const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const client = new sqlite3.Database("./db.db");
const data = fs.readFileSync("./database/schema.sql").toString();

client.serialize(() => {
  client.exec(data, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.info("Tout s'est bien passé, la BD est prête");
  });
});

module.exports = client;
