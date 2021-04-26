import { immerable } from "immer";

class PersonalDetails {
  [immerable] = true;
  jobTitle: string = "";
  firstName: string = "";
  lastName: string = "";
  country: string = "";
  city: string = "";
  address: string = "";
  postalCode: string = "";
  dateOfBirth: string = "";
  phoneNumber: string = "";
  email: string = "";
  about: string = "";
}

export default PersonalDetails;
