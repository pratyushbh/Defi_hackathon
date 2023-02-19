import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Navbar from './components/navbar/Navbar';
import Flashloan from './pages/FlashLoan/Flashloan';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/FlashLoans" element={<Flashloan/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
