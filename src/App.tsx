import { useSelector } from 'react-redux'

import Templates from './Templates'
import StickyHeader from './Components/StickyHeader'
import Details from './Components/Details'
import Employments from './Components/Employments'
import Educations from './Components/Educations'
import Skills from './Components/Skills'
import Links from './Components/Links'
import Languages from './Components/Languages'
import Footer from './Components/Footer'
import FooterPreview from './Components/FooterPreview'
import PreviewMode from './Components/previewMode'
import ApplicationState from './Types/ApplicationState'
import KeepData from './Components/KeepData'

function App() {
  const previewMode = useSelector<ApplicationState, boolean>(state => state.previewMode)
  const currentTemplate = useSelector<ApplicationState, string>(state => state.currentTemplate)

  const CurrentTemplate = Templates[currentTemplate as keyof typeof Templates]
  return (
    <div className="App">
      {previewMode ? (
        <PreviewMode />
      ) : (
        <div className="edit-mode">
          <div className="edit-container">
            <div className="input">
              <StickyHeader />
              <KeepData />
              <Details />
              <Employments />
              <Educations />
              <Skills />
              <Links />
              <Languages />
              <FooterPreview />
              <Footer />
            </div>
          </div>
          <div className="output">
            <CurrentTemplate />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
