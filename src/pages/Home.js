import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../components/sidebar";
import { useEffect } from "react";
import { getConvrsations } from "../app/features/chatSlice";
import { ChatContainer, WhatsappHome } from "../components/chat";
import SocketContext from "../context/SocketContext";

 function Home({socket}) {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    const {activeConversation} = useSelector((state) => state.chat);
   
   useEffect(() =>{
socket.emit("join",user._id)
   },[user])
    useEffect(() =>{
        if(user?.token){
            dispatch(getConvrsations(user.token))
        }
    },[user])
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center   ">
      {/* container */}
      <div className="container h-screen flex py-[19px]">
        {/*sidebar*/}
        <Sidebar />
        {activeConversation._id ? <ChatContainer/>:
        <WhatsappHome/>
        }
      </div>
    </div>
  );
}

const HomeWithSoket = (props) =>(
  <SocketContext.Consumer>
{(socket) => <Home {...props} socket={socket}/>}
  </SocketContext.Consumer>
)
export default HomeWithSoket