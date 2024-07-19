/**
 * @type {import ('hardhat/types').HardhatConfig}
 */
module.exports = {
  external: {
    contracts: [
      {
        artifacts: ['artifacts_previous/v4', 'artifacts_previous/v3'],
      },
      {
        artifacts: 'node_modules/@animoca/ethereum-contracts/artifacts',
      },
    ],
  },
};
