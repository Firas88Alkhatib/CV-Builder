import { useDispatch } from 'react-redux'
import swal from 'sweetalert'

interface AddLinkProps {
  actionType: string
  cid: number
}
const RemoveLink = ({ actionType, cid }: AddLinkProps) => {
  const dispatch = useDispatch()
  const onClickHandler = () => {
    swal('Are you sure ?', { buttons: ['Cancel', 'Remove'], dangerMode: true }).then(value => {
      value && dispatch({ type: actionType, payload: { id: cid } })
    })
  }
  return (
    <div className="remove-link" onClick={onClickHandler}>
      <div className="remove-symbol">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <polygon transform="rotate(45,0,0) translate(6 -14)" points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"></polygon>
        </svg>
      </div>
      <span className="remove-link-label">Remove</span>
    </div>
  )
}

export default RemoveLink
