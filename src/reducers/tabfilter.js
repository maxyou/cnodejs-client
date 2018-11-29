import {ACTION} from '../actions/tabfilter'

export const TAB_FILTER = {
    ALL: 'tabfilter_all',
    PRIMARY: 'tabfilter_primary',
    SHARE: 'tabfilter_share',
    ASK: 'tabfilter_ask',
    JOB: 'tabfilter_job',
    TEST: 'tabfilter_test'
}

const initState = TAB_FILTER.ALL

const tabfilter = (state = initState, action) => {
    switch (action.type) {
        case ACTION.TAB_FILTER:
            return state = action.payload
        default:
            return state
    }
}

export default tabfilter