import React,{useCallback,useEffect} from 'react'
import Rellax from 'rellax'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import shape2 from '../../assets/Imgs/shape2.png';
import shape1 from '../../assets/Imgs/shape1.png';
import astronaut from '../../assets/Imgs/astronaut.png';
import Saturn from '../../assets/Imgs/Saturn.png';
import Moon from '../../assets/Imgs/Moon.png';
import cube from '../../assets/Imgs/Cube.png';
import Diamond from '../../assets/Imgs/Diamond.png';
import Pyramid from '../../assets/Imgs/Pyramid.png';
import particlesOptions from "../../particles.json";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Cone from '../../assets/Imgs/Cone.png';


function Homepage() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    useEffect(()=>{
        new Rellax(".animate", { // <---- Via class name
            speed: -6,
            center: false,
            wrapper: null,
            round: false,
            vertical: true,
            horizontal: false
          });
        new Rellax(".shapes_div", { // <---- Via class name
            speed: 7,
            center: false,
            wrapper: null,
            round: false,
            vertical: true,
            horizontal: false
          });
        new Rellax(".moon_div", { // <---- Via class name
            speed: -5,
            center: false,
            wrapper: null,
            round: false,
            vertical: true,
            horizontal: false
          });
          new Rellax(".astronaut_div", { // <---- Via class name
            speed: -2,
            center: false,
            wrapper: null,
            round: false,
            vertical: true,
            horizontal: false
          });
          new Rellax(".saturn_div", { // <---- Via class name
            speed: 6,
            center: false,
            wrapper: null,
            round: false,
            vertical: true,
            horizontal: false
          });
    },[])
  return (
    <div className='Homepage'>
        <div className='intro'>
            <div className='frame'>  
            <Particles options={particlesOptions} init={particlesInit}/>
                      <div className='shapes_div'>
                          <img className='shape1' src={shape1} alt="moon"/>
                          <img className='shape2' src={shape2} alt="rocket"/>
                      </div>
                      <div className='astronaut_div'><img className='astronaut' src={astronaut} alt="astronaut"/></div>
                      <div className='heading animate'><h1>WALIFY</h1></div>
                      <div className='description'><h2>Your first digital crypto bank</h2></div>
                      <div className='moon_div'><img className='moon' src={Moon} alt="astronaut"/></div>
                      <div className='saturn_div'><img className='saturn' src={Saturn} alt="astronaut"/></div> 
            </div>
        </div>
        <div className='Divider'>
            <h1>What services Do we provide</h1>
        </div>
        <div className='sections'>
            <div className='handleLine'></div>
            <div className='grid'>
            <div className='sec1'>
                <div className='row'>
                    <div className='col-sm h1'>
                    <h2 >Conversion of Eth and tokens to fiat(INR included)</h2>
                <h4>Using onmeta's onramp and offramp services users are capable of converting their fiat currency to Ethereum crypto currency, in less time and low conversion rate. As Onmeta provide fast services and cost low conversion price for the service we provide, our platform promise to provide you a smooth and pleasent experience in the fiat to crypto conversion</h4>
                    </div>
                    <div className='col-sm'>
                        <img className='cube' src={cube} alt='cube'/>
                    </div>
                    </div>
                </div>
                <div className='sec2'>
                <div className='row'>
                    <div className='col-sm'>
                         <h2>Multi Signature Wallets</h2>
                        <h4>By using a multisig wallet, users are able to prevent the problems caused by the loss or theft of a private key. So even if one of the keys is compromised, the funds are still safe. It has many use cases such as a board of directors might use a multisig wallet to control access to a company’s funds. For example, by setting up a 4-of-6 wallet where each board member holds one key, no individual board member is able to misuse the funds. Therefore, only decisions that are agreed upon by the majority can be executed. </h4>
                        </div>
                        <div className='col-sm'>
                        <img className='cube' src={Diamond} alt='cube'/>
                    </div>
                    </div>
                </div>
                <div className='sec3'>
                <div className='row'>
                    <div className='col-sm'>
                        <h2>Stake Pool to earn </h2>
                        <h4>Like a lot of things in crypto, staking can be a complicated idea or a simple one depending on how many levels of understanding you want to unlock. For a lot of traders and investors, knowing that staking is a way of earning rewards for holding certain cryptocurrencies is the key takeaway.If a cryptocurrency you own allows staking, you can “stake” some of your holdings and earn a percentage-rate reward over time.The reason your crypto earns rewards while staked is because the blockchain puts it to work. Cryptocurrencies that allow staking use a “consensus mechanism” called Proof of Stake, which is the way they ensure that all transactions are verified and secured without a bank or payment processor in the middle.</h4>
                    </div>
                    <div className='col-sm'>
                        <img className='cube' src={Pyramid} alt='cube'/>
                    </div>
                    </div>
                </div>
                <div className='sec4'>
                <div className='row'>
                    <div className='col-sm'>
                        <h2>Flash Loans</h2>
                        <h4>A flash loan is a type of uncollateralized lending that has become popular across a number of decentralized finance (DeFi) protocols based on the Ethereum network.This speed and other unique properties are enabled by Ethereum, which aims to expand blockchain to other use cases beyond simple transactions. Flash loans are one popular experiment amid Ethereum's decentralized finance movement, which has cultivated financial alternatives without intermediaries. Instead, by using DeFi apps, users are supposed to be more in control of the financial instruments, such as loans, derivatives and other contracts.</h4>
                    </div>
                    <div className='col-sm'>
                        <img className='cube' src={Cone} alt='cube'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage