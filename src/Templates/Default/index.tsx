import { PDFViewer } from "@react-pdf/renderer";
import { connect } from "react-redux";
import { CirclePicker } from "react-color";
import ApplicationState from "../../Types/ApplicationState";
import PDFTemplate from "./PDFTemplate";
import { AnyAction, Dispatch } from "redux";
import actions from "../../Redux/Actions";
import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import { useState } from "react";
import Button from "../../Components/Button"
import "./styles.css"
import { mapStateToProps } from "../../Redux/ReactRedux";

const colors = ["#10365C", "#084C41", "#87300D", "#3E1D53", "#242935", "#e81a4a"];
const styles = {
  templateView: { justifyContent: "center", height: "100%", display: "flex", FlexDirection: "row" },
  colorsView: { width: "4%", margin: 10 },
  mobileView: { margin: 10, padding: 5, overflow: "auto" },
  pageView: { boxShadow: "0px -2px 29px -15px rgba(0,0,0,0.75)", marginBottom: 10, display: "inline-block" },
  downloadButton: { width: "50%", margin: "30px auto" }

};

const Viewer = ({ isMobileView, state, onChange }: { isMobileView?: boolean, onChange: any; state: ApplicationState }) => {
  const [numPages, setNumPages] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
  const color = state.templateValues?.color || colors[0];
  const mobileView =
    <div className="default-template-mobile-view" style={styles.mobileView}>
      <BlobProvider document={<PDFTemplate state={state} color={color} />}>
        {({ url, loading }: { url: any, loading: boolean }) => {
          return loading ? <div>loading</div> :
            <div className="preview-mode-pages">
              <Document file={url} renderMode="canvas" onLoadSuccess={onDocumentLoadSuccess} >
                {[...Array(numPages)].map((_, index) =>
                  <div key={index} style={styles.pageView}><Page scale={0.58} pageNumber={index + 1} /></div>
                )}
              </Document>
            </div>
        }}
      </BlobProvider >
      <PDFDownloadLink style={{ textDecoration: "none" }} document={<PDFTemplate state={state} color={color} />} fileName="MyCV.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' :
            <div style={styles.downloadButton}>
              <Button label="Donwload" />
            </div>
        }
      </PDFDownloadLink>
    </div>

  const normalView =
    <PDFViewer className="pdfviewer" style={{ alignSelf: "stretch", flex: 100, border: 0 }}>
      <PDFTemplate state={state} color={color} />
    </PDFViewer>
  return <div className="template-view" style={styles.templateView}>
    <div className="colors" style={styles.colorsView}>
      <CirclePicker
        color={color}
        colors={colors}
        width={"25px"}
        styles={{ default: { card: { marginRight: 1 } } }}
        onChangeComplete={onChange}
      />
    </div>
    {isMobileView ? mobileView : normalView}
  </div>

};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    onChange: (color: any) => {
      dispatch({ type: actions.UPDATE_TEMPLATE_VALUES, payload: { color: color.hex } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
