// const { ethers } = require("hardhat");
// async function enterRaffle() {
//   const lottery = await ethers.getContract("Lottery");
//   const entranceFee = await lottery.getEntranceFee();

 
//   await lottery.enterLottery({ value: entranceFee });
//   const balance = await lottery.getBalance();
  
//   console.log("Entered!");
//   console.log(entranceFee.toString());
//   console.log("---------------------------");
//   console.log(balance.toString());

// }

// enterRaffle()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

const { ethers } = require("hardhat");

async function enterRaffle() {
  const {account1} = await getNamedAccounts(); // Get named signers

  const lottery = await ethers.getContract("Lottery",account1);
  const entranceFee = await lottery.getEntranceFee();

  // Use different accounts to enter the lottery
  // For example, using the deployer account:
  await lottery.enterLottery({ value: entranceFee });
  
  // Or using the player account:
  // await lottery.connect(player).enterLottery({ value: entranceFee });

  const balance = await lottery.getBalance();
  console.log("Entered!");
  console.log(entranceFee.toString());
  console.log("---------------------------");
  console.log(balance.toString());
}

enterRaffle()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

