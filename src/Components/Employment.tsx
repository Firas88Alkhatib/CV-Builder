import { connect } from "react-redux";
import actions from "../Redux/Actions";
import InputField from "./InputField";
import TextField from "./TextField";
import StartEnd from "./StartEnd";
import ApplicationState from "../Types/ApplicationState";
import RemoveLink from "./RemoveLink";
import { updateEmploymentAction } from "../Redux/Actions/UpdateEmploymentAction";
import { mapStateToProps } from "../Redux/ReactRedux";

interface EmploymentProps {
  cid: number;
  state: ApplicationState;
}
const Employment = ({ cid, state }: EmploymentProps) => {
  const employment = state.employmentHistory.find((item) => item.id === cid);

  return (
    <div className="employment-container">
      <div className="employment container">
        <InputField value={employment?.jobTitle} cid={cid} label="Job Title" name="jobTitle" action={updateEmploymentAction} />
        <InputField value={employment?.employer} cid={cid} label="Employer" name="employer" action={updateEmploymentAction} />
        <InputField value={employment?.city} cid={cid} label="City" name="city" action={updateEmploymentAction} />
        <StartEnd
          actionType={actions.UPDATE_EMPLOYMENT}
          startDate={employment?.startDate}
          endDate={employment?.endDate}
          cid={cid}
        />
        <TextField value={employment?.description} cid={cid} label="Description" name="description" actionType={actions.UPDATE_EMPLOYMENT}></TextField>
        <RemoveLink actionType={actions.REMOVE_EMPLOYMENT} cid={cid} />
        <div className="break-line"></div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Employment);
