pragma solidity ^0.7.5;

interface IDepositContract {
    function deposit(
        bytes calldata pubkey,
        bytes calldata withdrawal_credentials,
        bytes calldata signature,
        bytes32 deposit_data_root
    ) external payable;
}

contract StakingPool{
    mapping(address=>uint) public balances;
    address payable  public admin;
    uint public end;
    bool public finalized;
    uint public totalInvested;
    uint public totalChange;
    mapping(address=>bool) public ChangeClaimed;
    mapping(bytes=>bool) public pubkeyUsed;
    IDepositContract public depositContract=IDepositContract(0x00000000219ab540356cBB839Cbe05303d7705Fa);
    event NewInvestor(address investor);
    constructor(){
        admin=payable(msg.sender);
        end=block.timestamp+ 7 days;
    }

    function invest() external  payable{
        require(block.timestamp<end,'too late');
        if(balances[msg.sender]==0){
            emit NewInvestor(msg.sender);
        }
        uint fee=msg.value * 1/100;
        uint amountInvested=msg.value-fee;
        admin.transfer(amountInvested);
        balances[msg.sender]+=msg.value;
    }
    function finalize() external {
        require(block.timestamp >= end,"Too early");
        require(finalized==false,"already finalized");
        finalized=true;
        totalInvested=address(this).balance;
        totalChange=address(this).balance % 32;
    }
    function deposit(
        bytes calldata pubkey,
        bytes calldata withdrawal_credentials,
        bytes calldata signature,
        bytes32 deposit_data_root
    ) external{
        require(finalized==true,"Too early");
        require(msg.sender==admin,"only admin");
        require(address(this).balance >=32);
        require(pubkeyUsed[pubkey]==false,"this pubkey was already used");
        depositContract.deposit(pubkey, withdrawal_credentials, signature, deposit_data_root);
    }
    function getChange() external{
        require(finalized==true,"Not finalized");
        require(balances[msg.sender]>0,"not an investor");
        require(ChangeClaimed[msg.sender]==false,"already claimed");
        uint amount=totalChange * balances[msg.sender] /totalInvested;
        payable(msg.sender).transfer(amount);
        ChangeClaimed[msg.sender]=true;
    }
    
}