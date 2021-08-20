import { useSelector } from 'react-redux'
import actions from '../Redux/Actions'
import AddLink from './AddLink'
import Skill from './Skill'
import ApplicationState from '../Types/ApplicationState'
import ISkills from 'Types/Skill'

const Skills = () => {
  const skills = useSelector<ApplicationState, ISkills[]>(state => state.skills)
  return (
    <div>
      <h2>Skills</h2>
      <div className="skills section">
        {skills.map(item => {
          return <Skill key={item.id} cid={item.id} />
        })}
        <AddLink label="Add Skill" actionType={actions.ADD_SKILL} />
      </div>
    </div>
  )
}

export default Skills
