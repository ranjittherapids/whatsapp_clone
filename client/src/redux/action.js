import axios from 'axios'
const HTTP="http://localhost:8000"
export const create_user=(data,navigate)=>dispatch=>{
axios.post(`${HTTP}/crud/create_user`,data)
.then(response=>{
    console.log("wow man ")
    dispatch({
        type:"CREATE_USER",
        payload:response.data
    })
    sessionStorage.setItem('userinfo',JSON.stringify(response.data.data));
    navigate("/home");
})
.catch(err=>{
    dispatch({
        type:"CREATE_USER",
        payload:{data:false,msg:err}
    })
})
}
export const get_user=()=>dispatch=>{
    axios.get(`${HTTP}/crud/get_user`)
    .then(response=>{
        dispatch({
            type:"GET_USER",
            payload:response.data
        })
    })
    .catch(err=>{
        dispatch({
            type:"GET_USER",
            payload:{data:false,msg:err}
        })
    })
    }