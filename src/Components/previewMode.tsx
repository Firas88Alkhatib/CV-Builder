import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { updatePreviewModeAction } from "../Redux/Actions/UpdatePreviewModeAction.ts";
import { mapStateToProps } from "../Redux/ReactRedux";
import Templates from "../Templates"
import ApplicationState from "../Types/ApplicationState";

const PreviewMode = ({ state, onClick }: { state: ApplicationState, onClick: any }) => {
  const CurrentTemplate = Templates[state.currentTemplate as keyof typeof Templates];
  return <div className="preview-mode">
    <div className="preview-mode-header" onClick={onClick}>
      <span>Back to edit</span>
    </div>
    <div className="preview-mode-body">
      <CurrentTemplate isMobileView={true} />
    </div>
  </div>
}

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onClick: () => {
      dispatch(updatePreviewModeAction(false));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToPros)(PreviewMode);
