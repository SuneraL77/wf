import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../components/sidebar";
import { useEffect, useState } from "react";
import { getConvrsations, updateMessagesAndConversations} from "../app/features/chatSlice";
import { ChatContainer, WhatsappHome } from "../components/chat";
import SocketContext from "../context/SocketContext";

function Home({ socket }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
 const [onlineUsers,setOnlineUsers] = useState([])
  useEffect(() => {
    socket.emit("join", user._id);
    //get onlinrs users
    socket.on("get-online-users",(users) =>{
      console.log("online users",users 
      )
      setOnlineUsers(users)
    })
  }, [user]);
  useEffect(() => {
    if (user?.token) {
      dispatch(getConvrsations(user.token));
    }
  }, [user]);
  //lesten recevr msg
  useEffect(() => {
    socket.on("receive message", (message) => {
      if(activeConversation._id === message.conversation._id){
        dispatch(updateMessagesAndConversations(message));
      console.log(message)
      }

    });
  }, []);
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center   ">
      {/* container */}
      <div className="container h-screen flex py-[19px]">
        {/*sidebar*/}
        <Sidebar onlineUsers={onlineUsers}/>
        {activeConversation._id ? <ChatContainer onlineUsers={onlineUsers}/> : <WhatsappHome />}
      </div>
    </div>
  );
}

const HomeWithSoket = (props) => (
  <SocketContext.Consumer>
    {(socket) => <Home {...props} socket={socket} />}
  </SocketContext.Consumer>
);
export default HomeWithSoket;
