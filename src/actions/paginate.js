export const ACTION = {
    NAVI: 'paginate_navi',
    MAX_PAGINATE: 'paginate_max'
}
export const paginate = (v) => ({ type: ACTION.NAVI, payload: v })
