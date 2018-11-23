import axios from 'axios'

export const ACTION = {
    FETCH_POST_REQUEST: 'fetch_post_request',
    FETCH_POST_FAILURE: 'fetch_post_failure',
    FETCH_POST_SUCCESS: 'fetch_post_success'
}
export const fatchRequest = () => ({ type: ACTION.FETCH_POST_REQUEST })
export const fatchFailure = (v) => ({ type: ACTION.FETCH_POST_FAILURE, payload: v })
export const fatchSuccess = (v) => ({ type: ACTION.FETCH_POST_SUCCESS, payload: v })

export function httpGet(url){

    // console.log('action httpGet:' + url)
    return function(dispatch){
        dispatch(fatchRequest())

        return axios.get(url)
        .then(
            res=>{
                if(res.status===200){
                    // console.log('axios 200')
                    // console.log(res.data)
                    dispatch(fatchSuccess(res.data.data))
                }
                // console.log(res)
            }
        )
    }
}