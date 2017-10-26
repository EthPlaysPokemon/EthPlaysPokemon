var epp = artifacts.require("./EthPlaysPokemon.sol");

contract('EthPlaysPokemon', function(accounts) {
    it("should register votes", async function() {
        const app = await epp.deployed()
        app.submitVote(0)
        const voteTotal = await app.getVotesFor.call(0)
        console.log(voteTotal)
        assert.equal(voteTotal.valueOf(), 1, "number of votes did not register")
    });
});
