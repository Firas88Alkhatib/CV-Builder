import './notFound.scss'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="stars"></div>
      <p>Oops! Page not found</p>
      <Link to="/">Back to the main page</Link>
      <div>
        <div className="not-found__portal">
          <span>404</span>
        </div>
      </div>
      <svg>
        <filter id="turbulence">
          <feTurbulence baseFrequency="0.01" numOctaves="5">
            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.01;0.02" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="40" />
        </filter>
      </svg>
    </div>
  )
}
export default NotFound
