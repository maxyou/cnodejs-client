import {ACTION} from '../actions/tabfilter'

export const TAB_FILTER = {
    ALL: 'tabfilter_all',
    PRIMARY: 'tabfilter_primary',
    SHARE: 'tabfilter_share',
    ASK: 'tabfilter_ask',
    JOB: 'tabfilter_job',
    TEST: 'tabfilter_test'
}
const TAB_FILTER_QUERY_STR = {
    [TAB_FILTER.ALL]: '?tab=all',
    [TAB_FILTER.PRIMARY]: '?tab=good',
    [TAB_FILTER.SHARE]: '?tab=share',
    [TAB_FILTER.ASK]: '?tab=ask',
    [TAB_FILTER.JOB]: '?tab=job',
    [TAB_FILTER.TEST]: '?tab=dev'
}
export const tabfilterQueryStr = (v)=>{
    return TAB_FILTER_QUERY_STR[v]
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