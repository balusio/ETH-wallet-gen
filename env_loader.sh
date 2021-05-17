#!/bin/bash
# use a .env reader based on bash
# based on example https://gist.github.com/mihow/9c7f559807069a03e302605691f85572
# ============================= MAC ENVIRONMENT =================
# if [ -f .env ]
# then
#   echo $(cat .env | sed 's/#.*//g' | xargs)
#   export $(cat .env | sed 's/#.*//g' | xargs)
# ===============================================================


# ============================= LINUX (DEB) ENVIRONMET ==========
# keep in mind you have t execute it as context . ./env_loader.sh
# 
# ===============================================================

set -a # automatically export all variables
source .env
set +a

echo ".ENV exported"
# wrap and run the node commands as arguments
# example env_loader.sh 'node index.js'
exec $1
