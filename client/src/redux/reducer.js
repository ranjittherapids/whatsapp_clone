const initialvalue={
    user:""
}

export const reducer=((state=initialvalue,action)=>{
const{type,payload}=action
switch(type){
    case "CREATE_USER":{
return {...state,user:payload}
    }
    default :{
        return{...state}
    }
}
})