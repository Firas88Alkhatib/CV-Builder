import { useHistory } from 'react-router-dom'
import Button from './Button'

const FooterPreview = () => {
  const history = useHistory()
  const onClickHandler = () => {
    history.push('/preview')
  }
  return (
    <div className="footer-preview">
      <Button label="Preview" onClick={onClickHandler} />
    </div>
  )
}

export default FooterPreview
