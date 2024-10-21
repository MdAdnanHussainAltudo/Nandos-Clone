import NavbarNav from "../NavbarNav/NavbarNav";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <>
      <div className="menubar d-none d-lg-block mt-auto mb-2 w-full px-7">
        <NavbarNav />
      </div>
    </>
  );
};

export default MenuBar;
