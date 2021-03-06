import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaCodepen, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactForm from './layout/Form';
import SentForm from './layout/SentForm';

const Contact = () => {
  const [formSent, setFormSent ] = useState(false);

  const send = () => {
    setFormSent(true);
  }

  return ( 
    <div className="container">
    <div id="contact-card">
      <div className="contact-wrapper">
        <h3>CONTACT ME</h3>
        <div className="contact-container">
          <AnimatePresence>
          {formSent
            ? <SentForm />
            : <ContactForm send={send}/>
          }
          </AnimatePresence>
          <div className="contact-icons">
            <ul>
              <li>
                <a href="https://github.com/menomenonkwan" target="_blank" rel="noreferrer">
                  <FaGithub /> github.com/menomenonkwan
                </a>
              </li>
              <li>
                <a href="https://codepen.io/menomenonkwan" target="_blank" rel="noreferrer">
                  <FaCodepen /> codepen.io/menomenonkwan
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/brannon-lee/" target="_blank" rel="noreferrer">
                  <FaLinkedin /> linkedin.com/in/brannon-lee
                </a>
              </li>
              <li>
                <a href="mailto:brannon.r.lee@gmail.com?subject=BrannonLee - Web-Development Inquiry" target="_blank" rel="noreferrer">
                  <FaEnvelope /> brannon.r.lee@gmail.com
                </a>
              </li>
              <li>
                <Link to="/" onClick={ (event) => event.preventDefault() }>
                  <FaPhone /> (650) 773-7229
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
   );
}
 
export default Contact;