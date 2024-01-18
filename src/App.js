import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SocketContext from "./context/SocketContext";
// soket io

const socket  = io(process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0])


function App() {



  return (
    <div className="dark">
      <SocketContext.Provider value={socket}>
<Router>
  <Routes>
    <Route path="/" element={<Home socket={socket}/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
</Router>
</SocketContext.Provider>
    </div>
  );
}

export default App;
