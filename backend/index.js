const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;
const { v4 } = require("uuid");
const fs = require("fs");

mongoose.connect("mongodb://localhost:27017/ecom");

const dataSchema = new mongoose.Schema({
  data: [{ type: Object }],
});

const Data = mongoose.model("Data", dataSchema);

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/api/products/bulk", async (req, res) => {
  try {
    const jsonData = await Data.findOne();

    res.json(jsonData.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

function addData() {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    data = JSON.parse(data);
    const obj = new Data();
    data.forEach((data) => {
      // price
      const price = Math.floor(Math.random() * 50) + 10;
      data.price = price.toString() + ".99";
      obj.data.push(data);
    });
    data.save();
  });
}

addData();

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Server running on port", port);
});
