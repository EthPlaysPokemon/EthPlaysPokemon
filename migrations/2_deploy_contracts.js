var EPP = artifacts.require("./EthPlaysPokemon.sol");

module.exports = function(deployer) {
  deployer.deploy(EPP, ["up", "down", "left", "right", "a", "b", "start", "select"]);
};
