import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

// styles & icons
import './Header.css';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState({
    width: undefined,
  });

  const variants = {
    initial: { opacity: 0, y: '-100vh' },
    animate: { opacity: 1, y: 0,
      transition: { duration: 2, delay: 3, type: 'spring',
      stiffness: 90,
      mass: 0.7,
      damping: 15,} 
    } 
  };
  const mobileVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 } 
  };

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
    if (screenWidth.width > 750 && menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [screenWidth, menuIsOpen]);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <motion.div 
      className='navbar'
      variants={(window.innerWidth < 750) ? mobileVariants : variants}
      initial="initial"
      animate="animate"
    >
      <div className="brand">
        <h1><HashLink to="/#home">WebDeveloper</HashLink></h1>
        <h3>Front-End UI/UX Development</h3>
        {/* <h4>HTML / CSS / JavaScript</h4> */}
      </div>

      <nav className={`nav ${menuIsOpen ? 'menu-opened' : ''}`}>
        <ul>
          <li className='nav-title'>
            <h3>Brannon Lee</h3>
          </li>
          <li>
            <HashLink to="/#about" onClick={toggleMenu}>About</HashLink>
          </li>
          <li>
            <HashLink to="/#featured-projects" onClick={toggleMenu}>Projects</HashLink>
          </li>
          <li>
            <HashLink to="/#contact" onClick={toggleMenu}>Contact</HashLink>
          </li>
        </ul>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`menu-toggle-middle ${menuIsOpen ? 'open' : ''}`}></div>
      </div>

    </motion.div>
  )
}
