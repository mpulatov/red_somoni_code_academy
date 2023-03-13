import React from "react";
import "./About.css";
import { aboutData } from "../../demo/demoData";

function About() {
  let text = `< Что вы получаете? />`;
  return (
    <div className="w-full mx-auto">
      <div className="head-text container lg:px-8 px-6 lg:py-16 py-8">
        <h2 className="lg:text-5xl md:text:4xl sm:text-3xl text-3xl text-text-color text-center lg:text-start font-bold">
          {text}
        </h2>
      </div>

      <div id="home" className="py-16 px-8 w-full border-solid border-2">
        <div className="grid container gap-8 lg:grid-cols-3 md:grid-cols-2  lg:px-8 lg:py-2">
          {aboutData.length
            ? aboutData.map((about) => (
                <div
                  key={about.id}
                  className="px-10 py-10 bg-white text-start border-solid border-4 border-main-color rounded-min"
                >
                  <img src={about.image} alt="img" />
                  <p className="inline-block max-w-xs mx-auto py-5 text-2xl font-bold text-main-color leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400">
                    {about.title}
                  </p>
                  <p className="mx-auto text-base text-text-color mb-2">
                    {about.description}
                  </p>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default About;
