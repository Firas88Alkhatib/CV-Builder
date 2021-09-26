import './CircleColorPicker.scss'
import { useState } from 'react'
import { rgbToHex } from 'Helpers/Util'

interface IProps {
  colors: string[]
  initialColor?: string
  onClick?: (color: string) => void
}

const CircleColorPicker = ({ colors, initialColor, onClick }: IProps) => {
  const [selected, setSelected] = useState<string>(initialColor || colors[0])
  const onclickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    const hex = rgbToHex(event.currentTarget.style.color)
    setSelected(hex!)
    if (onClick) {
      onClick(hex!)
    }
  }
  return (
    <div className="circle-color-picker">
      {colors.map(color => {
        const colorClass = color.toUpperCase() === selected.toUpperCase() ? 'selected' : ''
        return <span key={color} className={colorClass} style={{ color }} onClick={onclickHandler}></span>
      })}
    </div>
  )
}

export default CircleColorPicker
