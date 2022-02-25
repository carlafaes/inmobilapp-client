import axios from 'axios';

export function PostClient(client) {
    
    return async (dispatch)=>{
        const json =await axios.post(`http://localhost:3001/api/clients`,client)
        return dispatch({
            type:'POST_CLIENT',
            payload:json
        })
    }
}
// export function cleanActiveUser(){
//     return{ 
//         type:'CLEAN_ACTIVE_USER'
//     }
// }

export function ClientById(id){
   return async (dispatch)=>{
    const json=await axios.get(`http://localhost:3001/api/clients/${id}`)
    return dispatch({
        type:'CLIENT_BY_ID',
        payload:json
    })
}
}
