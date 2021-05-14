"use strict";

const axios = require("axios");

class SalestimeOpportunities {
  constructor(token) {
    this.axios = axios.create({
      baseURL: "https://api.supercrm.ezdevs.com.br",
      timeout: 5000,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
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

  async createOpportunities() {
    try {
      const { data: response } = await this.axios.post("/opportunities", {
        data: [
          {
            titulo_oportunidade: "Oportunidade 6",
            nome_contato: "Tray Men",
            cargo_contato: "professor",
            situacao_contato: "Frio",
            // email_contato: "",
            // telefone_contato: "",
            // proprietario_contato: "Felipe Traina",
            // visibilidade_contato: "Toda empresa",
            // nome_organizacao: "Tray",
            // endereco_organizacao: "",
            data_fechamento_oportunidade: "20/05/2021",
            // valor_oportunidade: 340,
            // moeda_oportunidade: "BRL - Brazilian Real",
            funil_oportunidade: "Prospecção",
            etapa_funil_oportunidade: "Qualificação",
            // situacao_oportunidade: "Aberta",
            // proprietario_oportunidade: "Felipe Traina",
            // visibilidade_oportunidade: "Toda empresa",
            // "1ace6603-ff3b-4e22-bf1f-0f27c55b84d3": "",
            // "9560293e-b7ab-4786-897d-f0130818a53d": "Venda Ativa",
            // "6bedbf65-aa44-480b-a5f8-37d16ba1dbe4": "",
            // "7b1c2aaa-5965-47f3-9572-0c7e30ccd14c": "",
            // "88025ddd-27c7-4893-9a7c-124210915f8e": "",
          },
          {
            titulo_oportunidade: "Oportunidade 7",
            nome_contato: "Welitu Santana",
            // cargo_contato: "",
            // situacao_contato: "Frio",
            // email_contato: "",
            // telefone_contato: "",
            // proprietario_contato: "Felipe Traina",
            // visibilidade_contato: "Toda empresa",
            nome_organizacao: "AryBotas",
            // endereco_organizacao: "",
            // data_fechamento_oportunidade: "20/05/2020",
            // valor_oportunidade: 2500,
            // moeda_oportunidade: "BRL - Brazilian Real",
            funil_oportunidade: "Prospecção",
            etapa_funil_oportunidade: "Apresentação",
            // situacao_oportunidade: "Aberta",
            // proprietario_oportunidade: "Felipe Traina",
            // visibilidade_oportunidade: "Toda empresa",
            // "1ace6603-ff3b-4e22-bf1f-0f27c55b84d3": "",
            // "9560293e-b7ab-4786-897d-f0130818a53d": "Venda Ativa",
            // "6bedbf65-aa44-480b-a5f8-37d16ba1dbe4": "",
            // "7b1c2aaa-5965-47f3-9572-0c7e30ccd14c": "",
            // "88025ddd-27c7-4893-9a7c-124210915f8e": "",
          },
        ],
      });

      console.log(response);
    } catch (error) {
      throw error;
    }
  }

  async updateOpportunitySituation() {
    try {
      const { data: opportunity } = await this.axios.post(
        "/opportunity/situation",
        {
          data: {
            id_oportunidade: 16317,
            situacao_oportunidade: "Ganha",
            motivo: "Relacionamento",
          },
        }
      );
      console.log(opportunity);
    } catch (error) {
      throw error;
    }
  }

  async updateOpportunity() {
    try {
      const { data: opportunity } = await this.axios.put("/opportunity", {
        id_oportunidade: 16445,
        titulo_oportunidade: "Oportunidade 6",
        nome_organizacao: "AryBotas",
        nome_contato: "Tray Men",
        funil_oportunidade: "Prospecção",
        etapa_funil_oportunidade: "Qualificação",
      });
      console.log(opportunity);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SalestimeOpportunities;
