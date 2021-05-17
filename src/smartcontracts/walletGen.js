import Accounts from 'web3-eth-accounts';
import { setDefaultWordlist, generateMnemonic, mnemonicToSeed } from 'bip39';
import HDWalletProvider from "@truffle/hdwallet-provider";
import Web3 from 'web3';

/**
 * 
 *@returns {
    address: "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01",
    privateKey: "0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709",
    signTransaction: function(tx){...},
    sign: function(data){...},
    encrypt: function(password){...}
  }
 */

 
/**
 * @see https://github.com/bitcoinjs/bip39
 * @see https://medium.com/@harshagoli/so-you-want-to-build-an-ethereum-hd-wallet-cb2b7d7e4998
 */
const walletGen = () => {
  
  return new Promise((resolve, reject) => {
    const mnemonic = generateMnemonic();
    // the wallet provider will give me an ETH HD WALLET
    const newWallet = new HDWalletProvider(mnemonic, process.env.BC_API);
    
    if(newWallet) {
      const hdAccount0 = newWallet.wallets[newWallet.getAddress(0)];
      
      resolve({
        mnemonic: mnemonic,
        DefaultAddress: hdAccount0._privKey.toString('hex')
      });
    } else {

      console.error('unable to create wallet');
      reject('403')
    }
    newWallet.engine.stop();
  });
  
} 

export default walletGen;
