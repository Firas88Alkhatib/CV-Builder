import { useSelector, useDispatch } from 'react-redux'
import { PDFViewer } from '@react-pdf/renderer'
import PDFTemplate from './PDFTemplate'
import actions from '../../Redux/Actions'
import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer'
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack'
import { useState } from 'react'
import Button from '../../Components/Button'
import ApplicationState from '../../Types/ApplicationState'
import CircleColorPicker from 'Components/CircleColorPicker/CircleColorPicker'
import './styles.css'

const colors = ['#10365C', '#084C41', '#87300D', '#3E1D53', '#242935', '#e81a4a']
const styles = {
  templateView: { justifyContent: 'center', height: '100%', display: 'flex', FlexDirection: 'row' },
  colorsView: { width: '4%', margin: 10 },
  mobileView: { margin: 10, padding: 5, overflow: 'auto' },
  pageView: { boxShadow: '0px -2px 29px -15px rgba(0,0,0,0.75)', marginBottom: 10, display: 'inline-block' },
  downloadButton: { width: '50%', margin: '30px auto' }
}

const Viewer = ({ isMobileView }: { isMobileView?: boolean }) => {
  const dispatch = useDispatch()
  const state = useSelector<ApplicationState, ApplicationState>(state => state)
  const onChangeHandler = (color: string) => {
    dispatch({ type: actions.UPDATE_TEMPLATE_VALUES, payload: { color } })
  }
  const [numPages, setNumPages] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }
  const color = state.templateValues?.color || colors[0]
  const mobileView = (
    <div className="default-template-mobile-view" style={styles.mobileView}>
      <BlobProvider document={<PDFTemplate state={state} color={color} />}>
        {({ url, loading }: { url: any; loading: boolean }) => {
          return loading ? (
            <div>loading</div>
          ) : (
            <div className="preview-mode-pages">
              <Document file={url} renderMode="canvas" onLoadSuccess={onDocumentLoadSuccess}>
                {[...Array(numPages)].map((_, index) => (
                  <div key={index} style={styles.pageView}>
                    <Page scale={0.58} pageNumber={index + 1} />
                  </div>
                ))}
              </Document>
            </div>
          )
        }}
      </BlobProvider>
      <PDFDownloadLink style={{ textDecoration: 'none' }} document={<PDFTemplate state={state} color={color} />} fileName="MyCV.pdf">
        {({ blob, url, loading, error }) =>
          loading ? (
            'Loading document...'
          ) : (
            <div style={styles.downloadButton}>
              <Button label="Download" />
            </div>
          )
        }
      </PDFDownloadLink>
    </div>
  )

  const normalView = (
    <PDFViewer className="pdfviewer" style={{ alignSelf: 'stretch', flex: 100, border: 0 }}>
      <PDFTemplate state={state} color={color} />
    </PDFViewer>
  )
  return (
    <div className="template-view" style={styles.templateView}>
      <CircleColorPicker colors={colors} initialColor={color} onClick={onChangeHandler} />
      {isMobileView ? mobileView : normalView}
    </div>
  )
}

export default Viewer
