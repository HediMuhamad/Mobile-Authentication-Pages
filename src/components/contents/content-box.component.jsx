import React from "react";

export const ContentBox = ({children, className}) => (
    <div className={`flex flex-col items-center ${className}`}>{children}</div>
);