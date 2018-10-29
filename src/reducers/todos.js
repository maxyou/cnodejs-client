import {ACTION} from '../actions/actions'

const initState = []

const todos = (state = initState, action) => {
    switch (action.type) {
        case ACTION.ADD:
            return [...state, {id:Date.now(),todo: action.payload, toggle:false}]
        case ACTION.TOGGLE:
            return [state.map(
                item => 
                    (item.id == action.payload.id)?
                    {...item, toggle:!item.toggle}
                    :item
            )]
        default:
            return state
    }
}

export default todos