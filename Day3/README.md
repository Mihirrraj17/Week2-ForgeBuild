1. Used Alchemy as RPC provider 

2. Stored Sepolia rpc and private key in .env file in Day2 file

3. used-'forge script script/DeployLedger.s.sol --rpc-url $SEPOLIA_RPC_URL --broadcast --private-key $PRIVATE_KEY' for broadcasting the contract

4. Etherscan address= https://sepolia.etherscan.io/tx/0x0d7e19830efd0464c8b8940cccb829a5358fb7d9a36cbd99ad672907ba0a78b6

5. following is the output

== Return ==
0: contract Ledger 0xcFb5b4F2c2Cca383F4EbCF1e1B6373ed09e61252

## Setting up 1 EVM.

==========================

Chain 11155111

Estimated gas price: 0.001154895 gwei

Estimated total gas used for script: 313856

Estimated amount required: 0.00000036247072512 ETH

==========================

##### sepolia
✅  [Success] Hash: 0x0d7e19830efd0464c8b8940cccb829a5358fb7d9a36cbd99ad672907ba0a78b6
Contract Address: 0xcFb5b4F2c2Cca383F4EbCF1e1B6373ed09e61252
Block: 10008555
Paid: 0.000000274427827608 ETH (241428 gas * 0.001136686 gwei)

✅ Sequence #1 on sepolia | Total Paid: 0.000000274427827608 ETH (241428 gas * avg 0.001136686 gwei)
                                                                                                         

==========================

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.

Transactions saved to: /home/mihir/solidity-course/Week2-ForgeBuild/Day2/broadcast/DeployLedger.s.sol/11155111/run-latest.json

Sensitive values saved to: /home/mihir/solidity-course/Week2-ForgeBuild/Day2/cache/DeployLedger.s.sol/11155111/run-latest.json 