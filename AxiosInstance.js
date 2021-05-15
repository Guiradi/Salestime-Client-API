const axios = require("axios");
const { baseURL } = require("./variables");

module.exports = axios.create({
  baseURL,
  timeout: 5000,
});
