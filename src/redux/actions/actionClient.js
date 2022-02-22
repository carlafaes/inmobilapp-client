import axios from 'axios';
const url=`http://localhost:3000/api`;
export function PostClient(client) {
    
    return async (dispatch)=>{
        const json =await axios.post(`${url}/clients`,client)
        return dispatch({
            type:'POST_CLIENT',
            payload:client
        })
    }
}

// export function homeClient (id){
//     const {data} = await axios.get(`${url}/client/${id}`)
//     return dispatch({
//         type:'GET_CLIENT_ID',
//         payload:data
//     })
// }