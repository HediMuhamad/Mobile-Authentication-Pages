import React from "react";

export const TextField = ({className,...props}) => (
    <input className={`w-10/12 bg-white px-4 py-3 rounded-md text-black/60 shadow-md transition-all duration-150 ease-in-out ring-1 ring-blue-700/5 hover:shadow-black/5 focus:shadow-black/5 outline-none active:outline-none focus:outline-none ${className}`} {...props}></input>
)