// const { ethers } = require("hardhat");
// async function checkRaffle() {
//     // const {account1} = await getNamedAccounts(); // Get named signers
  
//     // const lottery = await ethers.getContract("Lottery",account1);
//     // const entranceFee = await lottery.getEntranceFee();
  
//     // Use different accounts to enter the lottery
//     // For example, using the deployer account:
//     // await lottery.enterLottery({ value: entranceFee });
//     const checkData = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(""))
//     const {deployer} = await getNamedAccounts(); 
//     const lottery = await ethers.getContract("Lottery",deployer);
//     const { upkeepNeeded } = await lottery.callStatic.checkUpkeep(checkData)
//     const tx=await lottery.performUpkeep('0x');
//     console.log('Transaction hash:', tx.hash);
//     const receipt = await tx.wait();
//     console.log('Transaction was mined in block:', receipt.blockNumber);
    
//     // Or using the player account:
//     // await lottery.connect(player).enterLottery({ value: entranceFee });
  
//     const balance = await lottery.getBalance();
//     console.log("Entered!");
//     // console.log(entranceFee.toString());
//     console.log("---------------------------");
//     console.log(balance.toString());
//     console.log(upkeepNeeded);
//   }
  
//   checkRaffle()
//     .then(() => process.exit(0))
//     .catch((error) => {
//       console.error(error);
//       process.exit(1);
//     });
  
  



require('dotenv').config();
const { ethers } = require('hardhat');


const alchemyApiKey = "https://eth-sepolia.g.alchemy.com/v2/Uk_0bcqnj7H5XiwCDJVb5Dd_WOUg6UDW";
const privateKey = "39b21b27871ddd00136fe5d49111a06ada766f1e90d4f4e0678c1f876fd0c52a";
const contractAddress = "0x6D267C848F009BDcef7d2530bb0D3Ee1263906a1";

// const abi = [
//   "function checkUpkeep(bytes memory checkData) public view returns (bool upkeepNeeded, bytes memory performData)",
//   "function performUpkeep(bytes calldata performData) external",
//   "event RequestedLotteryWinner(uint256 indexed requestId)"
// ];

async function main() {
//   const provider = new ethers.providers.JsonRpcProvider(`https://eth-rpc-proxy.alchemyapi.io/v2/${alchemyApiKey}`);
//   const wallet = new ethers.Wallet(privateKey, provider);
//   const contract = new ethers.Contract(contractAddress, abi, wallet);
const {deployer} = await getNamedAccounts(); // Get named signers

  const lottery = await ethers.getContract("Lottery",deployer);

  try {
    // Call checkUpkeep to see if upkeep is needed
    const [upkeepNeeded, performData] = await lottery.checkUpkeep('0x');
    console.log('Upkeep needed:', upkeepNeeded);

    if (upkeepNeeded) {
      // Call performUpkeep if upkeep is needed
      const tx = await lottery.performUpkeep(performData);
      console.log('Transaction hash:', tx.hash);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log('Transaction was mined in block:', receipt.blockNumber);

      // Listen for the RequestedLotteryWinner event (optional)
      contract.on('RequestedLotteryWinner', (requestId) => {
        console.log('RequestedLotteryWinner event:', requestId);
      });
    } else {
      console.log('Upkeep not needed at this time.');
    }
  } catch (error) {
    console.error('Error performing upkeep:', error);
  }
}

main();
