import React from "react";
import { stepsData } from "./../../demo/demoData";

const Step = () => {
  return (
    <div className="container px-8 py-16 mx-auto lg:px-8 lg:py-20">
      <div className="border-solid border-4 border-main-color rounded-min py-12 px-10">
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3 lg:divide-x">
          {stepsData.length
            ? stepsData.map((step) => (
                <div key={step.id} className="sm:text-start">
                  <span className="text-7xl font-bold text-main-color">
                    {step.number}
                  </span>
                  <h6 className="font-semibold leading-5 lg:text-2xl py-1 lg:py-5">
                    {step.title}
                  </h6>
                  <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                    {step.description}
                  </p>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Step;
