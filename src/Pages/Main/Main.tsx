import { useSelector } from 'react-redux'
import './main.scss'

import Templates from 'Templates'
import StickyHeader from 'Components/StickyHeader/StickyHeader'
import Details from 'Components/Details'
import Employments from 'Components/Employments'
import Educations from 'Components/Educations'
import Skills from 'Components/Skills'
import Links from 'Components/Links'
import Languages from 'Components/Languages'
import Footer from 'Components/Footer/Footer'
import FooterPreview from 'Components/FooterPreview'
import ApplicationState from 'Types/ApplicationState'
import KeepData from 'Components/KeepData'

const Main = () => {
  const currentTemplate = useSelector<ApplicationState, string>(state => state.currentTemplate)
  const CurrentTemplate = Templates[currentTemplate as keyof typeof Templates]
  return (
    <div className="main">
      <div className="edit-container">
        <StickyHeader />
        <div className="edit-container__content">
          <KeepData />
          <Details />
          <Employments />
          <Educations />
          <Skills />
          <Languages />
          <Links />
          <FooterPreview />
        </div>
        <Footer />
      </div>
      <div className="output">
        <CurrentTemplate />
      </div>
    </div>
  )
}

export default Main
