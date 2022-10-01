# Getting initialization
step-1.)navigate in the Truffle_Blockend in cmd/terminal and type
### npm install 
and then
### truffle develop
step-2.) then migrate the smart contract by typing in truffle command
### migrate --reset
step-3.) navigate to your metamask and add new network, name it 'Ganache' and put it's RPC URL [http://127.0.0.1:9545/] and 1337 in Chain ID

step-4.) now copy the private key of any of the account from truffle blockchain that is initiated after step-1 and import that account in metamask by pasting it's private key in the import account.

step-5.) now open new terminal and navigate to [frontend/defi_platform] and type the command
### npm install
and then
### npm start

and thus the application is started

