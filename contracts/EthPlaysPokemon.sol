pragma solidity 0.4.15;

contract EthPlaysPokemon {
    struct Button {
        bytes32 name;
        uint voteCount;
    }

    Button[] public buttons;

    function EthPlaysPokemon(bytes32[] buttonNames) {
        for(uint i = 0; i < buttonNames.length; i++) {
            buttons.push(Button({
                name: buttonNames[i],
                voteCount: 0
            }));
        }
    }
    
    function submitVote(uint button) {
        buttons[button].voteCount++;
    }

    function getVotesFor(uint button) returns(uint) {
        return buttons[button].voteCount;
    }

    function getWinner() returns (uint) {
        uint winnerIndex = 0;
        for (uint i = 1; i < buttons.length; i++) {
            if (buttons[i].voteCount > buttons[winnerIndex].voteCount) {
                winnerIndex = i;
            }
        }
        return winnerIndex;
    }

    function resetVotes() {
        for (uint i = 0; i < buttons.length; i++) {
            buttons[i].voteCount = 0;
        }
    }
}
