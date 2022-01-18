import React from "react";
import styled from "styled-components";
import { contactList } from "../mockData";
import MoreVert from '@material-ui/icons/MoreVert';
import Chat from '@material-ui/icons/Chat';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import './ContactListComponent.css'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.6;
  height: 100%;
  width: 100%;
  border-right: 1px solid #dadada;
`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  color:gray;
  background: #ededed;
  padding: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  padding: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
  gap: 10px;
`;
const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
`;
export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;

  :hover {
    background: #ebebeb;
  }
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 12px;
`;

const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`;

const MessageText = styled.span`
  width: 100%;
  font-size: 14px;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
`;

const MessageTime = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
`;

const ProfileImage = styled.img`
  width:50px;
  height:50px;
  border-radius: 50%;
`;
const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  object-fit: cover;
`;
const ProfileInfoDivLeft=styled.div`
 
`
const ContactComponent = (props) => {
  const { userData, setChat, } = props;
  return (
    <ContactItem onClick={() => setChat(userData)}>
      <ProfileIcon src={userData.profilePic} />
      <ContactInfo>
        <ContactName>{userData?.name}</ContactName>
        <MessageText>{userData?.lastText}</MessageText>
      </ContactInfo>
      <MessageTime> {userData?.lastTextTime}</MessageTime>
    </ContactItem>
  );
};
function ContactListComponent(props) {
  const {allusers}=props
  return (
    <Container>
      <ProfileInfoDiv>
        <ProfileImage src={"/whatsapp-clone/profile/s.jpeg"} />
        <ProfileInfoDivLeft>
        <SupervisedUserCircle  className="profiledivicon"/>
        <Chat className="profiledivicon"/>
        <MoreVert className="profiledivicon"/>
        </ProfileInfoDivLeft>
     
        
      </ProfileInfoDiv>
      <SearchBox>
        <SearchContainer>
          <SearchIcon src={"/whatsapp-clone/search-icon.svg"} />
          <SearchInput placeholder="Search or start new chat" />
        </SearchContainer>
      </SearchBox>
      {allusers && allusers?.map((userData,index) => (
        <ContactComponent key={index} userData={userData} setChat={props.setChat} />
      ))}
    </Container>
  );
}

export default ContactListComponent;
