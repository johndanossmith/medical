import React from "react"
import check from "../assets/check.png"
function Medical(){
    return(
        <div className="w-screen h-screen bg-medical bg-no-repeat bg-cover">
            <p className="pt-48 pl-24 text-4xl text-medical">We Provide Best Care</p>
            <div className="flex">
               <img src={check} alt="check" className="pt-4 pl-24"/>
               <p className="text-3xl text-medical pt-4 pl-4">Generative AI</p>
            </div>
            <div className="flex">
               <img src={check} alt="check" className="pt-4 pl-24"/>
               <p className="text-3xl text-medical pt-4 pl-4">Medical Chatting Consultant</p>
            </div>
            <div className="flex">
               <img src={check} alt="check" className="pt-4 pl-24"/>
               <p className="text-3xl text-medical pt-4 pl-4">Yoga & Diet</p>
            </div>
        </div>  
    );
}

export default Medical