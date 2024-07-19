/**
 * @type {import ('hardhat/types').HardhatConfig}
 */
module.exports = {
  namedAccounts: {
    deployer: {
      default: 0, // the first account as deployer
    },
    payoutWallet: 1,
  },
};
