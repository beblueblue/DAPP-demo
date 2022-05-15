const Web3 = require('Web3');
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

console.log(web3.version);
web3.eth.getAccounts().then(console.log, console.log);
