import React from "react";

export const Description = ({children, ...others}) => {
    const styles = others.className;
    return (
        <p className={`block text-center font-light ${styles}`}>{children}</p>
    )
}