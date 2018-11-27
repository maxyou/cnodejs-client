import axios from 'axios'

export const ACTION = {
    HTTP_REQUEST: 'detail_http_request',
    HTTP_FAILURE: 'detail_http_failure',
    HTTP_SUCCESS: 'detail_http_success'
}
export const httpRequest = () => ({ type: ACTION.HTTP_REQUEST })
export const httpFailure = (v) => ({ type: ACTION.HTTP_FAILURE, payload: v })
export const httpSuccess = (v) => ({ type: ACTION.HTTP_SUCCESS, payload: v })

export function httpGet(url){

    console.log('detail action httpGet:' + url)
    return function(dispatch){
        dispatch(httpRequest())

        return axios.get(url)
        .then(
            res=>{
                if(res.status===200){
                    console.log('detail axios 200')
                    // console.log(res)
                    dispatch(httpSuccess(res.data))
                }else{
                    console.log('detail axios not 200')
                    console.log(res)
                }
            }
        )
    }
}