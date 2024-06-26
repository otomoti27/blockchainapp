// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// OpenZeppelinのERC-20をインポート
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor() ERC20("MyERC20", "ME2") {
      _mint(msg.sender, 1000000);
    }
}