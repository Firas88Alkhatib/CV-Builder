import actions from "../Redux/Actions";
import { updatePersonalDetailsAction } from "../Redux/Actions/UpdatePersonalDetailsAction";
import InputField from "./InputField";
import "./style.css";

import TextField from "./TextField";

const Details = () => {
  return (
    <div>
      <h2>Personal Details</h2>
      <div className="personal-details container">
        <InputField label="First Name" name="firstName" action={updatePersonalDetailsAction} />
        <InputField label="Last Name" name="lastName" action={updatePersonalDetailsAction} />
        <InputField label="Job Title" name="jobTitle" action={updatePersonalDetailsAction} />
        <InputField label="Address" name="address" action={updatePersonalDetailsAction} />
        <InputField label="City" name="city" action={updatePersonalDetailsAction} />
        <InputField
          inputType="number"
          label="Postal Code"
          name="postalCode"
          action={updatePersonalDetailsAction}
        />
        <InputField label="Country" name="country" action={updatePersonalDetailsAction} />
        <InputField label="Phone Number" name="phoneNumber" action={updatePersonalDetailsAction} />
        <InputField inputType="email" label="Email" name="email" action={updatePersonalDetailsAction} />

        <InputField label="Date of Birth" name="dateOfBirth" action={updatePersonalDetailsAction} />
        <TextField label="About" name="about" actionType={actions.UPDATE_PERSONAL_DETAILS}></TextField>
      </div>
    </div>
  );
};

export default Details;
