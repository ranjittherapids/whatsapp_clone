import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {create_user} from '../redux/action'
import { Formik, Field,Form } from "formik";
import GoogleLogin from 'react-google-login';
import "./loginpage.css";
export default function Login() {
  const selector = useSelector(state => state)
  const [socket, setsocket] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    setsocket(selector?.socket)
  },[selector])
    socket?.current?.on("AddUserSocketId",(data)=>{
    dispatch(create_user(data,navigate))
    })
 
  const AddUser=(response)=>{
    socket?.current.emit("adduser",response)
    
  }
    //const responseGoogle=(response)=>{
     // AddUser(response.profileObj)
     //socket?.current.emit("adduser",response.profileObj)
    //}
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center border border-danger">
        <h1>Anywhere in your app!</h1>
      <div className="w-50">
          
          <Formik
            initialValues={{ name: "",phone_no:"", password: "" }}
            onSubmit={(values, { resetForm }) =>{
             // dispatch(create_user(values,navigate))
              AddUser(values)
              resetForm();
            }}
          >
            {({ values, handleSubmit }) =>{
              
            return <Form className='d-flex flex-column'>
                <label for='name'>enter name</label>
            <Field type="string" name="name" placeholder='enter string' className='w-35 m-2 p-2' />
            <label for='phone_no'>enter phone_no</label>
            <Field type="phone_no" name="phone_no"  placeholder='enter phone_no' className='w-35 m-2 p-2'  />
     
            <label for='password'>enter password</label>
            <Field type="password" name="password"  placeholder='enter password' className='w-35 m-2 p-2'  />
          
            <button type="submit" className='m-2' >Submit</button>
          </Form>
            }}
          </Formik>
      </div>
      <div className='d-flex justify-content-between border'>
      <GoogleLogin
    clientId="585809215339-29vgkd2avvcu8qnnkheoubforhpmil6a.apps.googleusercontent.com"
    buttonText="Login"
    //onSuccess={responseGoogle}
    // onFailure={responseGoogle(response)}
    cookiePolicy={'single_host_origin'}
  /> 
      </div>  
    </div>
  );
}
