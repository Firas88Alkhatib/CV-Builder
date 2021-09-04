import { useSelector } from 'react-redux'
import actions from '../Redux/Actions'
import AddLink from './AddLink'
import Skill from './Skill'
import ApplicationState from '../Types/ApplicationState'
import ISkills from 'Types/Skill'
import Accordion from 'Components/Accordion'

const Skills = () => {
  const skills = useSelector<ApplicationState, ISkills[]>(state => state.skills)
  return (
    <Accordion title="Skills">
      <div className="skills section">
        {skills.map(item => {
          return <Skill key={item.id} cid={item.id} />
        })}
        <AddLink label="Add Skill" actionType={actions.ADD_SKILL} />
      </div>
    </Accordion>
  )
}

export default Skills
