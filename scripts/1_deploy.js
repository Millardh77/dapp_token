async function main() {
  console.log(`Preparing deployment...\n`)

  // Fetch contract to deploy
  const Token = await ethers.getContractFactory('Token')
 
  // Deploy contracts
  const mchm = await Token.deploy("MCH Media", "MCHM", "1000000");
  await mchm.deployed()
  console.log(`MCHM Deployed to: ${mchm.address}`)
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
