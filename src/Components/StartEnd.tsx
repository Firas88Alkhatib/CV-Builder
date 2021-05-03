import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ApplicationState from "../Types/ApplicationState";
import { mapStateToProps } from "../Redux/ReactRedux";

interface StartEndProps {
  state: ApplicationState;
  onChange?: Function;
  cid: number;
  startDate?: Date | null;
  endDate?: Date | null;
  actionType: string;
}

const StartEnd = ({ actionType, startDate, endDate, cid, onChange }: StartEndProps) => {
  return (
    <div className="start-end-container">
      <span className="startend-label">Start & End Date</span>
      <br />
      <div className="dates">
        <div className="time-item">
          <DatePicker
            dateFormat="MM / yyyy"
            showMonthYearPicker
            closeOnScroll={true}
            selected={startDate && new Date(startDate)}
            onChange={(date) => onChange && onChange(actionType, cid, "startDate", date)}
          />
        </div>
        <div className="time-item">
          <DatePicker
            dateFormat="MM / yyyy"
            showMonthYearPicker
            closeOnScroll={true}
            selected={endDate && new Date(endDate)}
            onChange={(date) => onChange && onChange(actionType, cid, "endDate", date)}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToPros = (dispatch: Dispatch<AnyAction>) => {
  return {
    onChange: (actionType: string, id: number, fieldName: string, date: any) => {
      dispatch({ type: actionType, payload: { id, value: { [fieldName]: date } } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(StartEnd);
