import {ACTION} from '../actions/http'

const initState = {
    loading: false,
    topics: 'topics is empty'
}

const http = (state = initState, action) => {
    switch (action.type) {
        case ACTION.FETCH_POST_REQUEST:
            // console.log('ACTION.FETCH_POST_REQUEST')
            return {...state, loading: true}
        case ACTION.FETCH_POST_FAILURE:
            return {...state, loading: false}
        case ACTION.FETCH_POST_SUCCESS:
            // console.log('ACTION.FETCH_POST_SUCCESS')
            // console.log(action.payload)
            return {...state, loading: false, topics: action.payload}
        default:
            return state
    }
}

export default http