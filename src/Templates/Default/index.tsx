import { PDFViewer } from "@react-pdf/renderer";
import { connect } from "react-redux";
import { CirclePicker } from "react-color";
import ApplicationState from "../../Types/ApplicationState";
import PDFTemplate from "./PDFTemplate";
import { AnyAction, Dispatch } from "redux";
import actions from "../../Redux/Actions";

const colors = ["#10365C", "#084C41", "#87300D", "#3E1D53", "#242935", "#e81a4a"];
const styles = {
  templateView: { height: "100%", display: "flex", FlexDirection: "row" },
  colorsView: { flex: 1, margin: 10 },
};
const Viewer = ({ state, onChange }: { onChange: any; state: ApplicationState }) => {
  const color = state.templateValues?.color || colors[0];
  console.log(color);
  return (
    <div className="template-view" style={styles.templateView}>
      <div className="colors" style={styles.colorsView}>
        <CirclePicker
          color={color}
          colors={colors}
          width={"25px"}
          styles={{ default: { card: { marginRight: 1 } } }}
          onChangeComplete={onChange}
        />
      </div>
      <PDFViewer className="pdfviewer" style={{ alignSelf: "stretch", flex: 100, border: 0 }}>
        <PDFTemplate state={state} color={color} />
      </PDFViewer>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};
const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onChange: (color: any) => {
      dispatch({ type: actions.UPDATE_TEMPLATE_VALUES, payload: { color: color.hex } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Viewer);
