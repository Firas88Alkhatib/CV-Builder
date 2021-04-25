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
  dateOfBirth: Date | null = null;
  phoneNumber: string = "";
  email: string = "";
  about: string = "";
}

export default PersonalDetails;
