import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
import http from './http'

export default combineReducers({
    todos,
    filter,
    http
})