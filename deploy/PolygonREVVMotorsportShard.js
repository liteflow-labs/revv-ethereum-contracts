/**
 * @param {import ('hardhat/types').HardhatRuntimeEnvironment}
 */
module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy, get} = deployments;
  const {deployer} = await getNamedAccounts();
  const forwarderRegistry = await get('ForwarderRegistry');
  await deploy('PolygonREVVMotorsportShard', {
    from: deployer,
    args: [
      forwarderRegistry.address, // forwarderRegistry
      '0x687C1D2dd0F422421BeF7aC2a52f50e858CAA867', // childChainManager on Amoy
    ],
    log: true,
  });
};
module.exports.tags = ['PolygonREVVMotorsportShard'];
module.exports.dependencies = ['ForwarderRegistry'];
