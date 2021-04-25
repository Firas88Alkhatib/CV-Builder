export enum LangLevel {
  basics = "Basics",
  intermediate = "Intermediate",
  fluent = "fluent",
  native = "Native Speaker",
}
class Language {
  id!: number;
  name: string = "";
  level: LangLevel | null = null;
  value: number | null = null;
}
export default Language;
