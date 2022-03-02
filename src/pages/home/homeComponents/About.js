import { Link } from 'react-router-dom';
import { BioPartOne, BioPartTwo, BioPartThree } from '../../../assets/Content';
import { FadeInAndSlideLeftVisible, FadeInAndSlideRightVisible } from '../../../components/FadeIn';

// styles & icons & images
import './About.css';
import profilePic from '../../../assets/images/profile_pic_one.jpg';
import Resume from '../../../assets/images/BrannonLee_Resume.pdf';
import { FaRegFileAlt } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className='about'>

          <FadeInAndSlideRightVisible addedClass="about-content">
            <h2 className='about-heading'>A Little About Me...</h2>
            <BioPartOne />
            <div className="resume-wrapper">
              <Link to={Resume} className="resume" target="_blank">Resum&eacute; <FaRegFileAlt /></Link>
            </div>
            <BioPartTwo />
            <BioPartThree />
          </FadeInAndSlideRightVisible>

          <FadeInAndSlideLeftVisible addedClass="about-frame">
            <div 
              className="profile-picture"
              style={{ backgroundImage: `url(${profilePic})`}}
            />
          </FadeInAndSlideLeftVisible>

        </div>
      </div>
    </section>
  )
}