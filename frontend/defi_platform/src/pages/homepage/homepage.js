import React,{useCallback,useEffect} from 'react'
import Rellax from 'rellax'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import shape2 from '../../assets/Imgs/shape2.png';
import Footer from '../../components/Footer/Footer';
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
                      <div className='heading animate'><h1>Arbinom</h1></div>
                      <div className='description'><h2>Your arbitrage flash loan platform</h2></div>
                      <div className='moon_div'><img className='moon' src={Moon} alt="astronaut"/></div>
                      <div className='saturn_div'><img className='saturn' src={Saturn} alt="astronaut"/></div> 
            </div>
        </div>
        <div className='Divider'>
            <h1>Why Flash Loans?</h1>
        </div>
        <div className='sections'>
            <div className='handleLine'></div>
            <div className='grid'>
            <div className='sec1'>
                <div className='row'>
                    <div className='col-sm h1'>
                    <h2 >What is a flash loan?</h2>
                <h4>A flash loan is an uncollateralized loan (meaning the borrower doesn’t need to put up any personal assets as security) where crypto assets are borrowed and repaid immediately in a single, instantaneous transaction. The functionality was first rolled out in 2020 by DeFi protocol AAVE, but has since been used and developed across the DeFi space.</h4>
                    </div>
                    <div className='col-sm'>
                        <img className='cube' src={cube} alt='cube'/>
                    </div>
                    </div>
                </div>
                <div className='sec2'>
                <div className='row'>
                    <div className='col-sm'>
                         <h2>Smart contracts: the backbone of flash loans</h2>
                        <h4>When we talk about flash loans, what we’re really talking about is a smart contract. Every flash loan is basically a bespoke smart contract that agrees to do X if Y happens. In the context of a flash loan, the smart contract operates as follows:  If X+10 can be repaid within seconds – something that will depend on the specifics of the arbitrage opportunity itself – then X can be borrowed right now. </h4>
                        </div>
                        <div className='col-sm'>
                        <img className='cube' src={Diamond} alt='cube'/>
                    </div>
                    </div>
                </div>
                <div className='sec3'>
                <div className='row'>
                    <div className='col-sm'>
                        <h2>Key features of flash loans</h2>
                        <h4>Conventional loan systems usually request for collateral before giving loans. There is no need for any form of collateral with flash loans – the contract simply will not execute unless it can immediately be repaid with interest. Flash loans are executed instantaneously – they are completed and repaid in a matter of seconds in order to take advantage of fast-moving price fluctuations.In the case of flash loans, smart contracts govern the transaction, and ensure that the loan is paid back before the transaction is concluded. </h4>
                    </div>
                    <div className='col-sm'>
                        <img className='cube' src={Pyramid} alt='cube'/>
                    </div>
                    </div>
                </div>
                <div className='sec4'>
                <div className='row'>
                    <div className='col-sm'>
                        <h2>Flash loan limitations and risks</h2>
                        <h4>As with any new technology, opportunists are always on the lookout for ways to manipulate flash loans for their own ends. Flash loans are finding ever more creative ways to exploit vulnerabilities in lending protocols – here are a few of the main scams involving flash loans so far.Vulnerabilities in protocols are common, and the ability of flash loans to exploit these on grand scale makes them a great vehicle for eagle-eyed hackers. These types of scam will likely diminish as the industry becomes aware of these new attack vectors but for now, they’re a pretty notorious drawback of the flash loan.</h4>
                    </div>
                    <div className='col-sm'>
                        <img className='cube' src={Cone} alt='cube'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footerH'>
        <Footer/>
        </div>
    </div>
  )
}

export default Homepage