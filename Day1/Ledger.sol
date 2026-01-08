//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract Ledger{
    event Deposit(address user, uint256 amount);

    mapping(address=>uint) public list;

    function deposit() public payable{
     require(msg.value<msg.sender.balance,"Not enough Eth");
     list[msg.sender]+=msg.value;
     emit Deposit(msg.sender,msg.value);
    }
}