const hre = require("hardhat");

async function main() {
  // const Tracking = await hre.ethers.getContractFactory("Tracking");
 

    const Tracking = await hre.ethers.deployContract("Tracking");
    // const tracking = await Tracking.deploy();
    // const tracking = await Tracking.deployContract();


  // await tracking.deployed();
  await Tracking.waitForDeployment();

  console.log(`Tracking deployed to ${Tracking.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
