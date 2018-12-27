/*
A script that will sign and broadcast an ethereum transaction to the network, then shows the result in the console.

WARNING!
If executed this script will send ether, be sure the info is correct before you run this!
Alternatively you should use a test net with test ether first before running this on the main net.

For an explanation of this code, navigate to the wiki https://github.com/ThatOtherZach/Web3-by-Example/wiki/Send-Ether-Transaction
*/

var ETH = require("ethers-wallet");
var ABI = require('ethereumjs-abi');

/**
 * Get an Ethereum public address from a private key.
 *
 * @param privateKey Private key as 32 bytes hexadecimal string starting 0x
 *
 * @return 0x hexadecimal address or null if the private key is invalid.
 */
function getAddressFromPrivateKey(privateKey) {
  try {
    var wallet = new ETH.Wallet(privateKey); 
    return wallet.address;
  } catch (e) {
    console.error("Could not parse private key ", privateKey, e);
    return null;
  }
}

/**
 * Calculate the nonce for the next outbound transaction from the address.
 *
 * @param txCount How many tx the address has sent
 * @param testnetOffset 0 for Ropsten, used to be a thing for the old test network.
 * @param internalOffset Always increase +1 when sends a tx
 */
function calculateNonce(txCount, testnetOffset, internalOffset) {
  return txCount + testnetOffset + internalOffset;
}

/**
 * Create data field based on smart contract function signature and arguments.
 *
 * @param functionSignature E.g. setValue(uint256)
 * @param functionParameters E.g. A comma separated string. Eg. 200,300
 * @returns {string} 0x prefixed hex string
 */
function encodeDataPayload(functionSignature, functionParameters) {

  if(typeof functionSignature != "string") {
    throw new Error("Bad function signature: " + functionSignature);
  }

  if(typeof functionParameters != "string") {
    throw new Error("Bad function parameter: " + functionSignature);
  }

  // Construct function call data payload using ethereumjs-abi
  // https://github.com/ethereumjs/ethereumjs-abi
  const params = functionParameters.split(",").filter((x) => x.trim());
  const signatureArgs = [functionSignature].concat(params);
  return "0x" + ABI.simpleEncode.apply(this, signatureArgs).toString("hex");
}

/**
 * Build a raw transaction calling a contract function.
 *
 * @param contractAddress Contracts's address as hexadecimal string
 * @param privateKey Private key as 0x prefixed hexadecimal
 * @param nonce Must be incremented by 1 for each transaction
 * @param functionSignature E.g. setValue(uint)
 * @param functionParameters E.g. 2000
 * @param value as hexadecimal string of wei (optional)
 * @param gasLimit as a stringed number (optional)
 * @param gasPrice as a stringed number (optional)
 */
function buildTx({contractAddress, privateKey, nonce, functionSignature, functionParameters, value, gasLimit, gasPrice}) {

  var wallet = new ETH.Wallet(privateKey);

  if (!gasLimit) {
    gasLimit = "0x300000";
  }

  if (!value) {
    value = "0x0";
  }

  if (!gasPrice) {
    // Ropsten testnet 2017-01
    gasPrice = "0x4a817c800"; // 20000000000
  }

  if (nonce === undefined) {
    throw new Error("Cannot send a transaction without a nonce.")
  }

  var data;
  if(functionSignature && functionParameters) {
    data = encodeDataPayload(functionSignature, functionParameters);
  } else {
    data = undefined;
  }

  const txData = {
    nonce: nonce,
    to: contractAddress,
    gasLimit: gasLimit,
    gasPrice: gasPrice,
    value: value,
    data: data,
  };

  // Sign transactions
  var tx = wallet.sign(txData);

  return tx;
}

// Add the web3 node module
var Web3 = require('web3');

// Show web3 where it needs to look for the Ethereum node.
web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/d5686d6d07d0421eb166c521250af71b'));

// An extra module is required for this, use npm to install before running
var Tx = require('ethereumjs-tx');

// Used to sign the transaction. Obviously you SHOULD better secure this than just plain text
var privateKey = new Buffer('E3B5712B8BDBE9C71A21EB4C4CDD16641C67490E51A2C716552EE54D9D4A0E7E', 'hex');

 // The reciviing address of the transaction
var receivingAddr = ('0xDE33cc4D5be256763d99bAaF5f1eF61196352127');

// Value to be sent, converted to wei and then into a hex value
var txValue = web3.utils.numberToHex(web3.utils.toWei('1', 'ether'));

console.log("Public Key: " + getAddressFromPrivateKey(privateKey));

var txData = {
  contractAddress: receivingAddr,
  privateKey: privateKey,
  nonce: '0x5',
  functionSignature: 'bid(uint256)',
  functionParameters: '3',
  value: txValue,
  gasLimit: '0x55f00',
  gasPrice: '0x14f46b0400',
};

console.log("Building transaction with parameters", txData);

var tx = buildTx(txData);

web3.eth.sendSignedTransaction(tx) // Broadcast the transaction to the network
.on('receipt', console.log); // When a receipt is issued, log it to the console
