import { motion } from 'framer-motion';

const FadeInWhenVisible = ({ addedClass, children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      className={addedClass}
    >
      {children}
    </motion.div>
  );
}

const FadeInAndGrowWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.25 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.5, y: 40 }
      }}
    >
      {children}
    </motion.div>
  );
}

const FadeInAndSlideRightVisible = ({ addedClass, children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
      }}
      className={addedClass}
    >
      {children}
    </motion.div>
  );
}

const FadeInAndSlideLeftVisible = ({ addedClass, children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 }
      }}
      className={addedClass}
    >
      {children}
    </motion.div>
  );
}

export {
  FadeInWhenVisible, FadeInAndGrowWhenVisible, FadeInAndSlideRightVisible, FadeInAndSlideLeftVisible
}