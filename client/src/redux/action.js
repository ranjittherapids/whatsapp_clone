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

    //for chat 
    //get_chat/:SenderID/:ReceiverID
    export const create_chat=(sender,receiverId,text)=>dispatch=>{
        axios.post(`${HTTP}/chat/create_chat`,{
            SenderID:sender,
            ReceiverID:receiverId,
            Text:text
        })
        .then(response=>{
            dispatch({
                type:"CREATE_CHAT",
                payload:response.data
            })
        })
        .catch(err=>{
            dispatch({
                type:"CREATE_CHAT",
                payload:{data:false,msg:err}
            })
        })
        }
        export const get_chat=(ReceiverID)=>dispatch=>{
            const userinfo =JSON.parse(sessionStorage.getItem("userinfo"));
            axios.get(`${HTTP}/chat/get_chat${userinfo.userId}/${ReceiverID}`)
            .then(response=>{
                dispatch({
                    type:"GET_CHAT",
                    payload:response.data
                })
            })
            .catch(err=>{
                dispatch({
                    type:"GET_CHAT",
                    payload:{data:false,msg:err}
                })
            })
            }