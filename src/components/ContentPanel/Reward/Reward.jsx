/* eslint-disable react/prop-types */
const Reward = ({ reward, index }) => {
  return (
    <div className={`px-3 md:mt-${reward.mt} mb-4 md:mb-0`}>
      <div className="flex md:flex-col gap-3 md:gap-0 items-center md:justify-center md:text-center">
        <div className="w-full max-w-28 min-w-16">
          <img src={`/svgs/reward${index + 1}.svg`} alt="" />
        </div>
        <div className="text-black">
          <h3 className="text-3xl my-2" style={{ fontFamily: "Nandos" }}>
            {reward.title}
          </h3>
          <p className="text-sm fw-semibold my-2">{reward.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Reward;
