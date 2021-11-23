import { combineReducers } from 'redux'
import checkout from './checkout'

const mainApp = combineReducers({
    checkout,
  })

export default mainApp