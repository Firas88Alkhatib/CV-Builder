import { useSelector } from 'react-redux'
import actions from '../Redux/Actions'
import InputField from './InputField'
import Level from './Level'
import RemoveLink from './RemoveLink'
import { updateLanguageAction } from '../Redux/Actions/UpdateLanguageAction'
import ApplicationState from '../Types/ApplicationState'
import ILanguage, { LangLevel } from '../Types/Language'

interface LanguageProps {
  cid: number
}
const Language = ({ cid }: LanguageProps) => {
  const language = useSelector<ApplicationState, ILanguage | undefined>(state => state.languages.find(item => item.id === cid))
  return (
    <div className="language container">
      <InputField value={language?.name} cid={cid} label="Language" name="name" action={updateLanguageAction} />
      <Level value={language?.level?.toString()} actionType={actions.UPDATE_LANGUAGE} options={LangLevel} cid={cid}></Level>
      <RemoveLink actionType={actions.REMOVE_LANGUAGE} cid={cid} />
      <div className="break-line"></div>
    </div>
  )
}

export default Language
