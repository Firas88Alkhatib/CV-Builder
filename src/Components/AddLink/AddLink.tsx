import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import './addLink.scss'

interface AddLinkProps {
  label: string
  actionType: string
}
const AddLink = ({ actionType, label }: AddLinkProps) => {
  const dispatch = useDispatch()

  const onClickHandler = useCallback(() => {
    dispatch({ type: actionType })
  }, [actionType, dispatch])

  return (
    <div className="add-link" onClick={onClickHandler}>
      <div className="plus-symbol">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <polygon points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"></polygon>
        </svg>
      </div>
      <span className="add-link-label">{label}</span>
    </div>
  )
}

export default AddLink
