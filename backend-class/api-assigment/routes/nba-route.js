const {
  searchBets,
  searchBookmakers,
  searchCountries,
  searchLeagues,
  searchTeams,
} = require("../apis/nba");

router = require("express").Router();

router.get("/searchBets", searchBets);
router.get("/searchBookmakers", searchBookmakers);
router.get("/searchCountries", searchCountries);
router.get("/searchLeagues", searchLeagues);
router.get("/searchTeams", searchTeams);

module.exports = router;
