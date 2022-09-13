# JS-Flappy-Bird on blockchain with NTF and Token
### The whole project is reference by https://www.youtube.com/watch?v=ZjQzxXhebVc  
### If you are interested in building awesome project, you may follow their channel!  

-------------------------------------------------------------------------------------

### The game concept  

Remake of the Original FlappyBird Using **JS** &amp; **HTML Canvas**  

--------------------------------------------------------------------------------------

### Briefly outline for this project  

Use the hardhat as the blockchain backend to create smart contract to generate the Token and NFT  
The Token is follow by the ERC20 standard as for the NFT is follow by ERC1155 (there is also ERC721 standard)  
And we upload our NFT to the IPFS server which is pinata and generate the NFT json file  
And the file is inside blockchain/BirdMetaData/runnerGamejson  
And the network for the blockchain is running on ganache localhost network 
If you want to change the network, you may modify hardhat.config file  

-------------------------------------------------------------------------------------

### Detail for the each part - TOKEN


And the token part is inherit form ERC20 standard for building the individual token  
We build the Token by using it constructor function override by ERC20  
And the token we name it 'BirdToken' with the mintToken function to mint Token

In the frontend, you can check the blockchain.js  
It define the provider which is metamask while I testing  
And we need to press button to connect the metamask at first to access your account  
After you play the game for a while, you can claim your token  
All you need is to press the 'claim token' button to transfr your token  


-------------------------------------------------------------------------------------

### Detail for the each part - NFT

And the NFT part isn't complete at frontend, but the concept is already have  
You may check the code inside the BirdCollection.sol  
It inherit the ERC1155 standard for bulding the NFT minting functionality  

---------------------------------------------------------------------------------------  

# [Play it.](https://pang-lee.github.io/FlappyBird_blockchain_NFT.github.io/)  

---------------------------------------------------------------------------------------  

# How it look like
![Demo](https://user-images.githubusercontent.com/44725090/67148880-e7dba280-f2a4-11e9-8dbf-d154842ee0cf.gif)
