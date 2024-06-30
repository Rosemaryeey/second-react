// import React, { useState } from "react";
import Pic from "../assets/wow2.png";
import "./flipcard.css";

// const Flipcard = () => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

 const FlipCard = () => {
   return (
     <div className="  te bo flip-card md:w-[20vw] w-[40vw] md:h-[50vh] h-[25vh] shadow-yellow-500 shadow-md rounded-xl">
       <div className="flip-card-inner">
         <div className="flip-card-front  flex flex-col md:items-center items-center md:justify-between justify-evenly rounded-xl">
           <img
             src={Pic}
             alt="project"
             className=" md:w-[20vw] w-[40vw] md:h-[20vh] h-[25vh] rounded-t-xl"
           />
           <h1>PROJECT 1</h1>
           <img
             src={Pic}
             alt="project"
             className=" md:w-[20vw] w-[40vw] md:h-[20vh] h-[25vh] rounded-b-xl"
           />
           {/* <h3 className="bg-transparent">
             Project 1:
             <p>
               Lorem ipsum dolor si{" "}
               <a className="text-blue-400" href="">
                 here
               </a>
             </p>
           </h3> */}
         </div>
         <div className="flip-card-back  p-5 flex flex-col md:items-start items-center md:justify-around justify-evenly rounded-xl">
           <h3 className="bg-transparent">
             Click ={" "}
             <a className="text-red-500" href=" ">
               {" "}
               here
             </a>{" "}
             for
             <p> Details about the project.</p>
           </h3>
         </div>
       </div>
     </div>
   );
 };

 export default FlipCard;
