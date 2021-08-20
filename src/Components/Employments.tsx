import { useSelector } from 'react-redux'
import ApplicationState from '../Types/ApplicationState'
import AddLink from './AddLink'
import Employment from './Employment'
import actions from '../Redux/Actions'
import IEmploymentHistory from 'Types/EmploymentHistory'

const Employments = () => {
  const employmentHistory = useSelector<ApplicationState, IEmploymentHistory[]>(state => state.employmentHistory)
  return (
    <div>
      <h2>Employment History</h2>
      <div className="employments section">
        {employmentHistory.map(item => (
          <Employment key={item.id} cid={item.id} />
        ))}

        <div className="">
          <AddLink label="Add Employment" actionType={actions.ADD_EMPLOYMENT} />
        </div>
      </div>
    </div>
  )
}

export default Employments
