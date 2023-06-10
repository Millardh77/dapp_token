async function main() {
  console.log(`Preparing deployment...\n`)

  // Fetch contract to deploy
  const Token = await ethers.getContractFactory('Token')
 
  // Deploy contracts
  const dapp = await Token.deploy('Dapp University', 'DAPP', '1000000')
  await dapp.deployed()
  console.log(`DAPP Deployed to: ${dapp.address}`)
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
