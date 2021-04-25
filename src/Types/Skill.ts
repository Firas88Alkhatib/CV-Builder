export enum SkillLevel {
  beginer = "Beginer",
  intermediate = "Intermediate",
  skillful = "Skillful",
  expert = "Expert",
}
class Skill {
  id!: number;
  name: string = "";
  level: SkillLevel | null = null;
  value: number | null = null;
}
export default Skill;
