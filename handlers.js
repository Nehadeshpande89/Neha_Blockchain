let contract = require('./contract.js')
let method = require('./method.js')

const express = require('express')
const { METHODS } = require('http')
const app = express()
app.use(express.json())

app.get('/totalsupply', async (req,res) => {
  res.send(await contract.totalSupply()) // Neha : Checking the total supply 
})

app.post('/transfer', async (req, res) => {
  res.send(await method.go()); // Neha : Calling method from methood.js to avoid code conflict
})

app.get('/balance/:id', async (req, res) => {
  var account = req.params.id
  res.send( await method.getBalanceOf(account))
})

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

