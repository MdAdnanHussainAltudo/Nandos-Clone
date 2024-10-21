import NavbarNav from "../NavbarNav/NavbarNav";
import Button from "../../Button/Button";

let btns = [
  {
    text: "Log In",
  },
  {
    text: "Sign Up",
  },
];

const CollapseMenu = () => {
  return (
    <div className="collapse navbar-collapse px-4" id="navbarNav">
      <div className="flex gap-4 justify-between md:justify-start">
        {btns.map((btn, index) => (
          <Button key={index} text={btn.text} bgClr="#000" clr="#fff" />
        ))}
      </div>
      <NavbarNav />
    </div>
  );
};

export default CollapseMenu;
