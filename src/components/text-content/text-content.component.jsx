import React from "react";
import { Header } from "../header/header.component";
import { Description } from "../description/description.component";

export const TextContent = ({headerText, paragraphText, headerTextStyle, paragraphTextStyle,className, ...props}) => {
    return(
        <div className={`w-full aspect-[1/0.6] p-3 flex flex-col ${className}`}>
            <Header className={headerTextStyle}>{headerText}</Header>
            <Description className={paragraphTextStyle}>{paragraphText}</Description>
        </div>
    )
}