import AccItem from "./AccItem/AccItem";

let accords = [
  {
    title: "Food",
    elements: [
      { item: "Menu" },
      { item: "Recipes" },
      { item: "Shop" },
      { item: "Our Food" },
    ],
  },
  {
    title: "Restaurants",
    elements: [{ item: "Find a Nando's" }, { item: "View All Restaurants" }],
  },
  {
    title: "Nando's Card",
    elements: [
      { item: "Join now" },
      { item: "How it works" },
      { item: "Lost Card" },
      { item: "Log In" },
    ],
  },
  {
    title: "Explore",
    elements: [
      { item: "Our Blog" },
      { item: "The Nando's App" },
      { item: "Being Sustainable" },
      { item: "Fighting Malaria" },
      { item: "This is PERi-PERi" },
      { item: "Music" },
    ],
  },
  {
    title: "Help",
    elements: [
      { item: "Search FAOs" },
      { item: "My Account" },
      { item: "Food" },
      { item: "Online Ordering" },
      { item: "Restaurants" },
      { item: "Nando's Cards & Discounts" },
      { item: "Fundraising" },
      { item: "Requests" },
      { item: "Sustainability" },
      { item: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    elements: [
      { item: "Terms & Conditions" },
      { item: "Privacy Policy" },
      { item: "Cookies Policy" },
      { item: "Slavery Statement" },
      { item: "Gender Pay Gap" },
      { item: "Report" },
      { item: "Insurance Policy" },
      { item: "Details" },
      { item: "NGHL Tax Strategy" },
      { item: "Stakeholder Engagement" },
    ],
  },
];

const F1 = () => {
  return (
    <div className="bg-black pt-2 pb-8 w-full">
      <div className="accordion accordion-flush row row-cols-1 row-cols-md-6 gx-0 md:px-5" id="">
        {accords.map((accord, index) => (
          <AccItem key={index} accord={accord} index={index} />
        ))}
      </div>
    </div>
  );
};

export default F1;
