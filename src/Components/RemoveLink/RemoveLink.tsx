import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ConfirmRemoveModal from 'Components/ConfirmRemoveModal/ConfirmRemoveModal'
import './removeLink.scss'

interface AddLinkProps {
  actionType: string
  cid: number
}
const RemoveLink = ({ actionType, cid }: AddLinkProps) => {
  const dispatch = useDispatch()
  const [isConfirm, setConfirm] = useState(false)

  const onClickHandler = () => {
    setConfirm(true)
  }
  const onCancelHandler = () => {
    setConfirm(false)
  }
  const onRemoveHandler = () => {
    dispatch({ type: actionType, payload: { id: cid } })
  }
  return (
    <>
      {isConfirm && <ConfirmRemoveModal onCancel={onCancelHandler} onRemove={onRemoveHandler} />}
      <div className="remove-link" onClick={onClickHandler}>
        <div className="remove-symbol">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <polygon
              transform="rotate(45,0,0) translate(6 -14)"
              points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"
            ></polygon>
          </svg>
        </div>
        <span className="remove-link-label">Remove</span>
      </div>
    </>
  )
}

export default RemoveLink
