import React from "react";
import { Header } from "../header/header.component";
import { Description } from "../description/description.component";

export const TextContent = ({headerText, paragraphText, headerTextStyle, paragraphTextStyle, ...others}) => {
    const styles = others.className;
    return(
        <div className={`w-full aspect-[1/0.6] p-3 flex flex-col ${styles}`}>
            <Header className={headerTextStyle}>{headerText}</Header>
            <Description className={paragraphTextStyle}>{paragraphText}</Description>
        </div>
    )
}