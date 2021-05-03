import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { mapStateToProps } from "../Redux/ReactRedux";
import ApplicationState from "../Types/ApplicationState";
import actions from "../Redux/Actions";

interface SaveDataProps {
    onChange?: any;
    state?: ApplicationState;
}

const styles = {
    checkbox: { marginRight: 5, display: "inline-block", width: "auto" },
    label: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline"
    }
}
const SaveData = ({ onChange, state }: SaveDataProps) => {
    return (
        <div className="checkbox">
            <label style={styles.label}>
                <input style={styles.checkbox} type="checkbox" defaultChecked={state?.keepData} onChange={onChange} />
                {"Keep my data saved on this device"}
            </label>
        </div>
    );
};

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
    return {
        onChange: (e: any) => {
            dispatch({
                type: actions.UPDATE_KEEPDATA,
                payload: {
                    value: e.target.checked
                }
            });
        }
    };
};



export default connect(mapStateToProps, mapDispatchToPros)(SaveData);
