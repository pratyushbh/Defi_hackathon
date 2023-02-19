import React,{useState,useEffect, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import "./Navbar.css"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { grey, pink, red } from '@mui/material/colors';
import { Tooltip } from 'reactstrap';
import { Web3Context } from '../../context/web3.context';

const Navbar = () => {
  const {walletc,setWalletC}= useContext(Web3Context)
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };
  const connectWalletPressed = async () => { 
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
    setWalletC(walletResponse.address);
    console.log(walletc);
  };

  return (
  <div className='Background-active'>
      <nav className="Navbar">
      <Link to="/" className='Navbar-brand'>  <h1>ARBINOM</h1></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="Navbar-collapse" id="NavbarSupportedContent">
    <ul className="Navbar-nav mr-auto">
      <li className="Nav-item">
      <motion.div  transition={{delay:0.5}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
      <Link to="/FlashLoans"><p className="hover-underline-animation">Flash Loan</p></Link>
      </motion.div>
      </li>
      <li className="Nav-item">
      <motion.div  transition={{delay:0.5}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span><SvgIcon component={AccountBalanceWalletIcon} sx={{ color: red[50] }}/> Connect Wallet</span>
        )}
        <span className='tooltipText'>You connect your metamask<br/> wallet by clicking this </span>
      </button>
      </motion.div>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar