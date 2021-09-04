import { PDFViewer } from '@react-pdf/renderer'
import Main from './Main'
import { useSelector } from 'react-redux'
import ApplicationState from '../../Types/ApplicationState'

// interface MyTemplateProps {
//   label: string
//   text: string
// }
const Mytemplate = () => {
  const firstaName = useSelector<ApplicationState, string>(state => state.personalDetails.firstName)
  const lastName = useSelector<ApplicationState, string>(state => state.personalDetails.lastName)
  return (
    <PDFViewer className="pdfviewer" style={{ alignSelf: 'stretch', flex: 100, border: 0 }}>
      <Main firstaName={firstaName} lastName={lastName} />
    </PDFViewer>
  )
}
export default Mytemplate
