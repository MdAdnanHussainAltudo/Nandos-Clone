import Overlay from "../../Overlay/Overlay";

/* eslint-disable react/prop-types */
const Banner = ({ banner, index }) => {
  return (
    <>
      <div
        className={`h-screen max-h-[38rem] w-100 ${banner.cls} p-0 bg-cover bg-center md:bg-left`}
        style={{ backgroundImage: `url(/images/banner${index + 1}.jpg)` }}
      >
        <Overlay content={banner.content} />
      </div>
    </>
  );
};

export default Banner;
