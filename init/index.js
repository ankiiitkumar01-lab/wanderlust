const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust";


main()
  .then(() => {
    console.log("connected to DB");
    return initDB(); // ✅ CALL AFTER CONNECTION
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(Mongo_url);
}

const initDB = async () => {

  await Listing.deleteMany({});
  initData.data=initData.data.map((obj)=>({...obj,owner:"69d62b5baaf7705b18a5fa7f"}));
  await Listing.insertMany(initData.data);
  console.log("data is initialized");
};

