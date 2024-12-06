import Apos from "../../Apos/Apos";
import RewardPanel from "../RewardPanel/RewardPanel";

export default function CP2() {
  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <h1 className="rotate-[-3deg]  cover-text-w flex justify-center flex-col items-center">
        <span className="text-4xl my-4" style={{ fontFamily: "Nandos" }}>
          Nando
          <Apos />s Rewards
        </span>
      </h1>
      <p className="text-xl mt-4 fw-semibold drop-shadow-md barlow-regular mb-8">
        Eet PERi-PERi, earn PERi-PERi!
      </p>
      <RewardPanel />
    </div>
  );
}
