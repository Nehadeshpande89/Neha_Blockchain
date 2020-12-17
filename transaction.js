var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/29909081a8eb4d88be572d92a3b37b58')


const account1 = '0x1e83857F5cE64C2D7d7F485EDcbd1407E2106c36' // Metamask account 1 
const account2 = '0x3621512F8B06499Cf746e33857510426b94d5AbA' // Metamask account 2

const privateKey1 = Buffer.from('98f59d27a6759cb075e828ca430ce6159048cde2a136ef2232518a60cd7bee1e', 'hex')

const sendTransaction = async(raw) => {
  return await web3.eth.sendSignedTransaction(raw)
}

const getTransactionCount = async(account) => {
  return await web3.eth.getTransactionCount(account)
}

const transferFunds = async(account1, account2, amount) => {

  let txCount = await getTransactionCount(account1)

  console.log("txCount returned: " + txCount)

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(21000), 
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
    to: account2,
    value:    web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
  }

  const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})

  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  console.log("about to send transaction")
  let minedTransaction = await sendTransaction(raw)
  console.log(minedTransaction)
  console.log("txHash: " + minedTransaction.transactionHash)
}

const transfer = async() => {
  await transferFunds(account1, account2, "0.001")
}

transfer()

