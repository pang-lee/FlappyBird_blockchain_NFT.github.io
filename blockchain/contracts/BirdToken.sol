// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BirdToken is ERC20 {
    constructor() ERC20("BirdToken", "Bird"){
        _mint(msg.sender, 20*10**6);
    }

    function mintTokens(address account, uint256 amount) public {
        _mint(account, amount);
    }
}