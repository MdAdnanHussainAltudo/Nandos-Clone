/* eslint-disable react/prop-types */

import Button from "../Button/Button";
import "./Overlay.css";

const Overlay = ({ content, bgClr, clr }) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="carousel-text text-white flex flex-col items-center text-center">
          <h1 className="cover-text text-2xl md:text-4xl rotate-[-3deg] my-4 flex justify-center flex-col items-center">
            <div className="my-3" style={{ fontFamily: "Nandos" }}>{content.header}</div>
          </h1>
          <p className="text-base md:text-xl rotate-[-3deg] mt-4 mb-10 fw-semibold drop-shadow-md barlow-regular p-2">
            {content.footer}
          </p>
          <Button text={"Order Now"} bgClr={bgClr} clr={clr} />
        </div>
      </div>
    </>
  );
};

export default Overlay;
