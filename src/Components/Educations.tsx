import { useSelector, shallowEqual } from 'react-redux'
import ApplicationState from '../Types/ApplicationState'
import AddLink from './AddLink'
import actions from '../Redux/Actions'
import Education from './Education'
import IEducation from '../Types/Education'
import Accordion from 'Components/Accordion'

const Educations = () => {
  const educations = useSelector<ApplicationState, IEducation[]>(state => state.educations, shallowEqual)
  return (
    <Accordion title="Education">
      <div className="education">
        {educations.map(item => (
          <Accordion expanded={false} className="sub-accordion" key={item.id} title={item.degree}>
            <Education key={item.id} cid={item.id} />
          </Accordion>
        ))}
        <AddLink label="Add Education" actionType={actions.ADD_EDUCATION} />
      </div>
    </Accordion>
  )
}

export default Educations
