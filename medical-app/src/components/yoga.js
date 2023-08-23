import React from "react"
import yoga from "../assets/yoga.jpg"
import diet from "../assets/diet.jpg"
import "animate.css/animate.min.css";
import {AnimationOnScroll} from "react-animation-on-scroll"
function Yoga(){
    const openUrl=(url)=>{
      window.open(url, "_self");
    }
    return(
        <div className="h-screen bg-white bg-no-repeat bg-cover">
           <p className="text-4xl text-medical pt-16 pl-8">Yoga & Diet</p>
           <div className="flex">
            <div className="flex-col w-1/2">
            <AnimationOnScroll animateIn="animate__backInLeft">
              <p className="text-2xl text-medical pt-80 pl-56">Best Benefit</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__backInLeft">
              <p className="text-xl text-sky-800 pt-4 pl-56">Regular practice of yoga and a healthy diet can lower the risk of developing chronic conditions such as heart disease, diabetes, hypertension, and obesity. They help in maintaining healthy blood pressure, cholesterol levels, and body weight.</p>
            </AnimationOnScroll>   
            <div className="pl-56 pt-16">
                <button onClick={()=>openUrl("https://yoga-fit.cmsmasters.net/")} className="py-2 px-8 bg-gray-100 text-medical text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">Get Started</button>
            </div>
            </div>
            <div className="flex-col w-1/2">
              <AnimationOnScroll animateIn="animate__backInRight">
                <img src={yoga} alt="g1" className="rounded-full"/>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__backInRight">
                <img src={diet} alt="g2" className="pt-4 rounded-full"/>
              </AnimationOnScroll>
            </div>
           </div>
        </div>
    );
}

export default Yoga;