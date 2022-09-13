let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

async function connectMetamask() {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    console.log("Account address:", await signer.getAddress());

    const balance = await signer.getBalance()
    const convertToEth = 1e18;
    console.log("account's balance in ether:", balance.toString() / convertToEth);
}

async function claimTokens() {
    
    const runTokenContractAddress = "0x5e598F087079F2184b0C2241Fc12C857231d95BC";
    const runTokenContractAbi = [
        "function mintTokens(address account, uint256 amount) public",
    ];

    const runTokenContract = new ethers.Contract(runTokenContractAddress, runTokenContractAbi, provider);
    let convertToWei = 1000000000
    let amountToClaim = localStorage.getItem('best') * convertToWei
    await runTokenContract.connect(signer).mintTokens(signer.getAddress(), amountToClaim.toString())
}

async function claimNft() {
    const nftContractAddress = "0x168cF31E21490db9483329275C01fD4187e707A8";
    const mintContractAbi = [
        "function mint(uint256 amount) public",
    ];
    const nftContract = new ethers.Contract(nftContractAddress, mintContractAbi, provider);
    await nftContract.connect(signer).mint(window.totalNFTScore.toString())
}
