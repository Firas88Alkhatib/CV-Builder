import { useSelector } from 'react-redux'
import actions from '../Redux/Actions'
import AddLink from './AddLink'
import Language from './Language'
import ApplicationState from '../Types/ApplicationState'
import ILanguage from 'Types/Language'

const Languages = () => {
  const languages = useSelector<ApplicationState, ILanguage[]>(state => state.languages)
  return (
    <div>
      <h2>Languages</h2>
      <div className="languages section">
        {languages.map(item => {
          return <Language key={item.id} cid={item.id} />
        })}
        <AddLink label="Add Language" actionType={actions.ADD_LANGUAGE} />
      </div>
    </div>
  )
}

export default Languages
