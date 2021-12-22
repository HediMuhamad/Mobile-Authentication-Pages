import React from "react";

export const Header = ({children, ...others}) => {
    const otherStyles = others.className
    return (
    <h1 className={`w-full text-center text-3xl font-bold ${otherStyles}`}>{children}</h1>
)}