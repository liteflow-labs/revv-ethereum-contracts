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
        // import artifacts and deploy script from ethereum-universal-forwarder
        artifacts: 'node_modules/ethereum-universal-forwarder/export/artifacts',
        deploy: 'node_modules/ethereum-universal-forwarder/export/deploy',
      },
      {
        artifacts: 'node_modules/@animoca/ethereum-contracts/artifacts',
      },
    ],
  },
};
