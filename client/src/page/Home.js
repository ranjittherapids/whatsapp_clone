import React, { useState,useEffect } from "react";
import {useDispatch} from 'react-redux'
import styled from "styled-components";
import ContactListComponent from "../components/ContactListComponent";
import ConversationComponent from "../components/ConversationComponent";
import { useSelector } from "react-redux";
//import { contactList } from "./mockData";
import {get_user} from '../redux/action'
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw !importent;
  flex-direction: row;
  align-items: center;
  background: #f8f9fb;
`;

const ChatPlaceholder = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: contain;
`;
const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap:10px;
  color: rgba(0, 0, 0, 0.45);
  span {
    font-size: 32px;
    color: #525252;
  }
`;
function Home() {
  const dispatch = useDispatch()
  const [selectedChat, setChat] = useState();
  const [socket, setsocket] = useState(null)
  const [adduser,setadduser]= useState();
  const [allusers, setallusers] = useState([])
  const [messageList, setMessageList] = useState()
  const [arivalmessage, setarivalmessage] = useState(null)
  const [ok,setok]= useState(false);
const selector = useSelector(state => state)
  useEffect(() => {
    setsocket(selector?.socket)
   setallusers(selector?.allusers?.data)
   selector?.socket?.current?.on('getmessage',messages=>{
    setMessageList([messageList,{
      sender:messages.senderId,
      text:messages.text,
      createAt:Date.now()
    }])
    console.log(messages,'app')
  })
 
    //  console.log(selector.allusers.data,'from app man ')
      selector.allusers && selector.allusers.data.map(data=>{
       // console.log(data,"data")
        const userinfo =JSON.parse(sessionStorage.getItem("userinfo"));
        if(data._id==userinfo._id){
          sessionStorage.setItem('userinfo',JSON.stringify(data));
          //console.log(data,'wow')
        }
      })
  },[selector])
 
   useEffect(() => {
    socket?.current?.on('getmessage',messages=>{
      setMessageList([messageList,{
        sender:messages.senderId,
        text:messages.text,
        createAt:Date.now()
      }])
      console.log(messages,'from app man ')
    })
 setTimeout(()=>{
  dispatch(get_user())
 },1000)
    
   },[])
  return (
    <Container>
      <ContactListComponent allusers={allusers && allusers} setChat={setChat} />
      {selectedChat ? (
        <ConversationComponent arivalmessage={arivalmessage} socket={socket} selectedChat={selectedChat} />
      ) : (
        <Placeholder>
          <ChatPlaceholder src="/whatsapp-clone/welcome-placeholder.jpeg" />
          <span>Keep your phone connected</span>
          WhatsApp connects to your phone to sync messages.
          <input onChange={(e)=>{setadduser(e.target.value)}} value={adduser} type='string' placeholder="add user" />
      <button onClick={()=>setok(pre=>!pre)}>add</button>
        </Placeholder>
      )}
    </Container>
  );
}

export default Home;

