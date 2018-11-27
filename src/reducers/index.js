import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
import topics from './topics'
import detail from './detail'

export default combineReducers({
    todos,
    filter,
    topics,
    detail
})