import React from 'react';
// import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import Footer from "./components/Footer";
import Tiers from "./components/Tiers";
import Nav from "./components/Nav";

export default function App() {
  const cardContent = [
    {
      image: "tier-one.jpg",
      imageAlt: "Tier One Image",
      title: "Embedded Developer",
      subtitle: "Basic Plan (Part-Time Support)",
      price: "$30/hour",
      description: "A part-time embedded developer within your team, handling day-to-day tasks such as bug fixes, code reviews, and feature enhancements.",
      audience: "Suitable for clients needing additional development resources without a full-time commitment.",
      included: [
        { item: "Up to 20 hours per week of development work." },
        { item: "Regular updates via Slack, Jira, or your preferred communication platform." },
        { item: "Minor code optimizations and bug fixes." },
        { item: "Collaboration with other team members." },
      ]
    },
    {
      image: "tier-two.jpg",
      imageAlt: "Tier Two Image",
      title: "Full-Time Embedded Developer",
      subtitle: "Standard Plan",
      price: "$55/hour",
      description: "A full-time embedded developer within your team, responsible for leading and delivering more substantial day-to-day work, including feature development, optimizations, and active collaboration on architecture.",
      audience: "Ideal for clients needing a consistent developer resource.",
      included: [
        { item: "30 to 40 hours per week of full-stack development." },
        { item: "Active participation in daily stand-ups and sprint planning." },
        { item: "Development of new features and major enhancements." },
        { item: "Code reviews, testing, and optimization of existing systems." },
        { item: "Close collaboration with backend, frontend, and DevOps teams." }
      ]
    },
    {
      image: "tier-three.jpg",
      imageAlt: "Tier Three Image",
      title: "End-to-End Delivery",
      subtitle: "Premium Plan (Full Project Build)",
      price: "Contact for Pricing",
      description: "A complete project from start to finish, based on a defined scope provided by the client. This includes full-stack development, deployment, and post-launch support.",
      audience: "Ideal for clients who have a clear project specification and need a dedicated developer to bring it to life.",
      included: [
        { item: "Full project lifecycle management: planning, development, testing, and deployment." },
        { item: "Frontend and backend development." },
        { item: "Integration with cloud platforms (Azure/AWS) and CI/CD pipelines." },
        { item: "Regular progress reports and milestone-based payments." },
        { item: "2-4 weeks of post-launch support for bug fixes and minor updates." }
      ]
    }
  ];

  return (
    <>
      <Nav />
      <HeroTwo primaryText={"Hostechnology"} secondaryText={"We serve peole who serve people"} />
      <div className="py-8 text-center w-3/4 mx-auto">
        <p className='text-xl'>
          At Hostechnology, we empower early-stage companies across all industries with expert development services tailored to their specific needs. Whether you need part-time or full-time development support, or a full-scale project built from the ground up, we have a plan to help you grow and succeed.
        </p>
      </div>
      <div className="py-8">
        <h1 className="font-montserrat text-5xl text-gray-800 font-extrabold text-center text-primary">How would you like to work together?</h1>
      </div>
      <Tiers tiers={cardContent} />
      <Footer />
    </>
  )
}
