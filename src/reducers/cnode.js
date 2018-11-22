import {ACTION} from '../actions/cnode'

const initState = {
    loading: false,
    topics: 'topics is empty'
}

const cnode = (state = initState, action) => {
    switch (action.type) {
        case ACTION.FETCH_POST_REQUEST:
            return {...state, loading: true}
        case ACTION.FETCH_POST_FAILURE:
            return {...state, loading: false}
        case ACTION.FETCH_POST_SUCCESS:
            console.log('action success')
            console.log(action.payload)
            let newstate = {...state, loading: false, topics: action.payload}
            console.log(newstate)
            return newstate
        default:
            return state
    }
}

export default cnode