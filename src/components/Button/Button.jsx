/* eslint-disable react/prop-types */
import "./Button.css";

const Button = ({ text, bgClr = "#01e2c2", clr = "#000" }) => {
  return (
    <>
      <a
        href=""
        className="cus-btn"
        style={{ backgroundColor: bgClr, color: clr }}
      >
        {text}
      </a>
    </>
  );
};

export default Button;
