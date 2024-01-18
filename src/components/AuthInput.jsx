import React from 'react'

export default function AuthInput({name,type,placeholder,register,error}) {
  return (
    <div>
      <div className='flex0030 max-w-[30%] mt-8 container-center text-white space-y-1'>
        <label htmlFor={name} className='text-sm font-bold tracking-wide'>
            {placeholder}
        </label>
        <input
        className='w-full bg-dark_bg_3 text-base py-3 px-4 rounded-lg outline-none'
        type={type}
        placeholder={placeholder}
        {...register(name)}

        />
        {error && <p className='text-red-400'>{error}</p>}
      </div>
    </div>
  )
}
