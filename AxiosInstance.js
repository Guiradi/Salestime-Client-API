const axios = require("axios");

module.exports = axios.create({
  baseURL: "https://api.supercrm.ezdevs.com.br",
  timeout: 5000,
});
