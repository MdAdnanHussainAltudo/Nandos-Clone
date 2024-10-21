import Button from "../../Button/Button";
import Reward from "../Reward/Reward";

let rewardList = [
  {
    title: "Join",
    desc: "Create an account or log in if you already have one",
    mt: 4,
  },
  {
    title: "Add to Wallet",
    desc: "Add your Nando's Card to Apple Wallet",
    mt: 20,
  },
  {
    title: "Tap",
    desc: "Tap your phone on the contactless reader",
    mt: 10,
  },
  {
    title: "Earn",
    desc: "Earn a Chilli on every order of £7 or more",
    mt: 4,
  },
  {
    title: "Redeem",
    desc: "Chillies lead to rewards and rewards mean free PERi-PERi!",
    mt: 2,
  },
];

const RewardPanel = () => {
  return (
    <>
      <div className="p-4 w-full">
        <div className="grid md:grid-cols-5 w-full justify-evenly items-center">
          {rewardList.map((reward, index) => (
            <Reward reward={reward} index={index} key={index} />
          ))}
        </div>
        <div className="row w-full justify-center mt-4 gap-4">
          <Button text={"Join Now"} />
          <Button text={"Login"} />
        </div>
      </div>
    </>
  );
};

export default RewardPanel;
