import { FadeInWhenVisible } from '../../../../components/FadeIn';
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

          <FadeInWhenVisible addedClass='contact-list' >
            <ContactList />
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
