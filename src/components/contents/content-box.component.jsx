import React from "react";

export const ContentBox = ({children, className, ...props}) => (
    <div className={`flex flex-col items-center ${className}`} {...props}>{children}</div>
);