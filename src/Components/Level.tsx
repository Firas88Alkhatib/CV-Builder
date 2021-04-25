import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import ApplicationState from "../Types/ApplicationState";
import { LangLevel } from "../Types/Language";
import { SkillLevel } from "../Types/Skill";
import Select from "react-select";

interface LevelProps {
  onChange?: Function;
  state?: ApplicationState;
  cid: number;
  options: typeof LangLevel | typeof SkillLevel;
  actionType: string;
}
const Level = ({ actionType, cid, options, onChange }: LevelProps) => {
  const op = Object.values(options).map((item) => ({ value: item, label: item }));
  const styles = {
    control: (provided: any) => {
      return { ...provided, backgroundColor: "rgb(242, 245, 250)", border: 0, boxShadow: 0 };
    },

    container: (provided: any) => {
      return { ...provided, marginTop: 5 };
    },
  };
  return (
    <div className="input-field item">
      <span>Level</span>
      <br />
      <div className="select item">
        <Select options={op} styles={styles} onChange={onChange && onChange(cid, actionType, options)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { state };
};

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onChange: (id: string, actionType: string, options: { [key: string]: string }) => (e: any) => {
      dispatch({
        type: actionType,
        payload: {
          id,
          value: { level: e.value, value: Object.values(options).indexOf(e.value) + 1 },
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Level);
