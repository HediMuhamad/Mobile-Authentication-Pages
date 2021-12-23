import React from "react";

export const ImageView = ({backgroundImage, className, ...props}) => (
     <div className={`w-full h-[22.5rem] rounded-lg bg-blue-100 bg-center bg-no-repeat bg-abstract-image ${className}`}
          style={{backgroundSize:'70%'}}
          onClick={()=>{window.open('https://storyset.com/','__blank')}}
     ></div>
);