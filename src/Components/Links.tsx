import { useSelector } from 'react-redux'
import AddLink from './AddLink'
import actions from '../Redux/Actions'
import Link from './Link'
import ApplicationState from 'Types/ApplicationState'
import ILink from 'Types/link'

const Links = () => {
  const links = useSelector<ApplicationState, ILink[]>(state => state.links)
  return (
    <div>
      <h2>Websites & Social Links</h2>
      <div className="links section">
        {links.map(item => {
          return <Link key={item.id} cid={item.id} />
        })}

        <div className="">
          <AddLink label="Add Link" actionType={actions.ADD_LINK} />
        </div>
      </div>
    </div>
  )
}

export default Links
