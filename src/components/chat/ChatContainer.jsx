import React, { useEffect } from "react";
import ChatHeder from "./header/ChatHeder";
import ChatMessages from "./messages/ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import {getcreateconversationMessage } from "../../app/features/chatSlice";
import { ChatActions } from "./actions";
import { getConversationId } from "../../utils/chat";

export default function ChatContainer({onlineUsers}) {
  const { activeConversation, messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const dispatch = useDispatch()
  const values = {
    token,
    convo_id: activeConversation?._id,
  };
  useEffect(() => {
    if (activeConversation?._id) {
        dispatch(getcreateconversationMessage(values))
    }
  }, [activeConversation]);


  return (
    <div className="relative w-full h-full border-1 dark:dark_border_2 select-none overflow-hidden">
      {/*Container */}
      <div>
        {/*Chat header*/}
        <ChatHeder online={onlineUsers.find((u) => u.userId === getConversationId(user,activeConversation.users) ? true :false)}/>
        {/*Chat Messages */}
        <ChatMessages />
        {/*Chat Actions */}
        <ChatActions/>
      </div>
    </div>
  );
}
