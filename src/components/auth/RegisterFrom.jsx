import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singUpSchema } from "../../utils/validations";
import AuthInput from "../AuthInput";
import { useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";

export default function RegisterFrom() {
  const { status } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singUpSchema),
  });
  const onSubmith = (data) => console.log(data);
  console.log("values", watch());
  console.log("errors", errors);
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden ">
      {/*Container */}
      <div className="max-w-d space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/** Heading */}
        <div className="text-center dark:text-white">
          <h2 className="mt-6 text-3xl font-bold">Wellcome</h2>
          <p className="mt-2 text-sm">Sign Up</p>
        </div>

        <form onSubmit={handleSubmit()} className="mt-6 space-y-6">
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
            placeholder="Status"
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

          <button
            onSubmith={handleSubmit(onSubmith)}
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
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
