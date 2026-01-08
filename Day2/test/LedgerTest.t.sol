//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

import {Test} from "../lib/forge-std/src/Test.sol";
import {DeployLedger} from "../script/DeployLedger.s.sol";
import {Ledger} from "../src/Ledger.sol";

contract LedgerTest is Test{
    address USER=makeAddr("user");
    uint STARTING_VALUE=1 ether;
    uint SENDING_VALUE=0.1 ether;
    Ledger ledger;

    function setUp() external{
     DeployLedger deploy=new DeployLedger();
    ledger= deploy.run();
    vm.deal(USER,STARTING_VALUE);
    }
    
    function testlist() external{
      vm.prank(USER);
      ledger.deposit{value:SENDING_VALUE}();
      assertEq( ledger.list(USER), SENDING_VALUE);
    }

    function testContractBalance() external{
      uint initialBalance= address(ledger).balance;
      vm.prank(USER);
      ledger.deposit{value:SENDING_VALUE}();
      assertEq(address(ledger).balance,initialBalance+SENDING_VALUE);
    }
}