import { useSelector } from 'react-redux'
import PersonalDetails from 'Types/PersonalDetails'
import actions from 'Redux/Actions'
import { updatePersonalDetailsAction } from 'Redux/Actions/UpdatePersonalDetailsAction'
import ApplicationState from 'Types/ApplicationState'
import InputField from 'Components/InputField'
import Accordion from 'Components/Accordion'
import './style.css'

import TextField from './TextField'

const Details = () => {
  const personalDetails = useSelector<ApplicationState, PersonalDetails>(state => state.personalDetails)
  return (
    <Accordion title="Personal Details">
      <div className="personal-details container">
        <InputField value={personalDetails.firstName} label="First Name" name="firstName" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.lastName} label="Last Name" name="lastName" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.jobTitle} label="Job Title" name="jobTitle" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.address} label="Address" name="address" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.city} label="City" name="city" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.postalCode} inputType="number" label="Postal Code" name="postalCode" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.country} label="Country" name="country" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.phoneNumber} label="Phone Number" name="phoneNumber" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.email} inputType="email" label="Email" name="email" action={updatePersonalDetailsAction} />
        <InputField value={personalDetails.dateOfBirth} label="Date of Birth" name="dateOfBirth" action={updatePersonalDetailsAction} />
        <TextField value={personalDetails.about} label="About" name="about" actionType={actions.UPDATE_PERSONAL_DETAILS}></TextField>
      </div>
    </Accordion>
  )
}

export default Details
