import axios from 'axios';
import { toast } from 'react-toastify';

export function PostClient(client) {

    return async (dispatch) => {
        const json = await axios.post(`/api/clients`, client)
        return dispatch({
            type: 'POST_CLIENT',
            payload: json
        })
    }
}

export function PutClient(client, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return async (dispatch) => {
        const json = await axios.put(`/api/clients`, client, config)
        return dispatch({
            payload: json.data
        })
    }
}

export function PostReview(cont) {
    return async (dispatch) => {
        const json = await axios.post(`/api/reviews`, cont)
        const notify = () =>
            toast.success("Reseña enviada!", {
                icon: "🚀"
            });
            return notify()
    }

}

export function PutFavorites(id,token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return async (dispatch)=>{
        const json= await axios.put(`/api/clients`,id,config)
        const notify = () =>
        toast.success("Favorito eliminado!", {
            icon: "🚀"
        });
        return notify()
}
    }
