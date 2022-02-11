const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );

  const transactionContract = await transactionFactory.deploy();

  await transactionContract.deployed();

  console.log("Transaction Contract Deployed", transactionContract.address);
};
(async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
