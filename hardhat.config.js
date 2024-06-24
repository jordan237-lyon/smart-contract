require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        mainnet: {
            url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
            accounts: [process.env.DEPLOYER_PRIVATE_KEY]
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
            accounts: [process.env.DEPLOYER_PRIVATE_KEY]
        }
    }
};
