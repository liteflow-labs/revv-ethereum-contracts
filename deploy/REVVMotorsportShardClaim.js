/**
 * @param {import ('hardhat/types').HardhatRuntimeEnvironment}
 */
module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy, get} = deployments;
  const {deployer} = await getNamedAccounts();
  const polygonREVVMotorsportShard = await get('PolygonREVVMotorsportShard');
  await deploy('REVVMotorsportShardClaim', {
    from: deployer,
    args: [
      polygonREVVMotorsportShard.address, // polygonREVVMotorsportShard
    ],
    log: true,
  });
};
module.exports.tags = ['REVVMotorsportShardClaim'];
module.exports.dependencies = ['PolygonREVVMotorsportShard'];
