import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {


  const {user} = useSelector((state) => state.user)
  console.log(user)
  return (
    <div className="dark">
    
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
</Router>
    
    </div>
  );
}

export default App;
