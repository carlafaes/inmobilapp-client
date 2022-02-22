import axios from 'axios';

export function PostClient(client) {
    
    return async (dispatch)=>{
        const json =await axios.post(`http://localhost:3000/api/clients`,client)
        return dispatch({
            type:'POST_CLIENT',
            payload:client
        })
    }
}

export function LoginClientP(client){
    return async (dispatch)=>{
        const {data} = await axios.post(`http://localhost:3000/api/clients`,client)
        return dispatch({
            payload:data
        })

    }
}