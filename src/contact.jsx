import React from "react";

function Contact() {
  return (
    <div className="section container flex items-center justify-center  bg-[#080808]">
      <div className=" flex  flex-col items-center justify-around h-[85vh] w-[85vw]  p-5">
        <section className="flex flex-col items-center  justify-around h-[80vh] w-[60vw]  ">
          <h1 className="text-5xl font-extrabold">
            Contact <span className="text-yellow-500">Me</span>
          </h1>
          <main className=" flex h-[50vh] items-start justify-between w-[60vw]  ">
            <div className="flex flex-col items-center justify-around h-[40vh] w-[50vw] ">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-[25vw]  px-5 h-[8vh] rounded-2xl border-yellow-500 border-2 bg-white/5"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className=" w-[25vw]  px-5 h-[8vh] rounded-2xl border-yellow-500 border-2 bg-white/5"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className=" w-[25vw] px-5 h-[8vh] rounded-2xl border-yellow-500 border-2 bg-white/5"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className=" w-[25vw]  px-5 h-[8vh] rounded-2xl border-yellow-500 border-2 bg-white/5"
                />
              </div>
            </div>

            <div className="h-[40vh] flex flex-col w-[32vw] justify-between items-center">
              <textarea
                name=" Your Message"
                placeholder="Your Message"
                id=" text"
                className=" p-3 bg-white/5 h-[30vh] w-[27vw] border-2 border-yellow-500 rounded-2xl "
              ></textarea>
              <button className=" button w-[12vw] h-[6vh] bg-yellow-500 rounded-full text-black ">
                Send Message
              </button>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}

export default Contact;
