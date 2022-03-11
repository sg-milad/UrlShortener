const shorturl = require("../model/schema");
const router = require("../routes/shorturl");
exports.home = async (req, res) => {
  const shorturls = await shorturl.find();
  res.status(200).json({ shorturls });
  // res.render("index", { title: "titel", shorturls });
};
exports.creatshorturl = async (req, res) => {
  try {
    const url = Object.keys(req.body)[0];
    const obj = JSON.parse(url);
    const URL = obj.URL;
    await shorturl.create({ URL: URL });
  } catch (e) {
    console.log(e);
  }
  res.redirect("/");
};

exports.geturl = async (req, res) => {
  const shortUrl = await shorturl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);
  console.log(req.params.shortUrl);
  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.URL);
};
