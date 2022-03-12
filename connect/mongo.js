const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const URI =
  "mongodb+srv://sg_milad:13811381@cluster0.8o7o0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri).catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

connect();
