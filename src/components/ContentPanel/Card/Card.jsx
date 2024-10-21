import Button from "../../Button/Button";

/* eslint-disable react/prop-types */
const Card = ({ content }) => {
  return (
    <>
      <div className="col md:px-4 sm:px-20 px-8 z-10 my-8">
        <h2
          className="text-5xl md:h-24 mb-2 md:mb-4 fw-bold text-black"
          style={{ fontFamily: "Nandos" }}
        >
          {content.title}
        </h2>
        <p className="text-lg min-h-12 md:h-24 mt-3 md:mt-5 mb-8 md:mb-12 fw-bold">
          {content.desc}
        </p>
        <Button text={content.btnText} />
        {content.imgLink && (
          <div className="my-4">
            <img src={content.imgLink} alt="" />
          </div>
        )}
        {content.desc2 && <p className="my-4 fw-bold">{content.desc2}</p>}
      </div>
    </>
  );
};

export default Card;
