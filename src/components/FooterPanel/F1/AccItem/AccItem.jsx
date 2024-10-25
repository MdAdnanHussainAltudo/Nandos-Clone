/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./AccItem.css";

const AccItem = ({ accord, index }) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);
  const [isExpanded, setIsExpanded] = useState(isWideScreen);

  useEffect(() => {
    const handleResize = () => {
      const wideScreen = window.innerWidth >= 768;
      setIsWideScreen(wideScreen);
      setIsExpanded(wideScreen);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = () => {
    if (!isWideScreen) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <>
      <div
        className={`accordion-item bg-black col px-4 md:!px-1 ${
          !isWideScreen ? "bor-bot" : "border-0"
        }`}
      >
        <h2 className="accordion-header">
          <button
            className="accordion-button bg-black px-2 md:px-0 py-2 md:!py-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={isWideScreen ? "#accordnone" : `#accord${index}`}
            aria-expanded={isExpanded}
            aria-controls={isWideScreen ? "accordnone" : `accord${index}`}
            onClick={handleButtonClick}
          >
            <div className="text-white md:text-center fw-semibold text-lg lg:text-xl w-full uppercase">
              {accord.title}
            </div>
          </button>
        </h2>
        <div
          id={`accord${index}`}
          className={`accordion-collapse collapse ${isExpanded ? "show" : ""}`}
        >
          <div
            className={`accordion-body text-white md:text-center fw-bold text-lg lg:text-xl py-0 md:px-0 ${
              !isWideScreen ? "ps-8" : ""
            }`}
          >
            {accord.elements.map((ele, eleIndex) => (
              <div key={eleIndex} className="my-3 leading-6">
                <a href="">{ele.item}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="hr md:hidden border-1 border-[#181818] border-solid" />
    </>
  );
};

export default AccItem;
