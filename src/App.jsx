//Import the route modules
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react'; 

// TODO Import the various components
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contacts from './Components/Contacts';
import NotFound from './Components/NotFound';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Blog from './Components/Blog';
import Testimonials from './Components/Testimonials';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Router>
        <div className='container-fluid'>
          {/* Navigation links */}
          <nav id='main-nav'>
            <button id="menu-toggle" aria-label="Toggle Menu"
              onClick={toggleMenu} className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}>
              <span className='hamburger-line'></span>
              <span className='hamburger-line'></span>
              <span className='hamburger-line'></span>
            </button>
            <ul id='nav-menu' className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Contacts</Link></li>
              <li><Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link></li>
              <li><Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
              <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            </ul>
          </nav>
          {/* Routes for the individual pages/components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Notfound" element={<NotFound/>} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Gallery/*" element={<Gallery />} />
            <Route path="/Blog/" element={<Blog />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
