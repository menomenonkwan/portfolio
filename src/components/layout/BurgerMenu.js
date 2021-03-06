import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QuickMenu from './QuickMenu';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsActive({isActive} === 'active' ? null : 'active');
  }

  return (  
    <div 
      className="burger" 
      onClick={toggleMenu}
    >
      <div className={isOpen ? "burger-middle open" : "burger-middle"}></div>
      <AnimatePresence>
        {isOpen && 
          <motion.div
            initial={{ opacity: 0 }}
            animate ={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}      
          >
            <QuickMenu addAClass={isActive} />
          </motion.div>
        }
      </AnimatePresence>
    </div> 
  );
}
 
export default BurgerMenu;