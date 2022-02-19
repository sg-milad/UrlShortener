const { Router } = require("express");
const router = new Router();
const controller = require("../controller/shorturl");
router.get("/", controller.home);
router.post("/shortUrls", controller.creatshorturl);
router.get("/:shortUrl", controller.geturl);

module.exports = router;
