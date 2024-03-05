import React, { useRef, useState } from "react";
import EmaojiPickerApp from "./EmaojiPickerApp";
import { Attachments } from "./attachments";
import { SendIcon } from "../../../svg";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../app/features/chatSlice";
import { ClipLoader } from "react-spinners";
import SocketContext from "../../../context/SocketContext";

function ChatActions({socket}) {
  const dispatch = useDispatch();
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAtatchments, setShowAtachments] = useState(false);
  const { activeConversation, status } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const [message, setMessage] = useState("");
  const textRef = useRef();
  const values = {
    message,
    convo_id: activeConversation._id,
    files: [],
    token,
  };

  const SendMessageHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
  let newMsg = await dispatch(sendMessage(values));
   socket.emit("send message",newMsg.payload);

    setMessage("");
    setLoading(false);
  };

  return (
    <form
      onSubmit={(e) => SendMessageHandler(e)}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/*Container */}
      <div className="w-full flex items-center gap-x-2">
        <ul className="flex gap-x-2">
          <EmaojiPickerApp
      textRef={textRef}
            message={message}
            setMessage={setMessage}
          
          />
          <Attachments
            showAtatchments={showAtatchments}
            setShowAtachments={setShowAtachments}
          />
        </ul>
        {/* Input */}
        <Input message={message} setMessage={setMessage} textRef={textRef} />
        {/*snd button */}
        <button type="submit" className="btn">
          {status === "loading" && loading ? (
            <ClipLoader color="#E9EDEF" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  );
}
const CahatActionsWithSocket  = (props) =>(
  <SocketContext.Consumer>
    {(socket) => <ChatActions {...props} socket={socket}/>}
  </SocketContext.Consumer>
)
export default CahatActionsWithSocket 