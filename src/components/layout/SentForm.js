import { motion } from 'framer-motion';

export default function SentForm() {
  return (
    <motion.div 
      className="success-sent"
      initial={{ opacity: 0, scale: 0.1 }}
      animate ={{ opacity: 1, scale: 1, 
        transition: { duration: 0.25 } 
      }}
    >
      <h3>Awesome!</h3>
      <p>Thank you for the message.</p>
      <p>I will get back to you momentarily.</p>
    </motion.div>
  );
}