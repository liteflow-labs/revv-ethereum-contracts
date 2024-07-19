/**
 * @param {import ('hardhat/types').HardhatRuntimeEnvironment}
 */
module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy, get} = deployments;
  const {deployer} = await getNamedAccounts();
  const forwarderRegistry = await get('ForwarderRegistry');
  const universalForwarder = await get('UniversalForwarder');
  await deploy('PolygonREVV', {
    from: deployer,
    args: [
      '4400000000000000000000000000', // supply
      '0x687C1D2dd0F422421BeF7aC2a52f50e858CAA867', // childChainManager on Amoy
      forwarderRegistry.address, // forwarderRegistry
      universalForwarder.address, // universalForwarder
    ],
    log: true,
  });
};
module.exports.tags = ['PolygonREVV'];
module.exports.dependencies = ['ForwarderRegistry', 'UniversalForwarder'];
