import LoginForm from "../components/auth/LoginForm";

export default function Login () {
    return(
        <div>
        <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px]">
            <div className="flex w-[1600px] mx-auto h-full" >
                <LoginForm/>
            </div>
        
        </div>
        </div>
    )
}