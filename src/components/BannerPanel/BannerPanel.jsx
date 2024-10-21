import Banner from "./Banner/Banner";

let bannerList = [
  {
    cls: "",
    content: {
      header: "Bottomless Soft Swirl",
      footer: "Cone or tub? Choose your fighter",
      btnText: "Order Now",
    },
  },
  {
    cls: "md:!w-1/2",
    content: {
      header: "Know a Nando’s lover?",
      footer: "Two words: gift card.",
      btnText: "Buy Now",
    },
  },
  {
    cls: "md:!w-1/2",
    content: {
      header: "Cookin’ up change",
      footer: "We’re changing how we do things bite by bite.",
      btnText: "Learn More",
    },
  },
];

const BannerPanel = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {bannerList.map((banner, index) => (
          <Banner key={index} banner={banner} index={index} />
        ))}
      </div>
    </>
  );
};

export default BannerPanel;
