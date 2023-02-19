import React,{useCallback} from 'react'
import particlesOptions from "../../particles.json";
import Particles from "react-particles";
import FLBox from '../../components/FlashLoan Box/FLBox';
import Footer from '../../components/Footer/Footer';
import { loadFull } from "tsparticles";
import './Flashloan.css';

function Flashloan() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
  return (
    <div className='FlashFrame'>
        <div className='box'>
            <FLBox/>
        </div>
        <Footer/>
    </div>
  )
}

export default Flashloan