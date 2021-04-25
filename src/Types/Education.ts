import { immerable } from "immer";

class Education {
  [immerable] = true;
  id!: number;
  school: string = "";
  degree: string = "";
  city: string = "";
  startDate: Date | null = null;
  endDate: Date | null = null;
  description: string = "";
}
export default Education;
