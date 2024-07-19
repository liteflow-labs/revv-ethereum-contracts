/**
 * @type {import ('hardhat/types').HardhatConfig}
 */
module.exports = {
  networks: {
    amoy: {
      url: 'https://polygon-amoy.g.alchemy.com/v2/' + process.env.ALCHEMY_API_KEY,
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY || '0x0000000000000000000000000000000000000000000000000000000000000000', // deployer
      ],
      gasPrice: 1500000000, // forced to 1.5 gwei
      verify: {
        etherscan: {
          apiUrl: 'https://api-amoy.polygonscan.com/',
          apiKey: process.env.POLYGONSCAN_API_KEY,
        },
      },
    },
  },
};
