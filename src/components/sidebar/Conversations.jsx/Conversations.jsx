import React from "react";
import { useSelector } from "react-redux";
import Conversation from "./Conversation";

export default function Conversations() {
  const { conversations ,activeConversation} = useSelector((state) => state.chat);

  console.log('=<',activeConversation)
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations.filter((c) => c.latestMessage || c._id === activeConversation._id)
          .map((convo) => (
            <Conversation convo={convo} key={convo._id} />
          ))}
      </ul>
    </div>
  );
}