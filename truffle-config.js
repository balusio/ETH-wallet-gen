require('@babel/register');
require('@babel/polyfill');

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    },
  },
  contracts_directory: './solidity/contracts/',
  contracts_build_directory: './solidity/abis/',
  compilers: {
    solc: {
      version: '^0.6.0',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
