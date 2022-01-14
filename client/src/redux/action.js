import axios from 'axios'

const HTTP="http://localhost:8000"
export const create_user=(data)=>dispatch=>{
   // console.log(data)
axios.post(`${HTTP}/crud/create_user`,data)
.then(response=>{
   localStorage.setItem('user',JSON.stringify(response.data))
    dispatch({
        type:"CREATE_USER",
        payload:response.data
    })
})
.catch(err=>{
    dispatch({
        type:"CREATE_USER",
        payload:{data:false,msg:err}
    })
})
}