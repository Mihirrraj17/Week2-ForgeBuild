### Deployment
Etherscan address= https://sepolia.etherscan.io/tx/0x0d7e19830efd0464c8b8940cccb829a5358fb7d9a36cbd99ad672907ba0a78b6

### SetUp
* Installed ethers library to connect my js code to blockchain and installed browserify to allow ethers imported functions to work on browser.

* Solidity contract contains Deposit function which allows user to deposit certain Eth and it has mapping that is address=> amount.

* Deployed Ledger.sol through foundry using broadcast script and connected in to frontend using ethers imported function.

### Usage
* Connect button to connect it to Metamask and doing deposit without it will give alert that metamask is not connected.
* Allows user to deposit amount into the smartContract through Deposit button.
* Includes input option and address from the input is ussed to find contract's and user's balance respectively.