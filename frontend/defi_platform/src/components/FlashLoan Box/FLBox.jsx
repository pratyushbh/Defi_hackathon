import './FLbox.css';
import {useEffect,useState} from 'react'
import abi from '../../contracts/AAVE_FlashLoan.sol/SimpleFlashLoan.json'
import { ethers } from 'ethers';

function FLBox() {
  let [contract,setContract]=useState();
  let [value,setValue]=useState(0);
  useEffect(()=>{
    const FLaddress="0xd041283aB2e001a2A2058Cc9ed6F5bf4A4CBE1Cc"
    const FLABI= abi['abi'];
    let provider=new ethers.providers.Web3Provider(window.ethereum)
    let Signer= provider.getSigner()
    let contract= new ethers.Contract(FLaddress,FLABI,Signer);
    setContract(contract);
  },[])
  const CreateFlashLoan=async()=>{
    let result = await contract.createFlashLoan("0xA18a7aD649FbBcf9Fa84c32aeD02748ca4CD103d",ethers.utils.parseEther(value.toString()));
  }
  return (
    <div className="FLBox">
      <h1>Enter amounts(DAI)</h1>
      <p>To create FlashLoan</p>
      <input type="number"/><br/> 
      <button onClick={CreateFlashLoan}>Submit</button>
    </div>
  );
}

export default FLBox;
