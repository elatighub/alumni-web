import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import AlumniDirectory from './pages/AlumniDirectory';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import GetInvolved from './pages/GetInvolved';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  // Add darkMode state
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/alumni" element={<AlumniDirectory />} />
          <Route path="/events" element={<Events darkMode={darkMode} />} />
          <Route path="/news" element={<News />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;