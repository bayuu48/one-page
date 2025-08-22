import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Info from './page/Info';
import Button from './components/Button';
import './App.css';
import './components/Button.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div>
        {/* Navigasi */}
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/">
            <Button text="Beranda" />
          </Link>
          <Link to="/info" style={{ marginLeft: '10px' }}>
            <Button text="Informasi" />
          </Link>
        </nav>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;