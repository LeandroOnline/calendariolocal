const router = require("express").Router();

router.route("/getevents").get(require("./controllers/getevents.js"));
router.route("/addevent").post(require("./controllers/addevent.js"));
router.route("/deleteall").delete(require("./controllers/deleteall.js"));

module.exports = router;