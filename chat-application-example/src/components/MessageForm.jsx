import React, {useState} from "react";
import {SendOutlined, PictureOutlined} from "@ant-design/icons";
import { sendMessage,isTyping } from "react-chat-engine";


const MessageForm = (props) => {
   
    
const [value,setValue]= useState("");
const {chatId,creds}= props;


const handleChange = (event) => {

    setValue(event.target.value);    

    isTyping(props,chatId)

};

const handlesubmit = (event) => {
   event.preventDefault();

   const text=value.trim()
   if(text.length > 0)
   {
    sendMessage(creds,chatId,{text})
   }

  setValue("");
  
};

const handleupload =(event) => {
    sendMessage(creds,chatId,{files: event.target.files,text:""})
};
  
return(
    <form className="message-form" onSubmit={handlesubmit}>
    <input
    className="message-input"
    placeholder="Send a Message"
    value={value}
    onChange={handleChange}
    onSubmit={handlesubmit}
    />
    <label htmlFor="upload-button">
      <span className="Image-button">
      <PictureOutlined className="picture-icon"/>




      </span>


    </label>

    <input
    type="file"
    multiple={false}
    id="upload-button"
    style={{display:"none"}}
    onChange={handleupload.bind(this)}
    />

    <button type="submit" className="=send-button">
        <SendOutlined className="send-icon"
        />
    </button>




    </form>
)


};


export default MessageForm