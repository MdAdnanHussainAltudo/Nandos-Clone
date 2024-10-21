import "../../assets/fonts/Nandos-Regular.ttf";
import Overlay from "../Overlay/Overlay";
import "./Carousel.css";

let carContent = [
  {
    header: "NandooOoOos x Fanta",
    footer: "Ready to enter your weird era?",
  },
  {
    header: "Bite me",
    footer: "Our Cheesy Garlic Pitta’s o0o0zing with good stuff.",
  },
];

const Carousel = () => {
  return (
    <>
      <div
        id="carouselCont"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {carContent.map((carousel, index) => (
            <div
              key={index}
              className={`carousel-item h-screen max-h-[38rem]  p-0 bg-cover bg-center  ${
                index == 0 ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(/images/caro${index + 1}.jpg)`,
              }}
            >
              <Overlay content={carousel} bgClr={"#fff"} clr={"#000"} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCont"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCont"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
