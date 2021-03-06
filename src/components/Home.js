import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './layout/Footer';
import Cover from './Cover';
import SubMenu from './layout/SubMenu';
import SideBar from './layout/SideBar';
import { motion } from 'framer-motion';

const Home = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [sideMenuActive, setSideMenuActive] = useState(false);
  
  useEffect(() => {
    const onScroll = e => {
      const menu = document.querySelector('.sub-menu');
      const screenWidth = e.target.documentElement.scrollWidth;
      setScrollTop(e.target.documentElement.scrollTop);

      if(scrollTop > 375 && screenWidth > 700) {
        menu.classList.add('active');
        setSideMenuActive(true);
      } else if (window.innerWidth < 700) {
        return;
      } else {
        menu.classList.remove('active');
        setSideMenuActive(false);
      };     

    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return ( 
    <motion.div 
      initial={{ opacity: 0 }}
      animate ={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <Cover />
      <SubMenu addAClass="scroll-menu"/>
      {sideMenuActive && 
        <SideBar />
      }
      <Projects />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
}
 
export default Home;