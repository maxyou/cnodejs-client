import {ACTION} from '../actions/paginate'

const initState = {
        current:1,
        maxPaginate:8
    }

const paginate = (state = initState, action) => {
    switch (action.type) {
        case ACTION.NAVI:
            console.log('reducer current:'+action.payload)
            return {...state, current:action.payload}
        case ACTION.MAX_PAGINATE:
            console.log('reducer max paginate:'+action.payload)
            return {...state, maxPaginate:action.payload}
        default:
            return state
    }
}

export default paginate