import { immerable } from 'immer'
import Education from './Education'
import EmploymentHistory from './EmploymentHistory'
import Language from './Language'
import Link from './link'
import PersonalDetails from './PersonalDetails'
import Skill from './Skill'

class ApplicationState {
  /**
   * Application state
   */
  constructor(
    personalDetails: PersonalDetails,
    educations: Education[],
    employmentHistory: EmploymentHistory[],
    skills: Skill[],
    links: Link[],
    languages: Language[],
    previewMode: boolean = false,
    currentTemplate: string = 'Default'
  ) {
    this.personalDetails = personalDetails
    this.educations = educations
    this.employmentHistory = employmentHistory
    this.skills = skills
    this.links = links
    this.languages = languages
    this.currentTemplate = currentTemplate
  }
  [immerable] = true
  personalDetails: PersonalDetails
  educations: Education[]
  employmentHistory: EmploymentHistory[]
  skills: Skill[]
  links: Link[]
  languages: Language[]
  templateValues: any
  currentTemplate: string
  anonymousLogin: boolean = false
  keepData: boolean = false
}
export default ApplicationState
