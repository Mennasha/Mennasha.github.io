import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FixedCandidateIcon from './components/FixedCandidateIcon';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Program from './pages/Program';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Inquiry from './pages/Inquiry';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <FixedCandidateIcon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

