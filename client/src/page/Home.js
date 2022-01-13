import React, { useState,useEffect,useRef } from "react";
import styled from "styled-components";
import ContactListComponent from "../components/ContactListComponent";
import ConversationComponent from "../components/ConversationComponent";
import { io } from "socket.io-client";
//import { contactList } from "./mockData";
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
  const [selectedChat, setChat] = useState();
  const [adduser,setadduser]= useState();
  const [allusers, setallusers] = useState([])
  const [messageList, setMessageList] = useState()
  const [arivalmessage, setarivalmessage] = useState(null)
  const [ok,setok]= useState(false);
  const socket = useRef(io('http://localhost:8000',{ transports: ["websocket",'polling']}))
  // useEffect(() => {
  //   socket.current.emit('adduser',user_id)
  // },[user])
  useEffect(() => {
    socket.current.emit('adduser',{userId:adduser})
    socket.current.on('getuser',user=>setallusers(user))
    sessionStorage.setItem("user", adduser);
    //document.cookie =`user=${adduser}`;
    localStorage.setItem('user',JSON.stringify(adduser))

  },[ok])
   useEffect(() => {
    socket.current.on('getuser',user=>setallusers(user))
    socket.current.on('getmessage',messages=>{
      setMessageList([messageList,{
        sender:messages.senderId,
        text:messages.text,
        createAt:Date.now()
      }])
      console.log(messages,messageList,'from app man ')
    })
   },[])
  return (
    <Container>
      <ContactListComponent allusers={allusers} setChat={setChat} />
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

