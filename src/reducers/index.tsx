import { combineReducers } from 'redux'
import introductions from './introductions'
import skill from './skill'

const rootReducer = combineReducers({
  introductions,skill
})

export default rootReducer