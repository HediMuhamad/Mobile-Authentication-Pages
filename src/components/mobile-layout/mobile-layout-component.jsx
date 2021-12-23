import React from 'react';

export const MobileLayout = ({children, className, ...props}) => (
    <div className={`h-[44rem] flex flex-col items-center p-3 mx-auto rounded-xl shadow-[0_5px_15px_3px_rgb(0_0_0/0.075)] ${className}`}>{children}</div>
)