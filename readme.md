Author : Neha N. Deshpande


StudentID : x19203896


Module : Blockchain


gitHub : https://github.com/Nehadeshpande89/Neha_Blockchain.git 

DocerHub : https://hub.docker.com/repository/docker/8379074499/neha 

Image : docker pull 8379074499/neha:123



*** Pre-requisits ***
1.create Wallet of Ropsten testnet ETH for storing cryptocurrencies.Also create account in metamask by installing metamask.

URL : 

Metamask: https://metamask.io

Faucet: https://faucet.metamask.io/


2.Create account in infura 

3.Need Smart contract IDE online

URL :
 https://remix.ethereum

 4.Installed nodeJS and code editor i.e visual studio.

 5. Install git on local machine

 6. Install docker on local machine.

***To Run this project please follow the below steps***

Step I : 
For downloading this project use below command (Make sure you have installed git on your local machine)
https://github.com/Nehadeshpande89/Neha_Blockchain.git (Access is given to eoinco)

Step II : 
Extract the folder and open the folder and open it in your favouirate installed

Step III : 
Open Remix IDE for deploying contract on broswer and paste the code from the ERC20_neha.sol file

Step IV : After pasting deploy the ERC20 contract

Step V : Wait till the creation gets completed 

Step VI : After creation please verfiy and publish your contract

Step VII : Copy the contract address and paste it in method.js and contract.js

for example :
**In method.js
const contractAddress = '0xBf222aF1622d33A6fD082710D7075c2e5d66E244'


**In contract.js
const address = "0xBf222aF1622d33A6fD082710D7075c2e5d66E244"

Step VIII : Replace your metamask accounts in all the files


Step IX : Install dependencies by running "npm i" command (All the required dependencies are already in package.json)


Step X : Run method.js by using node method.js(Before running ***uncomment*** the method "go()" from method.js)


Step XI : Run handler.js using curl -XPOST http://localhost:8080/transfer or node handler.js (Before running ***comment*** the method "go()" from method.js)


Step XII : To see on webserver use http://localhost:8080/transfer

***Docker***

Step XIII : To build a docker container from your Dockerfile (and .dockerignore) files (note by default it uses the file called Dockerfile) use
docker build -t [yourusername/tag] 
for example : docker build -t [8379074499/blockchain] 

step XIV : Run the docker container using below command
$docker run -p 49160:8080 --name neha -d 8379074499/blockchain

Step XV  : commit the changes docker changes
Example : 
 docker commit 56dfec1d0886 8379074499/neha:123

step V : Push your changes 
Example : 
docker push 8379074499/neha:123
