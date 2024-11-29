import './App.css';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryGrid } from './components/CountryGrid';
import { Link } from 'react-router-dom';
import { CountryDetails } from './pages/CountryDetails';
import { LandingPage } from './pages/LandingPage';
import LinuxInformation from './pages/Linux.js';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <header>
       <Link to ="/landingPage"><h1 className={StyleSheet.name.common}>Countries</h1></Link>
        </header>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<CountryGrid />} />  
          <Route path="/country/:name" element={<CountryDetails />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/linux" element={<LinuxInformation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
