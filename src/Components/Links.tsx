import { useSelector } from 'react-redux'
import AddLink from './AddLink/AddLink'
import actions from '../Redux/Actions'
import Link from './Link'
import ApplicationState from 'Types/ApplicationState'
import ILink from 'Types/link'
import Accordion from 'Components/Accordion/Accordion'

const Links = () => {
  const links = useSelector<ApplicationState, ILink[]>(state => state.links)
  return (
    <Accordion title="Websites & Social media Links">
      <div className="links section">
        {links.map(item => {
          return <Link key={item.id} cid={item.id} />
        })}

        <div className="">
          <AddLink label="Add Link" actionType={actions.ADD_LINK} />
        </div>
      </div>
    </Accordion>
  )
}

export default Links
