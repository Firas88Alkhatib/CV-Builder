import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { debounce } from "../Helpers/Util";

interface TextFieldProps {
  inputType?: string;
  label: string;
  name: string;
  onChange?: Function;
  actionType: string;
  cid?: number;
}

const TextField = ({ cid, label, actionType, name, onChange }: TextFieldProps) => {
  return (
    <div className="text-field">
      <label>
        <span>{label}</span>
        <br />
        <textarea name={name} onChange={onChange && onChange(actionType, cid, name)}></textarea>
      </label>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onChange: (actionType: string, id: number, fieldName: string) =>
      debounce((e: any) => {
        dispatch({ type: actionType, payload: { id, value: { [fieldName]: e.target.value } } });
      }, 500),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(TextField);
