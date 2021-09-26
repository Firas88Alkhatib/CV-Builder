import Portal from 'Components/Portal/Portal'
import './ConfirmRemoveModal.scss'
interface IProps {
  onRemove: () => void
  onCancel: () => void
}
const ConfirmRemoveModal = ({ onCancel, onRemove }: IProps) => {
  return (
    <Portal>
      <div className="confirm-remove-modal">
        <p>Are you sure you want to remove this item ?</p>
        <div>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onRemove}>Remove</button>
        </div>
      </div>
    </Portal>
  )
}

export default ConfirmRemoveModal
