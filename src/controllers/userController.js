import userModel from '@models/userModel';
import { authService } from '@services/authService'
import walletGen from '@smartcontracts/walletGen';
import walletInteract from '@smartcontracts/walletInteract';

const registerUser = (req, res) => {
  const { username, password } = req.body;
  walletGen().then(response => {
    res.send(response);
  }).catch(err => {
    res.status(403).send({
      message: 'error creating wallet'
    });
  })
};

const loginUser = (req, res) => {
  const { mnemonic, indexWallet } = req.body;
  walletInteract(mnemonic, indexWallet).then(response => {
    res.send(response);
  }).catch(err => {
    res.status(404).send({
      message: 'wallet doesnt exist'
    });
  })
};

export { registerUser, loginUser };
