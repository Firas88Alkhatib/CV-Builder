import { useSelector } from 'react-redux'
import actions from '../Redux/Actions'
import InputField from './InputField'
import Level from './Level'
import RemoveLink from './RemoveLink/RemoveLink'
import { updateSkillAction } from '../Redux/Actions/UpdateSkillAction'
import ApplicationState from '../Types/ApplicationState'
import ISkill, { SkillLevel } from '../Types/Skill'

interface SkillProps {
  cid: number
}
const Skill = ({ cid }: SkillProps) => {
  const skill = useSelector<ApplicationState, ISkill | undefined>(state => state.skills.find(item => item.id === cid))
  return (
    <div className="skill container">
      <InputField value={skill?.name} cid={cid} label="Skill" name="name" action={updateSkillAction} />
      <Level value={skill?.level?.toString()} actionType={actions.UPDATE_SKILL} options={SkillLevel} cid={cid}></Level>
      <RemoveLink actionType={actions.REMOVE_SKILL} cid={cid} />
      <div className="break-line"></div>
    </div>
  )
}

export default Skill
