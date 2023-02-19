import { useState } from "react";
import { createContext } from "react";

export const  Web3Context=createContext({
    walletc:null,
    setWalletC:()=>null
})

export const Web3CProvider=({children})=>{
    const [walletc,setWalletC]=useState('');
    const value={walletc,setWalletC}
    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}