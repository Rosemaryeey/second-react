import React from "react";
import "./css/header.css";
import { BiHomeAlt, BiMenu, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";

function header() {
  return (
    <header className=" head  h-20 py-3 w-screen  ">
      <div className=" container mx-auto flex items-center justify-center ">
        <main className=" flex items-center justify-between w-[85vw]">
          <section>
            <div>
              <p className=" logo text-2xl">
                R <span className=" ok text-yellow-500  ">osvic</span>
              </p >
            </div>
          </section>

          <section className=" container w-[30vw] h-[10vh] flex items-center justify-center">
            <nav className=" ">
              <div className="  w-[30vw] flex items-center justify-around   ">
              <div className="  text-white text-3xl">

                <BiMenu/>
              </div>
                <Link
                  to="/"
                  className=" link  active:first-letter:  py-1 text-yellow-500 border-b-2 border-yellow-500  "
                >
                  {/* <BiHomeAlt /> */}
                  <p>Home</p>
                </Link>
                <Link to="/work" className=" link  ">
                  {/* <BiUser /> */}
                  <p>Work</p>
                </Link>
                <Link to="/services" className=" link">
                  {/* <BsClipboardData /> */}
                  <p>Services</p>
                </Link>
                <Link to="/contact" className=" link">
                  {/* <BsBriefcase /> */}

                  <p>Contact</p>
                </Link>
              </div>
            </nav>
            <Outlet />
          </section>
          {/* <section
            className=" flex items-center justify-center  w-[10vw] h-[6vh]  rounded-3xl bg-yellow-500 shadow-black shadow-inner
        hover:bg-gradient-to-tr from-green-500 via-yellow-500 to-red-500 "
          >
            <div className="  font-semibold ">
              <p>Let's work</p>
            </div>
          </section> */}
        </main>
      </div>
    </header>
  );
}

export default header;

{
  /* // // animate-bounce translate-x-1 */
}
// bg-gradient-to-tr from-yellow-400 to-white
//  hover:bg-yellow-400 active:text-4xl font-extrabold text-2xl rounded p-4
/* inline-block
capitalize
transition-all
duration-500
relative
             before:contents-{''}
             before:absolute
             before:bottom-2
             before:left-0
             before:w-0
             before:h-0.5
             py-2
             before:bg-gradient-to-r
             before:from-yellow-400
             before:via-white
             before:to-blue-600
            //  hover:before:w-full
             hover:before:opacity-100*/
// bg-gradient-to-b from-blue-400 to-yellow-500
