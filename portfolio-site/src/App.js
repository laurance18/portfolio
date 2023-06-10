import { useEffect, useState} from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import SkillsList from './components/SkillsList';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import Footer from './components/Footer';

import up_arrow from './assets/up-arrow.png';

function App() {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 300 ? setShowButton(true): setShowButton(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisiblity);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }

  return (
    <div className="App bg-primary h-screen bg-contain">
      <Navbar />
      <About />
      <SkillsList />
      <ProjectsList />
      <Contact />
      <Footer />
      {!isMobile && (
        <div className={` scrollToTop transition-opacity duration-500 ease-in-out ${showButton ? "opacity-100" : "opacity-0"}` }>
          <button className="fixed bottom-5 right-7 z-50 cursor-pointer p-4 "
          onClick={handleScrollToTop}>
          <img src={up_arrow} className="w-12" alt="scrollToTop" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
