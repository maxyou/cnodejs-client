import axios from 'axios'

export const ACTION = {
    HTTP_REQUEST: 'http_request',
    HTTP_FAILURE: 'http_failure',
    HTTP_SUCCESS: 'http_success'
}
export const httpRequest = () => ({ type: ACTION.HTTP_REQUEST })
export const httpFailure = (v) => ({ type: ACTION.HTTP_FAILURE, payload: v })
export const httpSuccess = (v) => ({ type: ACTION.HTTP_SUCCESS, payload: v })

export function httpGet(url){

    // console.log('action httpGet:' + url)
    return function(dispatch){
        dispatch(httpRequest())

        return axios.get(url)
        .then(
            res=>{
                if(res.status===200){
                    // console.log('axios 200')
                    // console.log(res)
                    // dispatch(httpSuccess(res.data.data))
                    dispatch(httpSuccess(res.data))
                }
                // console.log(res)
            }
        )
    }
}