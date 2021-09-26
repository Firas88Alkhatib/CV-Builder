import { createPortal } from 'react-dom'
import './Portal.scss'

interface IProps {
  children: React.ReactNode
}
const Portal = ({ children }: IProps) => {
  return createPortal(
    <div className="portal">
      <div className="portal__content">{children}</div>
    </div>,
    document.getElementById('portal')!
  )
}

export default Portal
