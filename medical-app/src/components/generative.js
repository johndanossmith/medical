import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import { useSelector } from "react-redux";

function Generative() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  return (
    <div className="h-screen bg-white bg-no-repeat bg-cover">
      <p className="text-4xl text-medical pt-16 pl-8">Generative AI</p>
      <div className="flex">
        <div className="flex-col w-1/2">
          <AnimationOnScroll animateIn="animate__backInLeft">
            <p className="text-2xl text-medical pt-80 pl-56">
              All Things Generative AI
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInLeft">
            <p className="text-xl text-sky-800 pt-4 pl-56">
              The use of generative AI in medical consulting holds great promise
              for improving patient care outcomes and advancing medical
              knowledge. With its ability to rapidly process vast amounts of
              data and generate highly accurate insights, it can provide
              valuable support to medical professionals, complementing expertise
              and enhancing decision-making processes.
            </p>
          </AnimationOnScroll>
          <div className="pl-56 pt-16">
            <button
              onClick={() => window.open("https://generativeai.net/", "_self")}
              className="py-2 px-8 bg-gray-100 text-medical text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-col w-1/2">
          <AnimationOnScroll animateIn="animate__backInRight">
            <img src={g1} alt="g1" className="rounded-full" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInRight">
            <img src={g2} alt="g2" className="pt-4 rounded-full" />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Generative;
