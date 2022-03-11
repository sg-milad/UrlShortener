const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const connect = async () => {
  try {
    await mongoose.connect(uri).catch((error) => console.log(error));
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

connect();
