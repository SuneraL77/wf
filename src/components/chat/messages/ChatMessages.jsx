import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

export default function ChatMessages() {
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const endRef = useRef();

  useEffect(() =>{
   scrollToBottom()
  },[messages])

  const scrollToBottom = () =>{
    endRef.current.scrollIntoView({behavior:"smooth"})
  }
  return (
    <div
      className="mb-[60px bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')]
    bg-cover bg-no-repeat scrollbar 
    "
    >
      {/*Container */}
      <div className="overflow_scrollbar overflow-auto py-6 px-[6%]">
        {/*Messages */}
        {messages &&
          messages.map((message) => (
            <Message message={message} key={message._id} me={user._id === message.sender._id} />
          ))}
          <div  ref={endRef}></div>
      </div>
    </div>
  );
}
