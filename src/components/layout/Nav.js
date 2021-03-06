import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <motion.li whileTap={{scale: 0.9}}><Link to="#projects-card" smooth>Projects</Link></motion.li>
        <motion.li whileTap={{scale: 0.9}}><Link to="#about-card" smooth>About</Link></motion.li>
        <motion.li whileTap={{scale: 0.9}}><Link to="#contact-card" smooth>Contact</Link></motion.li>
      </ul>
    </nav>
  );
}

export default Nav;