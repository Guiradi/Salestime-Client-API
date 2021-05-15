"use strict";

const axios = require("./AxiosInstance");
const { api_key } = require("./variables");

class SalestimeAuthentication {
  constructor() {
    this.accessToken = null;
  }

  async getAccessToken() {
    try {
      const {
        data: { token = null },
      } = await axios.post("/auth", {
        api_key,
      });

      console.log(token);
      this.accessToken = token;

      return token;
    } catch (error) {
      throw error;
    }
  }

  async getUser() {
    try {
      const { data: user } = await axios.get("/auth", {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      });
      console.log(user);
    } catch (error) {
      throw error;
    }
  }

  async revokeToken() {
    try {
      const { data: deleted } = await axios.delete("/auth", {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      });

      console.log(deleted);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SalestimeAuthentication;
