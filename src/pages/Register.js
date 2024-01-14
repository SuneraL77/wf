import RegisterFrom from "../components/auth/RegisterFrom";

export default function Register () {
    return(
 
        <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px]">
            {/* conatiner*/}
            <div className="flex w-[1600px] mx-auto h-full" >
                {/*Register from*/}
                <RegisterFrom/>
            </div>
        
        </div>
       
    )
}