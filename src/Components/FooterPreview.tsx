import { useDispatch } from 'react-redux'
import { updatePreviewModeAction } from '../Redux/Actions/UpdatePreviewModeAction.ts'
import Button from './Button'

const FooterPreview = () => {
  const dispatch = useDispatch()
  const onClickHandler = () => {
    dispatch(updatePreviewModeAction(true))
  }
  return (
    <div className="footer-preview">
      <Button label="Preview" onClick={onClickHandler} />
    </div>
  )
}

export default FooterPreview
