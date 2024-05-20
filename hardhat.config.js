require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()



const MAINNET_RPC_URL ="https://eth-mainnet.g.alchemy.com/v2/ViY6_nmcQuZUF1xleTWD8Uv0Wgq7ckRJ"
const SEPOLIA_RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/Uk_0bcqnj7H5XiwCDJVb5Dd_WOUg6UDW"
const POLYGON_MAINNET_RPC_URL ="https://polygon-mainnet.alchemyapi.io/v2/ViY6_nmcQuZUF1xleTWD8Uv0Wgq7ckRJ"
const PRIVATE_KEY =  "39b21b27871ddd00136fe5d49111a06ada766f1e90d4f4e0678c1f876fd0c52a"


module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
           
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 11155111,
        },
        mainnet: {
            url: MAINNET_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [], 
            saveDeployments: true,
            chainId: 1,
        },
        polygon: {
            url: POLYGON_MAINNET_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 137,
        },
        ganache:{
            chainId:1337,
            url: "http://127.0.0.1:7545",
        }
    },
  
    namedAccounts: {
        deployer: {
            default: 0, 
            1: 0, 
            hardhat: 3,
        },
        player: {
            default: 5,
        },
        account1: {
            default: 3,  // Index of the account in your HD wallet provider or array
        },
        account2: {
            default: 1,  // Index of the account in your HD wallet provider or array
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.7",
            },
            {
                version: "0.4.24",
            },
        ],
    },
    mocha: {
        timeout: 500000, 
    },
}
