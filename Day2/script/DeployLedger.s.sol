//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

import {Ledger} from "../src/Ledger.sol";
import {Script} from "../lib/forge-std/src/Script.sol";

contract DeployLedger is Script{
    
    function run() external returns(Ledger) {
    vm.startBroadcast();
    Ledger deploy= new Ledger();
    vm.stopBroadcast();
    return deploy;
  }
}