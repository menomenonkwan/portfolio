import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// sections
import Landing from './homeComponents/Landing';
import About from './homeComponents/About';
import Skills from './homeComponents/Skills';
import FeaturedProjects from './homeComponents/projects/FeaturedProjects';
import ProjectsGridSm from './homeComponents/projects/ProjectsGridSm';
import ProjectsGrid from './homeComponents/projects/ProjectsGrid';
import Contact from './homeComponents/contact/Contact';

// components
import SideMenu from '../../components/SideMenu';
import TopMenu from '../../components/TopMenu';


export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState({
    width: undefined,
  });

  useEffect(() => {
    const onScroll = (e) => {
      const screenWidth = e.target.documentElement.scrollWidth;
      const screenHeight = e.target.documentElement.scrollTop;

      if (window.innerWidth < 700) { return; }

      if(screenHeight > 400 && screenWidth > 700) {
        setMenuIsOpen(true);
      } else {
        setMenuIsOpen(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth({
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth.width < 750) {
      setMenuIsOpen(false);
    }
  }, [screenWidth, menuIsOpen]);

  return (
    <motion.div 
      id="home"  
      initial={{ opacity: 0 }}
      animate ={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {menuIsOpen && <TopMenu />}
      </AnimatePresence>

      <Landing />
      <About />
      <Skills />
      <FeaturedProjects />
      {window.innerWidth < 800 && <ProjectsGridSm />}
      {window.innerWidth >= 800 && <ProjectsGrid />}
      <Contact />

      <AnimatePresence>
        {menuIsOpen && <SideMenu />}
      </AnimatePresence>
    </motion.div >
  )
}
