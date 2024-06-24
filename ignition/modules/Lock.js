// scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const RTFKT_Nike_NFT = await ethers.getContractFactory("RTFKT_Nike_NFT");
    const nft = await RTFKT_Nike_NFT.deploy();

    console.log("RTFKT_Nike_NFT contract deployed to:", nft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
