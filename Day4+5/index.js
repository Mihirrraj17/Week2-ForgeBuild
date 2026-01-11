const{ethers}=require("ethers");

const contractAddress ="0xcFb5b4F2c2Cca383F4EbCF1e1B6373ed09e61252";
const abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "list",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
async function connect(){
    if(typeof window.ethereum!="undefined"){
     await  ethereum.request({method:"eth_requestAccounts"});
    }else{
       error("Metamask is not installed");
    }
}

async function calldeposit(){
	
	const providers= new ethers.providers.Web3Provider(window.ethereum);
  const signer= providers.getSigner();
  const contract=new ethers.Contract(contractAddress,abi,signer);

  const amountInput= document.getElementById("amount").value;

  try{
    const amount= ethers.utils.parseEther(amountInput);
    const tx=await contract.deposit({value:amount});
	await tx.wait();
	alert("Deposit Successful");
  }catch(e){
    console.error("Check if metamask is connected");
	alert("Check if metamask is connected");
  }

}

async function callMapping(){
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const contract= new ethers.Contract(contractAddress,abi,provider);

	const address= document.getElementById("input").value;

	try{
		const tx= await contract.list(address);
		const inEth=ethers.utils.formatEther(tx);
		alert("Amount deposited: " + inEth+ " ETH");
	}catch(e){
		console.error("You have an error");
	}
}

async function callBalance(){
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const address=await provider.getBalance(contractAddress);
	const inEth=ethers.utils.formatEther(address);
	alert("Contract Balance: " + inEth + " ETH");

}

window.connect=connect;
window.calldeposit=calldeposit;
window.callMapping=callMapping;
window.callBalance=callBalance;