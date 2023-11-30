const axios = require("axios");

const searchBets = async (req, res) => {
  const { search } = req.body;
  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/bets",
    params: { search: search },
    headers: {
      "X-RapidAPI-Key": "f817d9a96cmsh10a665e5b54fdcbp113e5fjsnba6539fee5e0",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const searchBookmakers = async (req, res) => {
  const { search } = req.body;
  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/bookmakers",
    params: { search: search },
    headers: {
      "X-RapidAPI-Key": "f817d9a96cmsh10a665e5b54fdcbp113e5fjsnba6539fee5e0",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const searchCountries = async (req, res) => {
  const { search } = req.body;
  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/countries",
    params: { search: search },
    headers: {
      "X-RapidAPI-Key": "f817d9a96cmsh10a665e5b54fdcbp113e5fjsnba6539fee5e0",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const searchLeagues = async (req, res) => {
  const { search } = req.body;
  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/leagues",
    params: { search: search },
    headers: {
      "X-RapidAPI-Key": "f817d9a96cmsh10a665e5b54fdcbp113e5fjsnba6539fee5e0",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const searchTeams = async (req, res) => {
  const { team } = req.query;
  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/teams",
    params: { search: team },
    headers: {
      "X-RapidAPI-Key": "f817d9a96cmsh10a665e5b54fdcbp113e5fjsnba6539fee5e0",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

module.exports = {
  searchBets,
  searchBookmakers,
  searchCountries,
  searchLeagues,
  searchTeams,
};
