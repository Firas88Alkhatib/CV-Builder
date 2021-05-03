import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import swal from "sweetalert";
import { mapStateToProps } from "../Redux/ReactRedux";

interface AddLinkProps {
  onClick?: (actionType: string, id: number) => (e: any) => void;
  actionType: string;
  cid: number;
}
const AddLink = ({ actionType, cid, onClick }: AddLinkProps) => {
  return (
    <div className="remove-link" onClick={onClick!(actionType, cid)}>
      <div className="remove-symbol">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <polygon
            transform="rotate(45,0,0) translate(6 -14)"
            points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"
          ></polygon>
        </svg>
      </div>
      <span className="add-link-label">Remove</span>
    </div>
  );
};

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onClick: (actionType: string, id: number) => (e: any) => {
      swal("Are you sure ?", { buttons: ["Cancel", "Remove"], dangerMode: true }).then((value) => {
        value && dispatch({ type: actionType, payload: { id } });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(AddLink);
