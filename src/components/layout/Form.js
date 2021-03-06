import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

export default function ContactForm({ send }) {
  function sendEmail(e) {
    emailjs.sendForm('service_wpours6', 'contact-template', e.target, 'user_j9R3moFxaJDiJLd4iAQ8v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      send();
  }

  return (
    <form id="contact-form" className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <input type="text" name="name" placeholder="Name..." required />
      <input type="email" name="email" placeholder="Email..." required />
      <input type="text" name="subject" placeholder="Subject..." />
      <textarea name="message" placeholder="How can I help?" />
      <motion.input className="submit" type="submit" value="Send" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} />
    </form>
  );
}