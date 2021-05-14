const SalestimeOpportunities = require("./SalestimeOpportunities");
const SalestimeAuthentication = require("./SalestimeAuthentication");
const SalestimeOrganizations = require("./SalestimeOrganizations");

async function start() {
  try {
    const AuthClass = new SalestimeAuthentication();

    console.log("Get Token: ");
    const token = await AuthClass.getAccessToken();

    const OpportunitiesClass = new SalestimeOpportunities(token);

    console.log(`Update opportunity: `);
    await OpportunitiesClass.updateOpportunity();

    console.log("Revoke Token: ");
    await AuthClass.revokeToken();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

start();
