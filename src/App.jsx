// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import AlumniDirectory from './pages/AlumniDirectory';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import NewsUpdates from './pages/NewsUpdates'; // Import the new page

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/alumni" element={<AlumniDirectory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news-updates" element={<NewsUpdates />} /> {/* Add the new route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;