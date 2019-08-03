import {SWITCH_TABS} from './actionType'

export const switchTabs = (key) =>{
  return {
    type: SWITCH_TABS,
    key
  }
}