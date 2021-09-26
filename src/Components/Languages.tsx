import { useSelector } from 'react-redux'
import actions from '../Redux/Actions'
import AddLink from './AddLink/AddLink'
import Language from './Language'
import ApplicationState from '../Types/ApplicationState'
import ILanguage from 'Types/Language'
import Accordion from 'Components/Accordion/Accordion'

const Languages = () => {
  const languages = useSelector<ApplicationState, ILanguage[]>(state => state.languages)
  return (
    <Accordion title="Languages">
      <div className="languages section">
        {languages.map(item => (
          <Language key={item.id} cid={item.id} />
        ))}
        <AddLink label="Add Language" actionType={actions.ADD_LANGUAGE} />
      </div>
    </Accordion>
  )
}

export default Languages
