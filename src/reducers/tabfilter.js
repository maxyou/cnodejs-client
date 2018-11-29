import {ACTION} from '../actions/tabfilter'

export const TAB_FILTER = {
    ALL: 'tabfilter_all',
    PRIMARY: 'tabfilter_primary',
    SHARE: 'tabfilter_share',
    ASK: 'tabfilter_ask',
    JOB: 'tabfilter_job',
    TEST: 'tabfilter_test'
}

const TAB_FILTER_STR = {
    [TAB_FILTER.ALL]: 'all',
    [TAB_FILTER.PRIMARY]: 'good',
    [TAB_FILTER.SHARE]: 'share',
    [TAB_FILTER.ASK]: 'ask',
    [TAB_FILTER.JOB]: 'job',
    [TAB_FILTER.TEST]: 'dev'
}
export const tabfilterStr = (v)=>{
    return TAB_FILTER_STR[v]
}
export const tabfilterQueryStr = (v)=>{
    return '?tab=' + TAB_FILTER_STR[v]
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