"use strict";

const axios = require("axios");

class SalestimeOpportunities {
  constructor(token) {
    this.axios = axios.create({
      baseURL: "http://localhost:3333",
      timeout: 5000,
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async getManyOpportunities() {
    try {
      const { data: opportunities } = await this.axios.get("/opportunities", {
        params: {
          situation: "ABERTA",
        },
      });

      console.log(opportunities);
    } catch (error) {
      throw error;
    }
  }

  async getOpportunity(id) {
    try {
      const { data: opportunity } = await this.axios.get(
        `/opportunities/${id}`
      );
      console.log(opportunity);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SalestimeOpportunities;
