import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";

interface AddLinkProps {
  label: string;
  onClick?: (actionType: string) => (e: any) => void;
  actionType: string;
}
const AddLink = ({ actionType, label, onClick }: AddLinkProps) => {
  return (
    <div className="add-link" onClick={onClick && onClick(actionType)}>
      <div className="plus-symbol">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <polygon points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"></polygon>
        </svg>
      </div>
      <span className="add-link-label">{label}</span>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onClick: (actionType: string) => (e: any) => {
      dispatch({ type: actionType });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(AddLink);
