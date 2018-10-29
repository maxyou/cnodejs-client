import {ACTION} from '../actions/actions'

const initState = []

const todos = (state = initState, action) => {
    switch (action.type) {
        case ACTION.ADD:
            return [...state, {id:Date.now(),todo: action.payload, toggle:false}]
        case ACTION.TOGGLE:
            return state.map(
                item => {
                    // console.log(item.id)
                    // console.log(action.payload)
                    if(item.id == action.payload.id){
                        // console.log('toggle')
                        return {...item, toggle:!item.toggle}
                    }else{
                        return item
                    }
                }
            )
        default:
            return state
    }
}

export default todos