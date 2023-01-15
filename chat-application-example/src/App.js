import React from 'react'  ;
import {ChatEngine} from "react-chat-engine";
import './App.css';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {

  if(!localStorage.getItem("username")) return <LoginForm/>
  return  (  

     <ChatEngine
            height="100vh"
            projectID='4d6f5aaf-5d1d-490d-9fb1-ac29d215da3b'
 			      userName={localStorage.getItem("username")}
 			      userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}

      />
  )
  }
  export default App 