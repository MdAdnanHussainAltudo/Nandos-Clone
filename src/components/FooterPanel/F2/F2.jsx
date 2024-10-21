/* eslint-disable react-refresh/only-export-components */
import Apos from "../../Apos/Apos";
import Badge from "./Badge/Badge";

const F2 = () => {
  return (
    <div className="row gx-0 bg-[#1a1a1a] text-white flex-col md:flex-row pt-8 md:pb-8">
      <div className="col-12 col-md-6 max-w-[400px] mx-auto px-4 my-4">
        <h3
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: "Nandos" }}
        >
          Feed your app-etite
        </h3>
        <p className="mb-3 fw-semibold text-lg">
          Get the Nando
          <Apos />s app to order from your table, on-the-go or to your sofa
        </p>
        <div className="flex gap-x-16">
          <Badge index={0} />
          <Badge index={1} />
        </div>
      </div>
      <div className="col-12 col-md-6 max-w-[400px] my-0 mx-auto px-8 pt-2 ">
        <h3
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: "Nandos" }}
        >
          Only (Nando
          <Apos />
          s) fans
        </h3>
        <p className="mb-3 fw-semibold text-lg">
          Sign up for hot content. Like our emails and other juicy stuff. It
          <Apos />s free, too…
        </p>

        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control rounded-0 text-center"
            placeholder="Pop your email address in here"
            aria-label="email"
          />
          <span
            className="input-group-text rounded-0 bg-[#ffff00]"
            id="basic-addon1"
          >
            <i className="fa-solid fa-play text-[#ff00b4]"></i>
          </span>
        </div>
      </div>
      <div className="row gx-0 md:flex-row-reverse">
        <div className="col-12 col-md-6 flex justify-between max-w-[368px] w-full my-0 mx-auto px-8 py-4">
          <i className="fa-brands cursor-pointer transition-all duration-400 fa-square-facebook text-3xl hover:text-[#ff00b4]"></i>
          <i className="fa-brands cursor-pointer transition-all duration-400 fa-twitter text-3xl hover:text-[#ff00b4]"></i>
          <i className="fa-brands cursor-pointer transition-all duration-400 fa-instagram text-3xl hover:text-[#ff00b4]"></i>
          <i className="fa-brands cursor-pointer transition-all duration-400 fa-snapchat text-3xl hover:text-[#ff00b4]"></i>
          <i className="fa-brands cursor-pointer transition-all duration-400 fa-youtube text-3xl hover:text-[#ff00b4]"></i>
          <i className="fa-brands cursor-pointer transition-all duration-400 fa-spotify text-3xl hover:text-[#ff00b4]"></i>
        </div>
        <div className="col-12 col-md-6 flex justify-center md:justify-start max-w-[368px] my-0 mx-auto px-8 md:px-2 py-6 fw-semibold">
          <p>
            &copy; Nando
            <Apos />s 2024
          </p>{" "}
          &nbsp; | &nbsp;
          <a href="" className="underline hover:text-[#ff00b4]">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default F2;
