import { useCallback, useState, useEffect } from 'react'
import './accordion.scss'

interface IAccordionProps {
  children: JSX.Element | JSX.Element[]
  title: string
  expanded?: boolean
  className?: string
}

const animationDuration = 300 //in milliseconds
const animationStyle = {
  transition: `max-height ${animationDuration}ms ease-in-out`,
  overflow: 'hidden'
}
const iconStyle = {
  transition: `transform ${animationDuration}ms ease-in-out`
}

const Accordion = ({ children, title, className = 'accordion', expanded = true }: IAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded)
  const [contentRef, setContentRef] = useState<HTMLDivElement>()
  const [iconRef, setIconRef] = useState<SVGSVGElement>()
  const contentRefCallBack = useCallback((node: HTMLDivElement) => setContentRef(node), [])
  const iconRefCallback = useCallback((node: SVGSVGElement) => setIconRef(node), [])

  useEffect(() => {
    if (isExpanded && contentRef && iconRef) {
      iconRef.style.transform = 'rotate(90deg)'
      const normalize = setTimeout(() => {
        contentRef.style.maxHeight = 'none'
      }, animationDuration)
      return () => {
        clearTimeout(normalize)
      }
    }
    if (!isExpanded && contentRef && iconRef) {
      contentRef.style.maxHeight = '0'
      iconRef.style.transform = 'rotate(0deg)'
    }
  }, [isExpanded, contentRef, iconRef])

  const onClickHandler = () => {
    if (contentRef) {
      contentRef.style.maxHeight = `${contentRef.scrollHeight}px`
    }
    setIsExpanded(state => !state)
  }

  return (
    <div className={className}>
      <div className="accordion-header" onClick={onClickHandler}>
        <button className="accordion-header__title">{title || 'No Title'}</button>
        <svg viewBox="0 0 24 24" ref={iconRefCallback} style={iconStyle}>
          <path d="M9 18L15 12L9 6" strokeWidth="2.5" stroke="currentColor" fill="none"></path>
        </svg>
      </div>

      <div ref={contentRefCallBack} className={`accordion-content${isExpanded ? ' expanded' : ''}`} style={animationStyle}>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
