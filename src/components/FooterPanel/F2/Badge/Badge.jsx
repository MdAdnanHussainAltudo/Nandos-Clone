/* eslint-disable react/prop-types */

const Badge = ({ index }) => {
  return (
    <div className="h-10">
      <img className="h-full" src={`/images/badge${index + 1}.png`} alt="" />
    </div>
  );
};

export default Badge;
