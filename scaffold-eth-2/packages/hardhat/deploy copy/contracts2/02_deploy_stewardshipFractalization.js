// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

// const sleep = (ms) =>
//   new Promise((r) =>
//     setTimeout(() => {
//       console.log(`waited for ${(ms / 1000).toFixed(3)} seconds`);
//       r();
//     }, ms)
//   );

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  await deploy("StewardFractalization", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: [ "Hello", ethers.utils.parseEther("1.5") ],
    //args: [ "GOLD", "GLD" ], // Modify the token name and initial supply accordingly
    log: true,
    waitConfirmations: 5,
  });

  // Getting a previously deployed contract
  const stewardFractalization = await ethers.getContract("StewardFractalization", deployer);

  console.log("stewardFractalization address:", stewardFractalization.address);
  // const etfTokenName = await etfToken.name();
  // console.log("etfTokenName:", etfTokenName); 
  // const etfTotalSupply = await etfToken.totalSupply();
  // console.log("ETF Total Supply:", etfTotalSupply); 

};
module.exports.tags = ["StewardFracatalization"];
