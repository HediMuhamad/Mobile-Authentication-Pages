import React from "react";

export const Header = ({children, className, ...props}) => {
    return (
    <h1 className={`w-full text-center text-3xl font-bold ${className}`}>{children}</h1>
)}