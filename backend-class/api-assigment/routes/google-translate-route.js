const {
  detectLanguage,
  getLanguages,
  translate,
} = require("../apis/google-translate");

router = require("express").Router();

router.get("/languages", getLanguages);
router.post("/detect", detectLanguage);
router.post("/translate", translate);

module.exports = router;
