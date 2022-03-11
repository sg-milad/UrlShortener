const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://sg_miladd:13811381@cluster0.8o7o0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
      )
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

connect();
