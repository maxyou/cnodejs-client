export const ACTION = {
    ADD: 'add',
    FILTER: 'filter',
    TOGGLE: 'toggle'
}
export const add = (v) => ({ type: ACTION.ADD, payload: v })
export const toggle = (v) => ({ type: ACTION.TOGGLE, payload: v })
export const filter = (v) => ({ type: ACTION.FILTER, payload: v })