const SalestimeOpportunities = require("./SalestimeOpportunities");
const SalestimeAuthentication = require("./SalestimeAuthentication");

// async function testAuth() {
//   try {
//     const AuthClass = new SalestimeAuthentication();
//     console.log("Get Token: ");
//     await AuthClass.getAccessToken();
//     console.log("Get User: ");
//     await AuthClass.getUser();
//     console.log("Revoke Token: ");
//     await AuthClass.revokeToken();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

async function testOpportunities() {
  try {
    const AuthClass = new SalestimeAuthentication();

    console.log("Get Token: ");
    const token = await AuthClass.getAccessToken();

    const OpportunitiesClass = new SalestimeOpportunities(token);

    console.log(`Fetch many opportunities: `);
    await OpportunitiesClass.getManyOpportunities();

    console.log("Revoke Token: ");
    await AuthClass.revokeToken();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

testOpportunities();
