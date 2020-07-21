const express = require("express");
const router = express.Router();
const plantMatchCtrl = require("../../controllers/plantMatch");

/*---------- Public Routes ----------*/
router.post("/", plantMatchCtrl.create);
router.get("/", plantMatchCtrl.getAllPlantMatches);
router.get("/:id", plantMatchCtrl.show);
router.delete("/:id", plantMatchCtrl.deleteOne);
router.put("/:id", plantMatchCtrl.update);

/*---------- Protected Routes ----------*/

module.exports = router;
