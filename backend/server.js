require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

async function main() {
  await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://ezgi:206123Es.@nodeserver.xdrun.mongodb.net/NodeServer?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(cors());
  app.use(express.json());

  app.use((req, res, next) => {
    next();
  });

  app.use("/", require("./routes"));

  const listener = app.listen(process.env.port || 8000, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
}

main();
