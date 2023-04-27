import React from "react";

export default function ImageBody({ image }) {

//   image.map((e)=>console.log(e.urls.small))

  return (
    <div className="imageContainer">
      {image.map((e,index) => (
        <img className="image" key={index} src={e.urls.small} alt="" />
      ))}
    </div>
  );
}
