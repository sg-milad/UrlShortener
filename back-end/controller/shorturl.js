const shorturl = require("../model/schema");
const router = require("../routes/shorturl");
const fs = require("fs");
exports.home = async (req, res) => {
  const shorturls = await shorturl.find();
  res.status(200).json({ shorturls });
  // res.render("index", { title: "titel", shorturls });
};
exports.creatshorturl = async (req, res) => {
  // const { URL } = req.body;
  // console.log(Object.keys(req.body)[0]);
  // console.log(req.body);
  // await Object.keys(req.body)[0];
  // console.log({Object.keys(req.body)[0]});
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
  // console.log({ short: req.params.shortUrl });
  res.json({ short: req.params.shortUrl });
  // res.redirect(shortUrl.URL);
};
