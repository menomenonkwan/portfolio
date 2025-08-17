import { Link } from 'react-router-dom';

// styles & icons
import './ContactList.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactList() {
  return (
    <>
      <ul>
        <li>
          <a href="mailto:brannon.r.lee@gmail.com?subject=BrannonLee - Web-Development Inquiry" target="_blank" rel="noreferrer">
            <FaEnvelope /> brannon&#46;r&#46;lee&#64;gmail&#46;com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brannon-lee/" target="_blank" rel="noreferrer">
            <FaLinkedin /> linkedin.com/in/brannon-lee
          </a>
        </li>
        <li>
          <a href="https://github.com/menomenonkwan" target="_blank" rel="noreferrer">
            <FaGithub /> github.com/menomenonkwan
          </a>
        </li>
        <li>
          <Link to="/#contact" onClick={ (event) => event.preventDefault() }>
            <FaPhone /> (650) 773-7229
          </Link>
        </li>
      </ul>      
    </>
  )
}
