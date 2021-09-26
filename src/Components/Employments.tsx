import { useSelector, shallowEqual } from 'react-redux'
import ApplicationState from '../Types/ApplicationState'
import AddLink from './AddLink/AddLink'
import Employment from './Employment'
import actions from '../Redux/Actions'
import IEmploymentHistory from 'Types/EmploymentHistory'
import Accordion from 'Components/Accordion/Accordion'

const Employments = () => {
  const employmentHistory = useSelector<ApplicationState, IEmploymentHistory[]>(state => state.employmentHistory, shallowEqual)

  return (
    <Accordion title="Employment History">
      <div className="employments">
        {employmentHistory.map(item => (
          <Accordion expanded={false} className="sub-accordion" key={item.id} title={item.jobTitle}>
            <Employment cid={item.id} />
          </Accordion>
        ))}

        <AddLink label="Add Employment" actionType={actions.ADD_EMPLOYMENT} />
      </div>
    </Accordion>
  )
}

export default Employments
