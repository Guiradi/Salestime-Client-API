"use strict";

const axios = require("axios");

class SalestimeOrganizations {
  constructor(token) {
    this.axios = axios.create({
      baseURL: "http://localhost:3333",
      timeout: 5000,
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async getManyOrganizations() {
    try {
      const { data } = await this.axios.get("/people");

      console.log(data);
    } catch (error) {
      throw error;
    }
  }

  async getOrganization(id) {
    try {
      const { data: organization } = await this.axios.get(`/people/${id}`);
      console.log(organization);
    } catch (error) {
      throw error;
    }
  }

  async createOrganization() {
    try {
      const { data: organization } = await this.axios.post("/person/update", {
        data: {
          id_contato: 12028,
          nome_contato: "Everton Ribeiro",
          cargo_contato: "",
          situacao_contato: "Contato Futuro",
          email_contato: ["guiradi@hotmail.com"],
          telefone_contato: ["16982136607"],
          proprietario_contato: "Guilherme Ferreira",
          visibilidade_contato: "Toda empresa",
          id_organizacao: 1119,
          nome_organizacao: "Amazon Prime",
          endereco_organizacao: "",
          situacao_organizacao: "Frio",
          proprietario_organizacao: "Felipe Traina",
          visibilidade_organizacao: "Toda empresa",
          observacao_organizacao: "",
          "6bedbf65-aa44-480b-a5f8-37d16ba1dbe4": "",
          "7b1c2aaa-5965-47f3-9572-0c7e30ccd14c": "",
          "88025ddd-27c7-4893-9a7c-124210915f8e": "",
        },
      });

      console.log(organization);
    } catch (error) {
      throw error;
    }
  }

  async createAnotation() {
    try {
      const { data: organization } = await this.axios.post(
        "/anotation/update",
        {
          data: {
            entidade: "pessoa",
            id_contato: 12028,
            id_anotacao: 250058,
            cor: "#ffffff",
            conteudo_anotacao: "Uma simples e bonita anotação editada, aqui.",
            proprietario_anotacao: "Guilherme Ferreira",
          },
        }
      );

      console.log(organization);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SalestimeOrganizations;
