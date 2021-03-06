import React from 'react';
import Footer from "./layout/Footer";
import SubMenu from "./layout/SubMenu";
import { motion } from 'framer-motion';

const NotFound = () => {
  return ( 
      <React.Fragment>
        <SubMenu addAClass="portfolio-mobile-menu"/>
        <motion.div 
          className="portfolio-container"
          style={{width:'100%'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,
            transition: { duration: 0.5, delay: 0.5} 
          }}
          exit={{ opacity: 0 }}
        >
          <h2>Oh No!!! Page Not Found...</h2>
        </motion.div>
        <Footer />
      </React.Fragment>
   );
}
 
export default NotFound;