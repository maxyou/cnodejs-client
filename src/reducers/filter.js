import {ACTION} from '../actions/actions'

export const FILTER = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
}

const initState = FILTER.ALL

const filter = (state = initState, action) => {
    switch (action.type) {
        case ACTION.FILTER:
            return state = action.payload
        default:
            return state
    }
}

export default filter