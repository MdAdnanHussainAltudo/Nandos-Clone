/* eslint-disable react/no-unescaped-entities */
// import Container from "react-bootstrap/Container";
import Logo from "/svgs/logo.svg";
import "../../assets/fonts/Nandos-Regular.ttf";
import "./Header.css";
import CollapseMenu from "./CollapseMenu/CollapseMenu";
import Button from "../Button/Button";
import MenuBar from "./MenuBar/MenuBar";

const Header = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-white justify-center">
        <div className="nav-cont flex justify-between items-center w-full mx-2 pb-2 z-20">
          <a className="navbar-brand flex items-end text-red-600 text-2xl">
            <img src={Logo} alt="" className="w-10 h-10 me-2" />
            <p className="hidden md:block fw-semibold italic">Nando's</p>
          </a>
          <MenuBar />
          <div className="flex">
            <div className="flex items-center me-2">
              <div className="hidden sm:flex items-center justify-center border-1 border-[#96c31e] h-8 w-8 rounded-full me-2">
                <i className="fa-solid fa-user text-[#96c31e]"></i>
              </div>
              <Button text={"Order Online"} />
            </div>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i
                  className="fas fa-bars"
                  style={{ fontSize: "2rem", color: "#ce0a24" }}
                ></i>
              </span>
            </button>
          </div>
        </div>
        <CollapseMenu />
      </nav>
    </>
  );
};

export default Header;
