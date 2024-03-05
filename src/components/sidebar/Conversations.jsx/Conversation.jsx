import React from "react";
import { dateHandler } from "../../../utils/date";
import { useDispatch, useSelector } from "react-redux";
import { open_create_conversations } from "../../../app/features/chatSlice";
import { getConversationId ,getConversationName ,getConversationPicture} from "../../../utils/chat";
import  SocketContext from "../../../context/SocketContext" 
function Conversation({ convo, socket ,online}) {
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  const { token } = user;
  const values = {
    token,
    receiver_id: getConversationId(user, convo.users),
  };

 
  const openconversations = async () => {
   let newConvo = await dispath(open_create_conversations(values));
    socket.emit("Join conversation", newConvo.payload._id)
  };

  return (
    <li
      onClick={() => openconversations()}
      className={`list-none h-[72px] w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 dark:text-dark_text_1 cursor-pointer ${convo._id === activeConversation._id ?"" :"dark:bg-dark_bg_2"} ${convo._id === activeConversation._id ? "dark:bg-dark_hover_1":""} `}
    >
      {/*Container */}
      <div className={`relavite w-full flex items-center justify-between py-[10px] `}>
        {/*Left */}
        <div className="flex items-center gap-x-3">
          <div className={`relative min-w-[50px] h-[50px] rounded-full overflow-hidden  ${online? "online":""}` }>
            <img
              src={getConversationPicture(user, convo.users)}
              alt={getConversationName(user, convo.users)}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full  flex flex-col">
            {/*Conversation name */}
            <h1 className="font-bold items-center gap-x-2">{getConversationName(user, convo.users)}</h1>
            {/*Conversation message */}

            <div>
              <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                  {convo.latestMessage?.message.length > 20 ? `${convo.latestMessage?.message.substring(0,20)}...`:`${convo.latestMessage?.message}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Right */}
        <div className="flex flex-col gap-y-4 items-end text-xs">
          <span className="dark:text-dark_text_2">
            {convo.latestMessage?.createdAt ? dateHandler(convo.latestMessage.createdAt) : ''}
          </span>
        </div>
      </div>
      {/*Border*/}
      <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
    </li>
  );
}

const ConverstionWithContext = (props) => {
  return (
    <SocketContext.Consumer>
      {(socket) => <Conversation {...props} socket={socket} />}
    </SocketContext.Consumer>
  );
}

export default ConverstionWithContext;