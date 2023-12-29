import React from "react";
import { useState } from "react";
import "./NewSlider.css";
// import { useEffect } from "react";

import img1 from "./Images/image1.jpg";
import img2 from "./Images/image2.jpg";
import img3 from "./Images/image3.jpeg";
import img4 from "./Images/image4.jpeg";
import img5 from "./Images/image5.jpeg";
import img6 from "./Images/image6.avif";
import img7 from "./Images/image7.avif";

function NewSlider() {
  const imagesArray = [img6, img3, img4, img5, img2, img7, img1];
  const [index, setindex] = useState(0);

  const changeIndex = (i) => {
    setindex(i);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (index < imagesArray.length-1) {
  //       setindex(index + 1);
  //     } else if (index >= imagesArray.length-1) {
  //       setindex(0);
  //     }
  //     else{

  //     }
  //   }, 500)
  // }, [index]);

  return (
    <>
      <div class="text-center">
        {imagesArray.map((e, i) => {
          return (
            <div className="" key={i}>
              {i === index && (
                <img
                  src={e}
                  alt=""
                  style={{
                    width: "75vw",
                    height: "70vh",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div class="text-center">
        {imagesArray.map((e, i) => {
          return (
            <span
              onClick={() => changeIndex(i)}
              className=""
              key={i}
              style={{ margin: "2vw", fontSize: "3vh" }}
              stkey={i}
            >
              ___
            </span>
          );
        })}
      </div>

      <div class="d-flex justify-content-center">
        {imagesArray.map((e, i) => {
          return (
            <div className="ml-2" key={i}>
                <img
                  src={e}
                  alt=""
                  style={{
                    width: "5vh",
                    height: "5vh",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => changeIndex(i)}
                />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NewSlider;
