import { useSelector } from 'react-redux'
import actions from '../Redux/Actions'
import { updateLinkAction } from '../Redux/Actions/UpdateLinkAction'
import InputField from './InputField'
import RemoveLink from './RemoveLink'
import ApplicationState from 'Types/ApplicationState'
import ILink from 'Types/link'

interface LinkProps {
  cid: number
}
const Link = ({ cid }: LinkProps) => {
  const link = useSelector<ApplicationState, ILink | undefined>(state => state.links.find(item => item.id === cid))
  return (
    <div className="link container">
      <InputField value={link?.name} cid={cid} label="Label" name="name" action={updateLinkAction} />
      <InputField value={link?.link} cid={cid} label="Link" name="link" action={updateLinkAction} />
      <RemoveLink actionType={actions.REMOVE_LINK} cid={cid} />
      <div className="break-line"></div>
    </div>
  )
}

export default Link
