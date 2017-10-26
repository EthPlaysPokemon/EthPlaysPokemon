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
}
