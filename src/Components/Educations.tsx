import { useSelector } from 'react-redux'
import ApplicationState from '../Types/ApplicationState'
import AddLink from './AddLink'
import actions from '../Redux/Actions'
import Education from './Education'
import IEducation from '../Types/Education'

const Educations = () => {
  const educations = useSelector<ApplicationState, IEducation[]>(state => state.educations)
  return (
    <div>
      <h2>Education</h2>
      <div className="education section">
        {educations.map(item => {
          return <Education key={item.id} cid={item.id} />
        })}
        <AddLink label="Add Education" actionType={actions.ADD_EDUCATION} />
      </div>
    </div>
  )
}

export default Educations
