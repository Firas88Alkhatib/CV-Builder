import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { updatePreviewModeAction } from "../Redux/Actions/UpdatePreviewModeAction.ts";
import Button from "./Button";



  
const FooterPreview = ({onClick}:{onClick:any})=>{
return <div className="footer-preview">
<Button label="Preview" onClick={onClick}/>
</div>
}

const mapStateToProps = (state: any) => {
  return { state };
};

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onClick: () => {
      dispatch(updatePreviewModeAction(true));
    },
  };
};

export default connect(mapStateToProps,mapDispatchToPros)(FooterPreview);