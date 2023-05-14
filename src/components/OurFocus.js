import React from "react";

const TextBlock = ({ src, alt, title, text, className = "" }) => {
  return (
    <div
      className={`flex items-center justify-between gap-10 px-10 flex-col xl:flex-row ${className}`}
    >
      <img src={src} alt={alt} className="h-100 p-10" />
      <div className="max-w-lg">
        <h4 className="text-5xl font-semibold mb-10 text-center font-satisfy">
          {title}
        </h4>
        <p className="text-xl font-semibold">{text}</p>
      </div>
    </div>
  );
};

const OurFocus = () => {
  return (
    <>
      <div className="  bg-white/20 text-center rounded-lg shadow-xl pt-10 pb-20">
        <h2
          className=" xl:text-7xl py-8   text-center text-transparent text-6xl bg-clip-text 
          bg-gradient-to-r from-yellow-400 to-red-600"
        >
          {" "}
          Our focus{" "}
        </h2>
        <TextBlock
          src="./assets/meet.png"
          alt="meet illustration"
          title="Meet new people"
          text="Meet supportive people like you who care. If you are passionate
              about helping others, Code With Aloha is perfect to support you."
        />

        <TextBlock
          src="./assets/progress.png"
          alt="make an impact illustration"
          title="Make a Difference"
          text="Make a difference contributing to Hawaiian social impact projects.
              Leverage technology to help organizations solve problems."
          className="xl:flex-row-reverse"
        />

        <TextBlock
          src="./assets/experience.png"
          alt="gain experience illustration"
          title="Gain Experience"
          text="Gain experience as a beginner, pay it forward as a mentor. We help
              each other grow and together we make a difference in our
              community."
        />
      </div>
    </>
  );
};

export default OurFocus;
