import React from "react";

export const Button = ({children, styles, ...others}) => (
    <button className='w-11/12 py-2 px-2 text-gray-800 bg-blue-100 font-semibold text-[1.05rem] rounded-md shadow-sm' {...others}>{children}</button>
)