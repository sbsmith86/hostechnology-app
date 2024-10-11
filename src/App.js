// import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Nav from "./components/Nav";

export default function App() {
  const cardContent = [
    {
      image:  "tier-one.jpg",
      imageAlt: "Tier One Image",
      title: "Embedded Developer",
      subtitle: "Basic Plan (Part-Time Support)",
      included : [
        { item: "Feature 1" },
        { item: "Feature 2" },
        { item: "Feature 3" }
      ]
    },
    {
      image:  "tier-two.jpg",
      imageAlt: "Tier Two Image",
      title: "Full-Time Embedded Developer",
      subtitle: "Standard Plan",
      included : [
        { item: "Feature 1" },
        { item: "Feature 2" },
        { item: "Feature 3" }
      ]
    },
    {
      image:  "tier-three.jpg",
      imageAlt: "Tier Three Image",
      title: "Premium Plan",
      subtitle: "Full Project Build - End-to-End Delivery",
      included : [
        { item: "Feature 1" },
        { item: "Feature 2" },
        { item: "Feature 3" }
      ]
    }
  ];

  return (
    <>
      <Nav />
      {/* <Hero primaryText={"Hostechnology"} secondaryText={"We serve peole who serve people"} /> */}
      <HeroTwo primaryText={"Hostechnology"} secondaryText={"We serve peole who serve people"} />
      <div className="py-10 flex justify-center flex-wrap space-y-8 md:space-y-0 md:space-x-8">
          <Card content={cardContent[0]}/>
          <Card content={cardContent[1]}/>
          <Card content={cardContent[2]}/>
        </div>
      <Footer />
    </>
  )
}
