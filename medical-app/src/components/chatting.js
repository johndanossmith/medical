import React from "react";
import { Link } from "react-router-dom";
import check from "../assets/check.png";
import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";
import pa1 from "../assets/pa1.jpg";
import pa2 from "../assets/pa2.jpg";
import pa3 from "../assets/pa3.jpg";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Chatting() {
  return (
    <div className="h-screen w-screen bg-chatting bg-no-repeat bg-cover">
      <div className="flex">
        <div className="flex w-1/3"></div>
        <div className="flex flex-col w-1/3">
          <AnimationOnScroll animateIn="animate__backInLeft">
            <div>
              <p className="text-4xl text-medical pt-56">Chatting Consultant</p>
            </div>
            <div className="flex pt-4">
              <img src={check} alt="check" />
              <p className="text-3xl text-medical">Real Time Chat</p>
            </div>
            <div className="flex pt-4">
              <img src={check} alt="check" />
              <p className="text-3xl text-medical">Best Medical Service</p>
            </div>
            <div className="pt-4">
              <Link to="/signin">
                <button className="py-2 px-8 bg-gray-100 text-medical text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
                  Get Started
                </button>
              </Link>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="flex flex-col pt-56">
          <AnimationOnScroll animateIn="animate__backInRight">
            <div className="flex">
              <img
                src={doc1}
                alt="doc1"
                className="bg-auto bg-no-repeat pr-4"
              />
              <img
                src={doc2}
                alt="doc2"
                className="bg-auto bg-no-repeat pr-4"
              />
              <img
                src={doc3}
                alt="doc3"
                className="bg-auto bg-no-repeat pr-4"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInRight">
            <div className="flex pt-4">
              <img src={pa1} alt="pa1" className="bg-auto bg-no-repeat pr-4" />
              <img src={pa2} alt="pa2" className="bg-auto bg-no-repeat pr-4" />
              <img src={pa3} alt="pa3" className="bg-auto bg-no-repeat pr-4" />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Chatting;
