import React from "react";
import { coursesData } from "../../demo/demoData";

function Courses() {
  let text = `< Наши направления />`;
  return (
    <div id="Направления" className="w-full mx-auto bg-main-bg">
      <div className="container py-14 px-8">
        <h2 className="lg:text-5xl md:text:4xl sm:text-3xl text-3xl text-white text-center lg:text-start font-bold lg:pb-6 xl:pb-6">
          {text}
        </h2>
        <div className="grid gap-8 mb-8 lg:grid-cols-3 md:grid-cols-2 lg:py-5 py-7 sm:py-10 lg:py-20">
          {coursesData.length
            ? coursesData.map((course) => (
                <div
                  key={course.id}
                  className="px-10 py-10 bg-white text-start border-solid border-4 border-main-color rounded-min"
                >
                  <img
                    src={course.image}
                    alt="javascript"
                    className="pb-10 w-max lg:w-fit w-[35%]"
                  />
                  <p className="inline-block max-w-xs mx-auto text-2xl font-bold text-text-color leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400">
                    {course.course}
                  </p>
                  <p className="mx-auto text-xl text-text-color pt-5 pb-7">
                    {course.duration}
                  </p>
                  <p className="text-2xl text-main-color">{course.fee}</p>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Courses;
