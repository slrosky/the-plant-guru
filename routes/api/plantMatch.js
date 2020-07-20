const express = require("express");
const router = express.Router();
const plantMatchCtrl = require("../../controllers/plantMatch");

/*---------- Public Routes ----------*/
router.post("/", plantMatchCtrl.create);
router.get("/plantMatch", plantMatchCtrl.plantMatchIndex);
router.get("/plantMatch/:id", plantMatchCtrl.show);
router.delete("/plantMatch/:id", plantMatchCtrl.deleteOne);
router.put("/plantMatch/:id", plantMatchCtrl.update);

/*---------- Protected Routes ----------*/

module.exports = router;
