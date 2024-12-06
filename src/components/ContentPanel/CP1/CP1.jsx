import Card from "../Card/Card";

let cardCont = [
  {
    title: "Order for Collect",
    desc: "Plan ahead and get your PERi-PERi to-go, from a restaurant near you.",
    btnText: "Order Collect",
  },
  {
    title: "Nando’s Delivery",
    desc: "We sometimes change our delivery areas based on demand - check if we’re delivering to you.",
    btnText: "Order Delivery",
    imgLink: "/svgs/cp-card-2.svg",
  },
  {
    title: "Eat-in with us!",
    desc: "Find your local and grab a seat at the table. Or booth.",
    btnText: "Find Restaurant",
    desc2:
      "Already in the restaurant? Scan the QR code on your table using your phone to get started!",
  },
];

export default function CP1() {
  return (
    <>
      <div className="p-4">
        <div className="row row-cols-md-3 row-cols-1">
          {cardCont.map((content, index) => (
            <Card content={content} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
