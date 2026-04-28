//Import the route modules
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useSate, useEffect } from 'react'; 

// TODO Import the various components
import Home from './components/Home';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';



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
      <li><a href="#">Menu</a>
        <ul>
          <li><Link to="/menu/pizzas" onClick={() => setIsMenuOpen(false)}>  Pizzas</Link></li>
          <li><Link to="/menu/pasta" onClick={() => setIsMenuOpen(false)}>Pasta</Link></li>
          <li><Link to="/menu/salads" onClick={() => setIsMenuOpen(false)}>Salads</Link></li>
          <li><Link to="/menu/drinks" onClick={() => setIsMenuOpen(false)}>Drinks</Link></li>
        </ul>
      </li>
      <li><Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Contacts</Link></li>
      <li><Link to="/quickbites" onClick={() => setIsMenuOpen(false)}>Quick Bites</Link></li>
      <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
    </ul>
  </nav>
  {/* Routes for the individual pages/components */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/footer" element={<Footer />} />
    <Route path="/Contacts" element={<Contacts />} />
    <Route path="/Notfound" element={<Notfound/>} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Gallery/*" element={<Gallery />} />
    <Route path="/Blog/" element={< Blog />} />
    <Route path="Testimonials" element={<Testimonials />} />
    

    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
</div>
</Router>
</>
)
}

export default App