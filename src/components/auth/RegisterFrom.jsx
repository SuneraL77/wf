import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singUpSchema } from "../../utils/validations";
import AuthInput from "../AuthInput";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useNavigate } from "react-router-dom";
import { changeStatus, registerUser } from "../../app/features/userSlice";
import Picture from "./Picture";
import axios from "axios";
const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const cloud_secret = process.env.REACT_APP_CLOUD_SECRET;

export default function RegisterFrom() {
  console.log(process.env.REACT_APP_API_ENDPOINT);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const [picture, setPicture] = useState();
  const [readablePicture, setReadablePicture] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singUpSchema),
  });

  

  const onSubmit = async (data) => {

    dispatch(changeStatus("loading"))
    if (picture) {
      // eslint-disable-next-line no-use-before-define
      await uploadImage().then(async (response) => {
      let res = await dispatch(
          registerUser({ ...data, picture: response.secure_url })
        );
        if (res?.payload?.user) {
          navigate("/");
        }
      });
    
      
    } else {
    let res = await dispatch(registerUser({ ...data, picture: "" }));
      console.log(res);

      if (res?.payload?.user) {
        navigate("/");
      }
    }
  

   
  };
  const uploadImage = async () => {
    let formData = new FormData();
    formData.append("upload_preset", cloud_secret);
    formData.append("file", picture);
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    );
    console.log(data);
    return data;
  };

  console.log("values", watch());
  console.log("errors", errors);
  console.log(picture);
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden ">
      {/*Container */}
      <div className="max-w-d space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/** Heading */}
        <div className="text-center dark:text-white">
          <h2 className="mt-6 text-3xl font-bold">Wellcome</h2>
          <p className="mt-2 text-sm">Sign Up</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="name"
            type="type"
            placeholder="Full Name"
            register={register}
            error={errors?.name?.message}
          />

          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          />

          <AuthInput
            name="status"
            type="text"
            placeholder="Status (Optional)"
            register={register}
            error={errors?.status?.message}
          />

          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          />
          <Picture
            readablePicture={readablePicture}
            setReadablePicture={setReadablePicture}
            setPicture={setPicture}
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
              "Sign up"
            )}
          </button>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span> have an account ?</span>
            <Link
              to={"/login"}
              className="  hover:underline cursor-pointer ease-in duration-300"
            >
              {" "}
              Sing in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
