const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost/urlShortener")
      .catch((error) => console.log(error));
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

connect();
