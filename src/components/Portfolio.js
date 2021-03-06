import React from 'react';
import Display from './Display';
import Footer from './layout/Footer';
import QuickMenu from './layout/QuickMenu';
import { motion } from 'framer-motion';
import ScrollToTop from './layout/ScrollToTop';
import Banner from './layout/Banner';

const Portfolio = () => {
  return ( 
    <React.Fragment>
      <ScrollToTop />
      <div className="portfolio-container">
        <motion.div
          style={{zIndex: 2, width: '100%'}}
          initial={{ opacity: 0, y: '-100vh' }}
          animate={{ opacity: 1, y: 0,
            transition: { duration: 0.5, delay: 0.5, type: 'spring',
            stiffness: 90,
            mass: 0.7,
            damping: 15,} 
          }}
          exit={{ opacity: 0 }}        
        >
          <QuickMenu addAClass="portfolio-mobile-menu"/>
        </motion.div >
        <Display />
        <motion.div 
          style={{width:'100%'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,
            transition: { duration: 0.5, delay: 0.5} 
          }}
          exit={{ opacity: 0 }}
        >
          <Banner />
          <Footer />
        </motion.div>
      </div>
    </React.Fragment>
   );
}
 
export default Portfolio;