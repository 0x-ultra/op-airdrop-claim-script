const hre = require("hardhat");
const fetch = require("node-fetch");

const airdropContract = "0xFeDFAF1A10335448b7FA0268F56D2B44DBD357de";
const gatewayAddy = "https://gateway-backend-mainnet.optimism.io/proof/";
async function main() {
  const account = process.env.FRIEND;
  console.log("Claiming for: ", account);
  const response = await fetch(gatewayAddy + account);
  const json = await response.json();
  const myContract = await hre.ethers.getContractAt(
    "OPAirdrop",
    airdropContract
  );

  await myContract.claim(json.index, account, json.amount, json.proof);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
