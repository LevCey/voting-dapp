const hre = require("hardhat");

async function main(){
    const candidates = ["Alice", "Bob", "Charlie"];
    const Voting = await hre.ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(candidates);

    await voting.waitForDeployment();

    console.log(`Voting contract deployed to ${voting.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});