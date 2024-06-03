import React from "react";
import "./css/home.css";
import {} from "react-icons";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Work from "./work";
import Contact from "./contact";
import Services from "./services";

function Home() {
  return (
    <>
      <div className="section container h-screen  flex items-center justify-center">
        <div className=" w-[85vw] h-[85vh] flex items-center justify-between">
          <main className=" w-[40vw] h-[85vh] flex items-center justify-center ">
            <section className=" w-[38vw] h-[65vh] text-justify flex flex-col items-start justify-around ">
              <p className=" font-bold  text-5xl  font-sans">
                Hi It's
                <span className=" text-yellow-500 "> Rosemary </span>
              </p>
              <h2 className="font-bold text-2xl  ">
                {" "}
                I'm a{/* -inset-0.5 bg-white blur */}
                <span className=" name text-yellow-500">
                  WEB DEVELOPER
                  {/* drop-shadow-md shadow-white outline-2 outline-white outline bg-transparent */}
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                Officiis vero, mollitia corporis dicta ullam debitis harum quo
                facere <br />
                voluptas, ratione eaque quaerat ipsam earum, laboriosam fugiat
                quam omnis ab nobis!
              </p>

              <div className=" flex items-center justify-around w-[25vw] h-[10vh] text-yellow-500 ">
                <div className=" w-[5vw] h-[8vh]">
                  <div
                    className=" icon  flex items-center justify-center h-[6vh] w-[3vw] border-2 border-yellow-500 rounded-full
              hover:text-white hover:bg-yellow-500  hover:animate-bounce "
                  >
                    <BsLinkedin />
                  </div>
                </div>

                <div className=" w-[5vw] h-[8vh]">
                  <div className="  icon  flex items-center justify-center h-[6vh] w-[3vw] border-2 border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 hover:animate-bounce">
                    <BsGithub />
                  </div>
                </div>

                <div className=" w-[5vw] h-[8vh]">
                  <div className="  icon  flex items-center justify-center h-[6vh] w-[3vw] border-2 border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 hover:animate-bounce">
                    <BiLogoInstagramAlt />
                  </div>
                </div>

                <div className=" w-[5vw] h-[8vh]">
                  <div className="  icon  flex items-center justify-center h-[6vh] w-[3vw] border-2 border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 hover:animate-bounce">
                    <BsTwitterX />
                  </div>
                </div>
              </div>

              <div className=" w-[20vw]  flex items-center justify-around">
                <button className=" button  h-[3vw] w-[6vw] bg-yellow-500 text-black shadow-yellow-500  border-2 border-yellow-500 rounded-full">
                  Hire
                </button>

                <button className=" but  h-[3vw] w-[9vw] text-yellow-500  border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black ">
                  Contact
                </button>
              </div>
            </section>
          </main>

          <main className="  container w-[40vw] flex items-center justify-center ">
            <div className="topblur" />
            <div className=" nice w-[20vw] bg-yellow-500 border-2 border-yellow-500  border-dashed h-[40vh] rounded-full flex items-center justify-center ">
              <div className="bottomblur" />

              <img src="" alt="" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
