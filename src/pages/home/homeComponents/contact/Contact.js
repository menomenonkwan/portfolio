import { FadeInAndSlideLeftVisible, FadeInAndSlideRightVisible } from '../../../../components/FadeIn';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

// styles & icons
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <h4>Say Hi!</h4>
        <div className="contact-wrapper">
          <FadeInAndSlideRightVisible addedClass='contact-form'>
            <ContactForm />
          </FadeInAndSlideRightVisible>
          <FadeInAndSlideLeftVisible addedClass='contact-list' >
            <ContactList />
          </FadeInAndSlideLeftVisible>
        </div>
      </div>
    </section>
  )
}
