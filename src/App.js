import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";


function App() {


  const {user} = useSelector((state) => state.user)
  console.log(user)
  return (
    <div className="dark">
    
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
</Router>
    
    </div>
  );
}

export default App;
