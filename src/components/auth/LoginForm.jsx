import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { singUpSchema } from "../../utils/validations";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(singUpSchema)
  });
  const onSubmith = (data) =>  console.log(data)
  console.log("values",watch())
  console.log("errors",errors)
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden ">
      {/*Container */}
      <div className="max-w-d space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/** Heading */}
        <div className="text-center dark:text-white">
          <h2 className="mt-6 text-3xl font-bold">Wellcome</h2>
          <p className="mt-2 text-sm">Sign In</p>
        </div>
        <form onSubmit={handleSubmit()} className="mt-6 space-y-6">
         
  <button onSubmith={handleSubmit(onSubmith)}>submith</button>
        </form>
      </div>
    </div>
  );
}
