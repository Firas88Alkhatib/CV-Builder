import { useSelector } from 'react-redux'

import actions from '../Redux/Actions'
import InputField from './InputField'
import TextField from './TextField/TextField'
import StartEnd from './StartEnd'
import RemoveLink from './RemoveLink/RemoveLink'
import { updateEducationAction } from '../Redux/Actions/UpdateEducationAction'

import ApplicationState from '../Types/ApplicationState'
import IEducation from '../Types/Education'

interface EducationProps {
  cid: number
}
const Education = ({ cid }: EducationProps) => {
  const education = useSelector<ApplicationState, IEducation | undefined>(state => state.educations?.find(item => item.id === cid))
  return (
    <div className="education container">
      <InputField value={education?.school} cid={cid} label="School" name="school" action={updateEducationAction} />
      <InputField value={education?.degree} cid={cid} label="Degree" name="degree" action={updateEducationAction} />
      <InputField value={education?.city} cid={cid} label="City" name="city" action={updateEducationAction} />
      <StartEnd actionType={actions?.UPDATE_EDUCATION} startDate={education?.startDate} endDate={education?.endDate} cid={cid} />
      <TextField value={education?.description} cid={cid} label="Description" name="description" actionType={actions.UPDATE_EDUCATION}></TextField>
      <RemoveLink actionType={actions.REMOVE_EDUCATION} cid={cid} />
      <div className="break-line"></div>
    </div>
  )
}

export default Education
