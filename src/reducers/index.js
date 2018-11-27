import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
import topics from './topics'

export default combineReducers({
    todos,
    filter,
    topics
})