import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { debounce } from "../Helpers/Util";
import ApplicationState from "../Types/ApplicationState";
//import PropTypes from "prop-types";

interface InputFieldProps {
  inputType?: string;
  label: string;
  name: string;
  onChange?: Function;
  state?: ApplicationState;
  cid?: number;
  value?: string;
  action?: Function
}

const InputField = ({ cid, label, name, onChange, value ,action }: InputFieldProps) => {
  return (
    <div className="input-field item">
      <label>
        <span className="input-field-label">{label}</span>
        <br />
        <input defaultValue={value} name={name} onChange={onChange && onChange(action, cid, name)}></input>
      </label>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onChange: (action: Function, id: string, fieldName: string) =>
      debounce((e: any) => {
        dispatch(action(id,fieldName,e.target.value));
      }, 700),
  };
};



export default connect(mapStateToProps, mapDispatchToPros)(InputField);
