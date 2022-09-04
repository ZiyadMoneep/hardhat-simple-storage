require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require('hardhat-gas-reporter');
require('solidity-coverage');

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_UR || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const COINMARKETCAP = process.env.COINMARKETCAP_API_KEY || "";

// console.log(RINKEBY_RPC_URL)
// console.log(PRIVATE_KEY)
// COINMARKETCAP_API_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY,],
      chainId:4,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
    etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors:true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP,
    // token: "MATIC" // DEPLOY ON PLYGON

  },
  solidity: "0.8.9",
};
