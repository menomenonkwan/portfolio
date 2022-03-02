import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

// styles
import './ContactForm.css';
import './FormSubmission.css';

const formVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0 },
  exit: { opacity: 0, translateX: -100, transition: { duration: .25 } }
}

const submissionVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, 
    transition: { 
      duration: .25, 
      delay: .5,
      type: 'spring', 
      stiffness: 120, 
      damping: 8, 
      mass: 1.4,
    }  
  },
  exit: { opacity: 0, translateX: -100, transition: { duration: .25 } },
}

const FormSubmission = ({ error }) => {
  return (
    <motion.div 
      className="submission-success"
      variants={submissionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="submission-message">
        {error && <p>{error}</p>}
        {!error && 
          <>
            <h3>Awesome!</h3>
            <p>Thank you.</p>
            <p>I will get back to you momentarily.</p>
          </>
        }
      </div>
    </motion.div>
  )
}

export default function ContactForm() {
  const [error, setError] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;
  const form = useRef();

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    
    emailjs.sendForm(`${REACT_APP_SERVICE_ID}`, `${REACT_APP_TEMPLATE_ID}`, e.target, `${REACT_APP_USER_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          if(error) {
            setError('Whoops! Sorry, but there was a problem sending this message. It\'s not you, it\'s me. Contact me through brannon.r.lee@gmail.com or on linkedin. Thanks!');
          }
      });

    e.target.reset();
    setMessageSent(!messageSent);
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {!messageSent && 
          <motion.form 
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            ref={form} 
          >
            <label>Name:</label>
            <input type="text" name="contact_name" required />
            <label>Email:</label>
            <input type="email" name="contact_email" required />
            <label>Subject:</label>
            <input type="text" name="subject" />
            <label>Message:</label>
            <textarea name="message" placeholder='How can I help?' />
            <motion.input 
              className="btn" 
              type="submit" 
              value="Send" 
              whileTap={{scale: 0.8}} 
            />
          </motion.form>
        }
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {messageSent && <FormSubmission error={error} />} 
      </AnimatePresence>
    </>
  )
}
