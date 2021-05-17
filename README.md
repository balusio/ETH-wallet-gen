# API FOR ETHERUM NETWORK
a solidity and nodejs smart contract framework

# ENV VARIABLES

```
BC_API="http://localhost:8545" // ganache route on local

```

## build NODEJS image 
docker build -t choozie-eth .

### run the container
keep in mind that the last argument for development is "npm run dev" this will expose the dev environment on port 4200

```
docker run [OPTIONS]                                                      IMAGE       [COMMAND]          [ARG...]
docker run --name dev-choozie -it -v $(pwd):/home/choozie/ -p 4200:4200 choozie-eth "npm run dev"
```

# Start the local blockchain
the ganche-cli(our localblockchain) is already isntalled inside de docker container, run it with: 
`docker exec -it dev-choozie /bin/bash ganache-cli`

if there's an error passing the ganache-cli argument, split this step into 2

1.- get into the Docker container: 
`docker exec -it dev-choozie /bin/bash`
2.- run ganache cli inside 
`ganache-cli` , do not close this window because is the local blockchain running!

# Truffle dev environment
Once installed Truffle will run the tests automatically and the migrations (deploy to the blockchain)
you can run int on the folder once the container is up with `npm run test` and `npm run migrate-contracts`

# API DOCS

## getting a wallet
  user/register
  user/login
## creating a Smart Contract
  sm/{type}/sign
  sm/{type}/transfer
  sm/{type}/fee
  sm/{type}/withdraw
## interacting with the SC

# Testing
Truffle runs a integrated testing environment, run truffle test on local machine or ntinpm run test for dockerized test

TODO :
[manticore](https://medium.com/haloblock/introduction-to-manticore-a-symbolic-analysis-tool-for-smart-contract-9de08dae4e1e)
[mythril](https://medium.com/haloblock/how-to-install-mythril-a-smart-contract-security-tool-tutorial-4876991a823c)
