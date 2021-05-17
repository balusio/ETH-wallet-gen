import Accounts from 'web3-eth-accounts';
import HDWalletProvider from "@truffle/hdwallet-provider";
import Web3 from 'web3';

const walletInteract = (mnemonic, addressIndex) => {
  return new Promise((resolve, reject) => {
    var web3 = new Web3(process.env.BC_API);
    const loggedWallet = new HDWalletProvider(mnemonic, process.env.BC_API);
    if(loggedWallet) {
      // get the account indexed address
      const address = loggedWallet.getAddress(addressIndex);
      // will return the wallet on based on the address
      const hdAccount0 = loggedWallet.wallets[address];
      if(!hdAccount0) {
        reject('404 wallet doesnt exist');
      }
      const unlockedWallet = web3.eth.accounts.privateKeyToAccount(`0x${hdAccount0._privKey.toString('hex')}`);
      // once wallet is logged we can pass this to the client directly and solve this out
      web3.eth.getBalance(unlockedWallet.address).then((response)=>{
        resolve({
          pKey: `0x${hdAccount0._privKey.toString('hex')}`,
          balance: response,
          address: unlockedWallet.address,
        })
      });
     
    } else {
      console.warn(`Error request with mnemonic ${mnemonic}`);
      reject('403')
    }
  
    loggedWallet.engine.stop();
  });
};

 // const walletA = web3.eth.accounts.privateKeyToAccount('0x4a776ef60ab47db5264a596d2bbf2d0e73c8293a9210e59b10eeb692140c5a2c');

  // // BALANCE ON PRIVATE ACCOUNT SHOULD BE 0 
  // console.log(walletA);

  // // CREATE A TRANSACTION 
  // web3.eth.accounts.signTransaction({
  //   to: walletB.address,
  //   value: '500000000000000000', // THIS VALUE MUST BE IN WEI
  //   gas: 2000000 // THIS IS THE GAS, 
  // }, walletA.privateKey).then( (response) => {
  //   try {
  //     web3.eth.sendSignedTransaction(response.rawTransaction).on('receipt', 
  //       web3.eth.getBalance(walletB.address).then( (response)=>{
  //       // ONCE THE RESPONSE OCCURR THIS TRANSACCION WILL BE ADDED TO THE BLOCKCHAIN
  //       console.log("balaaance", response);
  //       })
  //     ); 
  //   } catch (error) {
  //     console.error('ERROR ON TRANSACTION')
  //   }

  // });


export default walletInteract;
