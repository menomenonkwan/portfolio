import { FaRegFileAlt } from 'react-icons/fa';
import { Bio } from './assets/Content';
import { Link } from 'react-router-dom';
import Resume from './assets/images/BrannonLee_Resume.pdf'

const About = () => {
  return ( 
    <div className="container">
    <div id="about-card">
      <div className="about">
        <h3>A LITTLE ABOUT ME...</h3>
        <hr />
        <Bio />
        <Link to={Resume} className="resume" target="_blank">Resum&eacute; <FaRegFileAlt /></Link>
      </div>

    </div>
    </div>
   );
}
 
export default About;