const mongoose = require("mongoose");
// try {
//   mongoose.connect("mongodb://localhost:27017/urlShortener", () =>
//     console.log("connected")
//   );
// } catch (e) {
//   console.log(e);
// }
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
