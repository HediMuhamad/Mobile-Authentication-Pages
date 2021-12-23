import React from "react";

export const Description = ({children, className, ...props}) => {
    return (
        <p className={`block text-center font-light ${className}`}>{children}</p>
    )
}