import {ACTION} from '../actions/paginate'

const initState = 1

const paginate = (state = initState, action) => {
    switch (action.type) {
        case ACTION.NAVI:
            return state = action.payload
        default:
            return state
    }
}

export default paginate