import expectThrow from './helpers/expectThrow.js';

var epp = artifacts.require("./EthPlaysPokemon.sol");

contract('EthPlaysPokemon', function(accounts) {
    it("should register votes", async function() {
        const app = await epp.deployed()
        app.submitVote(0)
        const voteTotal = await app.getVotesFor.call(0)
        assert.equal(voteTotal.valueOf(), 1, "number of votes did not register")
    });

    it("should correctly determine the winner", async function() {
        const app = await epp.deployed()
        app.submitVote(1)
        app.submitVote(3)
        app.submitVote(1)
        const winner = await app.getWinner.call()
        assert.equal(winner.valueOf(), 1, "the winner was selected incorrectly")
    });

    it("should reset votes to zero", async function() {
        const app = await epp.deployed()
        app.submitVote(1)
        app.submitVote(3)
        app.submitVote(1)
        app.resetVotes()
        const votesFor1 = await app.getVotesFor.call(1)
        const votesFor3 = await app.getVotesFor.call(3)
        assert.equal(votesFor1.valueOf(), 0, "the votes were not reset to 0")
        assert.equal(votesFor3.valueOf(), 0, "the votes were not reset to 0")
    });

    it("should prevent non-admin users from reseting the vote", async function() {
        const app = await epp.deployed()
        app.submitVote(1)
        expectThrow(app.resetVotes({from: accounts[1]}))
        const votes = await app.getVotesFor.call(1)
        assert.equal(votes.valueOf(), 1, "a non-admin user reset the votes")
    })
});
