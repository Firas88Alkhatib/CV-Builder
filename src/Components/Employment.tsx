import { useSelector } from 'react-redux'
import actions from '../Redux/Actions'
import InputField from './InputField'
import TextField from './TextField/TextField'
import StartEnd from './StartEnd'
import ApplicationState from '../Types/ApplicationState'
import RemoveLink from './RemoveLink/RemoveLink'
import { updateEmploymentAction } from '../Redux/Actions/UpdateEmploymentAction'
import IEmployment from '../Types/EmploymentHistory'

interface EmploymentProps {
  cid: number
}
const Employment = ({ cid }: EmploymentProps) => {
  const employment = useSelector<ApplicationState, IEmployment | undefined>(state => state.employmentHistory?.find(item => item.id === cid))

  return (
    <div className="employment container">
      <InputField value={employment?.jobTitle} cid={cid} label="Job Title" name="jobTitle" action={updateEmploymentAction} />
      <InputField value={employment?.employer} cid={cid} label="Employer" name="employer" action={updateEmploymentAction} />
      <InputField value={employment?.city} cid={cid} label="City" name="city" action={updateEmploymentAction} />
      <StartEnd actionType={actions.UPDATE_EMPLOYMENT} startDate={employment?.startDate} endDate={employment?.endDate} cid={cid} />
      <TextField value={employment?.description} cid={cid} label="Description" name="description" actionType={actions.UPDATE_EMPLOYMENT}></TextField>
      <RemoveLink actionType={actions.REMOVE_EMPLOYMENT} cid={cid} />
    </div>
  )
}

export default Employment
