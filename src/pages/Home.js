import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../components/sidebar";
import { useEffect } from "react";
import { getConvrsations } from "../app/features/chatSlice";

export default function Home() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    useEffect(() =>{
        if(user?.token){
            dispatch(getConvrsations(user.token))
        }
    },[user])
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* container */}
      <div className="container h-screen flex">
        {/*sidebar*/}
        <Sidebar />
      </div>
    </div>
  );
}
