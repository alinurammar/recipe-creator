import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipeGenerator from './pages/RecipeGenerator';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import '@fontsource-variable/inter';
import './App.css';

import homeImage from './assets/home.svg';
import aboutImage from './assets/about.svg';
import skilletImage from './assets/skillet.svg';
import iconImage from './assets/icon.svg';

function App() {
  return (
    <div className='page-container'>
      <div className='container'>
        <Router>
          <div className='top-pane'>

            {/* Icon section */}
            <img src={iconImage}></img>

            {/* Header */}
            <div className='header'>

              {/* Welcome Section */}
              <div>
                <div className='header-text'>
                  <div className='title'>Welcome to  PantryPal!</div>
                  <div className='subtitle'>Happy you're here - Let's get cooking!</div>
                </div>
              </div>

              {/* Navigation Bar */}
              <div>
                <nav className="navigation-bar">
                  <Link to="/">{<img src={homeImage} alt="Home" />}</Link>
                  <Link to="/recipe-generator"><img src={skilletImage} alt="Recipe Generator" /></Link>
                  <Link to="/about-us"><img src={aboutImage} alt="About Us" /></Link>
                </nav>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe-generator" element={<RecipeGenerator />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;