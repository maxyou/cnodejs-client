import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
import cnode from './cnode'

export default combineReducers({
    todos,
    filter,
    cnode
})