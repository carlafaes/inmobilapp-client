import axios from 'axios';

export function PostClient(client) {

    return async (dispatch) => {
        const json = await axios.post(`/api/clients`, client)
        return dispatch({
            type: 'POST_CLIENT',
            payload: json
        })
    }
}

export function PutClient(client,token){
    const config={
        headers: {
            Authorization:`Bearer ${token}`
        }
    }
    return async (dispatch) => {
        const json = await axios.put(`/api/clients`,client,config)
        return dispatch({
            payload: json.data
        })
    }
}
