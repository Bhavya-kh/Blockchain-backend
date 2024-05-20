const { ethers } = require("hardhat");

const networkConfig = {
  default: {
    name: "hardhat",
    keepersUpdateInterval: "30",
  },
  31337: {
    name: "localhost",
    subscriptionId: "11062",
    gasLane:
      "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
    keepersUpdateInterval: "3",
    raffleEntranceFee: ethers.utils.parseEther("0.01"), // 0.0004 ETH
    callbackGasLimit: "5000000", // 500,000 gas
  },
  11155111: {
    name: "sepolia",
    subscriptionId: "11062",
    gasLane:
      "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
    keepersUpdateInterval: "3",
    raffleEntranceFee: ethers.utils.parseUnits("0.00032762",18), // 0.01 ETH
    callbackGasLimit: "5000000", // 500,000 gas
    vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
  },
  1: {
    name: "mainnet",
    keepersUpdateInterval: "30",
  },
  1337: {
    // Ganache configuration
    name: "ganache",
    keepersUpdateInterval: "30",
    raffleEntranceFee: ethers.utils.parseEther("0.0004"), // 0.01 ETH
    callbackGasLimit: "5000000", // 500,000 gas
  },
};

const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const frontEndContractsFile =
  "C:/Users/user/OneDrive/Desktop/nextjs-smartcontract-lottery-fcc-main/constants/abi.json";
const frontEndAbiFile =
  "C:/Users/user/OneDrive/Desktop/nextjs-smartcontract-lottery-fcc-main/constants/contractAddresses.json";

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
  frontEndContractsFile,
  frontEndAbiFile,
};
