import { FaRegFileAlt } from 'react-icons/fa';
import { Bio, BioExtended } from './assets/Content';
import { Link } from 'react-router-dom';
import Resume from './assets/images/BrannonLee_Resume.pdf'
import profile from './assets/images/prof_img.jpg'


const About = () => {
  return ( 
    <div className="container">
    <div id="about-card">
      <div className="about">
      <img className="prof-pic" src={profile} alt="profile"/>
        <h3>A LITTLE ABOUT ME...</h3>
        <hr />
        <Bio />
        <Link to={Resume} className="resume" target="_blank">Resum&eacute; <FaRegFileAlt /></Link>
        <BioExtended />
      </div>

    </div> 
    </div>
   );
}
 
export default About;