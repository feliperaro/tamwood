const axios = require("axios");

// Detects the language of text within a request.
const detectLanguage = async (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== "string" || text.length < 1) {
    return res.json({ error: "string text is required" });
  }

  const encodedParams = new URLSearchParams();
  encodedParams.set("q", text);

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "f817d9a96cmsh10a665e5b54fdcbp113e5fjsnba6539fee5e0",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: "error" });
  }
};

// Returns a list of supported languages for translation.
const getLanguages = async (_, res) => {
  const options = {
    method: "GET",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "f817d9a96cmsh10a665e5b54fdcbp113e5fjsnba6539fee5e0",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: error.message });
  }
};

// Translates input text, returning translated text
const translate = async (req, res) => {
  const { text, target, source } = req.body;
  if (!text || typeof text !== "string" || text.length < 1) {
    return res.json({ error: "string text is required" });
  }
  if (!target || typeof target !== "string" || target.length < 1) {
    return res.json({ error: "string target is required" });
  }
  if (!source || typeof source !== "string" || source.length < 1) {
    return res.json({ error: "string source is required" });
  }

  const encodedParams = new URLSearchParams();
  encodedParams.set("q", text);
  encodedParams.set("target", target);
  encodedParams.set("source", source);

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "f817d9a96cmsh10a665e5b54fdcbp113e5fjsnba6539fee5e0",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

module.exports = {
  detectLanguage,
  getLanguages,
  translate,
};
