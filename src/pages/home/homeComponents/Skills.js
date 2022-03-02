import { skillSet, studySet } from '../../../assets/Content';
import { FadeInAndGrowWhenVisible } from '../../../components/FadeIn';

// styles
import './Skills.css';

export default function ToolKit() {

  return (
    <section id="skills">
      <div className='title'><h2>My Skills</h2></div>
      <div className="skillset">
        {skillSet.map(skill => (
          <FadeInAndGrowWhenVisible key={skill.id} >
          <div key={skill.id} className="skill">
            {skill.icon}
            <p className='skill-name'>{skill.name}</p>
          </div>
          </FadeInAndGrowWhenVisible>
        ))}
      </div>
      <div className='title'><h2>Developing Skills</h2></div>
      <div className="skillset">
        {studySet.map(skill => (
          <FadeInAndGrowWhenVisible key={skill.id} >
          <div key={skill.id} className="skill">
            {skill.icon}
            <p className='skill-name'>{skill.name}</p>
          </div>
          </FadeInAndGrowWhenVisible>
        ))}
      </div>
    </section>
  )
}