
const initialvalue={
    allusers:"",
    socket:"",
    chat:""
}

export const reducer=((state=initialvalue,action)=>{
const{type,payload}=action
switch(type){
    case "GET_USER":{
        return {...state,allusers:payload}
    }
    case "CONNECT_SOCKET":{
        return {...state,socket:payload}   
    }
    case "CREATE_CHAT":{
        return {...state,chat:payload}   
    }
    default :{
        return{...state}
    }
}
})