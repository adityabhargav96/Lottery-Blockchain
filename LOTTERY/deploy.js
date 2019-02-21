const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface , bytecode } = require('./compile');

const mnemonic = 'stay sound goose wine fiction ten sudden copy improve usual gas tongue';

const provider = new HDWalletProvider(
    mnemonic,
  'https://rinkeby.infura.io/v3/cab84777598d4d6e9c90ed6cae4acc15'
);
const web3 = new Web3(provider);

const deploy = async () => {
  //if internet is slow it ownt work
  const accounts =  await  web3.eth.getAccounts();

  console.log('Attempting to deploy from account',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: '0x'+ bytecode })
  .send({ gas: '1000000', from: accounts[0] });
  console.log(interface);
  console.log('Contract deployed to',result.options.address);
};
deploy();
