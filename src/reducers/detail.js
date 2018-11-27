import {ACTION} from '../actions/detail'

const initState = {
    loading: false,
    data: {}
}

const detail = (state = initState, action) => {
    switch (action.type) {
        case ACTION.HTTP_REQUEST:
            // console.log('ACTION.HTTP_REQUEST')
            return {...state, loading: true}
        case ACTION.HTTP_FAILURE:
            return {...state, loading: false}
        case ACTION.HTTP_SUCCESS:
            // console.log('ACTION.HTTP_SUCCESS')
            // console.log(action.payload)
            return {...state, loading: false, data: action.payload}
        default:
            return state
    }
}

export default detail