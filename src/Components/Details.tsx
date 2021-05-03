import { connect } from "react-redux";
import actions from "../Redux/Actions";
import { updatePersonalDetailsAction } from "../Redux/Actions/UpdatePersonalDetailsAction";
import { mapStateToProps } from "../Redux/ReactRedux";
import ApplicationState from "../Types/ApplicationState";
import InputField from "./InputField";
import "./style.css";

import TextField from "./TextField";

const Details = ({ state }: { state: ApplicationState }) => {
  return (
    <div>
      <h2>Personal Details</h2>
      <div className="personal-details container">
        <InputField value={state.personalDetails.firstName} label="First Name" name="firstName" action={updatePersonalDetailsAction} />
        <InputField value={state.personalDetails.lastName} label="Last Name" name="lastName" action={updatePersonalDetailsAction} />
        <InputField value={state.personalDetails.jobTitle} label="Job Title" name="jobTitle" action={updatePersonalDetailsAction} />
        <InputField value={state.personalDetails.address} label="Address" name="address" action={updatePersonalDetailsAction} />
        <InputField value={state.personalDetails.city} label="City" name="city" action={updatePersonalDetailsAction} />
        <InputField
          value={state.personalDetails.postalCode}
          inputType="number"
          label="Postal Code"
          name="postalCode"
          action={updatePersonalDetailsAction}
        />
        <InputField value={state.personalDetails.country} label="Country" name="country" action={updatePersonalDetailsAction} />
        <InputField value={state.personalDetails.phoneNumber} label="Phone Number" name="phoneNumber" action={updatePersonalDetailsAction} />
        <InputField value={state.personalDetails.email} inputType="email" label="Email" name="email" action={updatePersonalDetailsAction} />

        <InputField value={state.personalDetails.dateOfBirth} label="Date of Birth" name="dateOfBirth" action={updatePersonalDetailsAction} />
        <TextField value={state.personalDetails.about} label="About" name="about" actionType={actions.UPDATE_PERSONAL_DETAILS}></TextField>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Details);
