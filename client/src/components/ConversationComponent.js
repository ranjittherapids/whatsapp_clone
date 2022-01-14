import React, { useState,useEffect, useRef } from "react";
import styled from "styled-components";
import { SearchContainer} from "./ContactListComponent";
import Picker from "emoji-picker-react";
//import { messagesList } from "../mockData";
import Send from '@material-ui/icons/Send';
import Mic from '@material-ui/icons/Mic';
import AttachFile from '@material-ui/icons/AttachFile';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  width: 100%;
  background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ContactName = styled.span`
  font-size: 16px;
  color: black;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
  position:relative;
`;
const SearchInput=styled.input`
width: 100%;
padding:5px;
outline: none;
border: none;
font-size: 15px;
`
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background: #e5ddd6;
`;
const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
`;
const SendIcon=styled.div`
display: flex;
color: #303030;
margin:0px 10px;
`
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  padding: 8px 10px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: 0.4;
  margin:0px 5px;
  cursor: pointer;
`;
function ConversationComponent(props) {
  const {arivalmessage,socket,selectedChat } = props;
  const [text, setText] = useState('');
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [receiverId, setreceiverId] = useState('');
  const [sendvoiceicon, setsendvoiceicon] = useState(false)
   const scrollref = useRef( )
   const userinfo =JSON.parse(sessionStorage.getItem("userinfo")) 
  const onEnterPress = (event) => {
    setsendvoiceicon(false)
    if (event.key === "Enter") {
      const messages = [...messageList];
      const sender = sessionStorage.getItem("user");
      setText("");
      socket?.current?.emit('sendmessage',{
        senderId:userinfo.socketId,
        receiverId:receiverId,
        text:text
      })
     
    }
  };
  const sendMessage=()=>{
    socket?.current?.emit('sendmessage',{
      senderId:userinfo.socketId,
      receiverId:receiverId,
      text:text
    })
  
    setsendvoiceicon(false)
    setText("");
  }
  useEffect(()=>{
    setreceiverId(selectedChat.socketId)
  },[selectedChat])

  useEffect(() => {
    scrollref?.current?.scrollIntoView({behavior:"smooth"}) 
  }, [messageList])
 
  return (
    <Container>
      <ProfileHeader>
        <ProfileInfo>
          <ProfileImage src={selectedChat.profilePic} />
          <ContactName>{selectedChat.name}</ContactName>
        </ProfileInfo>
      </ProfileHeader>
      <MessageContainer>
        {messageList.map((messageData) => (
          <div ref={scrollref}>
      <MessageDiv isYours={messageData?.senderId === 0}>
            <Message isYours={messageData?.senderId === 0}>
              {messageData?.text}
            </Message>
          </MessageDiv>
          </div>
    
        ))}
      </MessageContainer>

      <ChatBox>
      {pickerVisible && (
            <Picker
              pickerStyle={{ position: "absolute",
              left:"0px",
              width:"100%",
               bottom: "60px" }}
              onEmojiClick={(e, emoji) => {
                  setText(text + emoji.emoji)
                  togglePicker(false)
              }}
            />
          )}
      <EmojiImage
            src={"/whatsapp-clone/data.svg"}
            onClick={() => togglePicker((pickerVisible) => !pickerVisible)}
          />
          <AttachFile style={{
            color:"gray",
            margin:"0px 10px",
            transform:"rotate(45deg)"
            }}/>
        <SearchContainer>      
          <SearchInput
            placeholder="Type a message"
            value={text}
            onKeyDown={onEnterPress}
            onChange={(e) =>{
              if(e.target.value.length==0){setsendvoiceicon(false)}
              else{setsendvoiceicon(true)}
              setText(e.target.value)        
            } }
          /> 
        </SearchContainer>
        <SendIcon>
       {sendvoiceicon?<Send onClick={sendMessage}/>:<Mic/>}
       </SendIcon>
      </ChatBox>
    </Container>
  );
}

export default ConversationComponent;
