import React from "react";
import { Button } from "@material-tailwind/react";
import img from "../../assets/img.png";
import img_ from "../../assets/img_.png";

function Header() {
  let text = `< somoni code />`;
  return (
    <div id="Главная" className="border-solid border-2 lg:py-10 py-4">
      <div className="container px-4 lg:px-8">
        <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row mx-auto">
          <div className="mt-14 lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block py-px lg:py-4 py-2 lg:text-2xl text-xl font-semibold tracking-wider text-text-color rounded-full bg-teal-accent-400">
                  {text}
                </p>
              </div>
              <h2 className="max-w-full lg:my-4 my-2 lg:text-6xl md:text:4xl sm:text-3xl text-3xl font-bold text-main-color">
                Обучим и обустроим
                <br className="hidden md:block" />
                на работу
              </h2>

              <p className="lg:text-lg md:text-lg text-base text-text-color lg:py-4 py-2 ">
                с последующим трудоустройством в Таджикистане
                <br className="hidden md:block" />
                или по всему миру.
              </p>
            </div>
            <div className="flex items-center">
              <Button className=" lg:inline-block lg:h-14 lg:w-64  bg-main-bg">
                <span>Поступить в центр</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:py-0 py-5">
            <div className="flex">
              <div className="relative">
                <div className="absolute lg:right-10 -right-20 lg:bottom-8 bottom-2 z-50 text-white">
                  <p className="lg:text-5xl text-2xl">7+</p>
                  <span className="lg:text-2xl text-lg">Курсов</span>
                </div>
                <div className="absolute bg-main-color lg:w-48 lg:h-36 w-28 h-20 rounded-l-min-large z-0 lg:right-0  bottom-0" />
              </div>

              <div className="relative">
                <img
                  src={img}
                  alt="lmg"
                  className="relative lg:w-fit lg:right-14 md:right-2 -right-6 w-80 z-50"
                />
                <div className="absolute bg-main-color lg:w-64 lg:h-72 w-48 h-56 rounded-t-large z-0 lg:left-10 md:left-24 left-32 bottom-0" />
              </div>
            </div>

            <div className="flex">
              <div className="relative">
                <div className="absolute z-50 text-white text-center lg:top-20 top-32 lg:left-20 left-48 ">
                  <p className="lg:text-5xl text-2xl">4+</p>
                  <span className="lg:text-2xl text-sm">Преподователей</span>
                </div>
                <div className="absolute bg-main-green-bg lg:w-64 lg:h-52 w-32 h-24 rounded-r-min-large z-0 lg:left-10 left-48 bottom-0" />
              </div>

              <div className="relative">
                <img
                  src={img_}
                  alt="lmg_"
                  className="relative lg:w-fit w-44 lg:right-44 right-0 bottom-0 z-50"
                />
                <div className="absolute bg-main-yellow-bg lg:w-56 lg:h-52 w-44 h-40 rounded-l-min-large rounded-tr-min-large z-0 lg:right-48 right-0 bottom-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
