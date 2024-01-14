import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singInSchema } from "../../utils/validations";
import AuthInput from "../AuthInput";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useNavigate } from "react-router-dom";
import { loginUser} from "../../app/features/userSlice";


export default function Login() {
  console.log(process.env.REACT_APP_API_ENDPOINT);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singInSchema),
  });

  const onSubmit = async (values)=>{
  let res = await dispatch(loginUser({...values}))
  if(res?.payload?.user){
    navigate("/")
  }

  }
  

 
  return (
    <div className=" w-full flex items-center justify-center overflow-hidden ">
      {/*Container */}
      <div className=" max-w-d space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/** Heading */}
        <div className="text-center dark:text-white">
          <h2 className="mt-6 text-3xl font-bold">Wellcome back</h2>
          <p className="mt-2 text-sm">Sign In</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
   
          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          />

   

          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          />
       

          {error ? (
            <div>
              <p className="text-red-400">{error}</p>
            </div>
          ) : null}

          <button
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
            type="submit"
          >
            {status === "loading" ? (
              <PulseLoader color="#fff" size={16} />
            ) : (
              "Sign in"
            )}
          </button>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span>you do noy have an account ?</span>
            <Link
              to={"/register"}
              className="  hover:underline cursor-pointer ease-in duration-300"
            >
              {" "}
              Sing up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
