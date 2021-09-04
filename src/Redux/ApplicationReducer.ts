import produce, { Draft } from 'immer'
import { AnyAction } from 'redux'
import ApplicationState from '../Types/ApplicationState'
import Education from '../Types/Education'
import EmploymentHistory from '../Types/EmploymentHistory'
import Language from '../Types/Language'
import Link from '../Types/link'
import Skill from '../Types/Skill'
import actions from './Actions'

const reducer = produce((draft: Draft<ApplicationState>, action: AnyAction) => {
  switch (action.type) {
    case actions.ADD_EMPLOYMENT: {
      let emp = new EmploymentHistory()
      const ids = draft.employmentHistory.map(item => item.id)
      emp.id = ids.length > 0 ? Math.max(...ids) + 1 : 1
      draft.employmentHistory.push(emp)
      break
    }
    case actions.ADD_EDUCATION: {
      let edu = new Education()
      const ids = draft.educations.map(item => item.id)
      edu.id = ids.length > 0 ? Math.max(...ids) + 1 : 1
      draft.educations.push(edu)
      break
    }
    case actions.ADD_SKILL: {
      const skill = new Skill()
      const ids = draft.skills.map(item => item.id)
      skill.id = ids.length > 0 ? Math.max(...ids) + 1 : 1
      draft.skills.push(skill)
      break
    }
    case actions.ADD_LANGUAGE: {
      let language = new Language()
      const ids = draft.languages.map(item => item.id)
      language.id = ids.length > 0 ? Math.max(...ids) + 1 : 1
      draft.languages.push(language)
      break
    }
    case actions.ADD_LINK: {
      let link = new Link()
      const ids = draft.links.map(item => item.id)
      link.id = ids.length > 0 ? Math.max(...ids) + 1 : 1
      draft.links.push(link)
      break
    }
    case actions.UPDATE_PERSONAL_DETAILS: {
      draft.personalDetails = { ...draft.personalDetails, ...action.payload.value }
      break
    }
    case actions.UPDATE_EMPLOYMENT: {
      const index = draft.employmentHistory.findIndex(item => item.id === action.payload.id)
      draft.employmentHistory[index] = {
        ...draft.employmentHistory[index],
        ...action.payload.value
      }
      break
    }
    case actions.UPDATE_EDUCATION: {
      const index = draft.educations.findIndex(item => item.id === action.payload.id)
      draft.educations[index] = {
        ...draft.educations[index],
        ...action.payload.value
      }
      break
    }
    case actions.UPDATE_SKILL: {
      const index = draft.skills.findIndex(item => item.id === action.payload.id)
      draft.skills[index] = {
        ...draft.skills[index],
        ...action.payload.value
      }
      break
    }
    case actions.UPDATE_LANGUAGE: {
      const index = draft.languages.findIndex(item => item.id === action.payload.id)
      draft.languages[index] = {
        ...draft.languages[index],
        ...action.payload.value
      }
      break
    }
    case actions.UPDATE_LINK: {
      const index = draft.links.findIndex(item => item.id === action.payload.id)
      draft.links[index] = {
        ...draft.links[index],
        ...action.payload.value
      }
      break
    }
    case actions.REMOVE_EMPLOYMENT: {
      draft.employmentHistory = draft.employmentHistory.filter(item => item.id !== action.payload.id)
      break
    }
    case actions.REMOVE_EDUCATION: {
      draft.educations = draft.educations.filter(item => item.id !== action.payload.id)
      break
    }
    case actions.REMOVE_SKILL: {
      draft.skills = draft.skills.filter(item => item.id !== action.payload.id)
      break
    }
    case actions.REMOVE_LANGUAGE: {
      draft.languages = draft.languages.filter(item => item.id !== action.payload.id)
      break
    }
    case actions.REMOVE_LINK: {
      draft.links = draft.links.filter(item => item.id !== action.payload.id)
      break
    }
    case actions.UPDATE_TEMPLATE_VALUES: {
      draft.templateValues = { ...draft.templateValues, ...action.payload }
      break
    }
    case actions.UPDATE_PREVIEW_MODE: {
      draft.previewMode = action.payload.value
      break
    }
    case actions.UPDATE_KEEPDATA: {
      draft.keepData = action.payload.value
      !action.payload.value && localStorage.removeItem('applicationState')
      break
    }
    default:
      break
  }
  draft.keepData && localStorage.setItem('applicationState', JSON.stringify(draft))
})

export default reducer
