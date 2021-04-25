import { immerable } from "immer";

class EmploymentHistory {
  [immerable] = true;
  id!: number;
  jobTitle: string = "";
  employer: string = "";
  startDate: Date | null = null;
  endDate: Date | null = null;
  city: string = "";
  description: string = "";
}

export default EmploymentHistory;
