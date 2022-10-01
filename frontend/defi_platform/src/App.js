import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Conversion from './pages/Conversion/Conversion';
import Pool from './pages/StakePool/Pool';
import Underwork from './components/Underwork/Underwork';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Conversion" element={<Conversion/>}/>
          <Route path="/StakePool" element={<Pool/>} />
          <Route path="/Multi_sig_wallet" element={<Underwork/>} />
          <Route path="/FlashLoans" element={<Underwork/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
