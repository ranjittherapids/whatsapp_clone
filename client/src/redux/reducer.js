
const initialvalue={
    allusers:"",
    socket:""
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
    default :{
        return{...state}
    }
}
})