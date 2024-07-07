
import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}
