import React from 'react'

function Services() {
  return (
    <div className="section container h-screen bg-[#080808] w-screen flex items-center justify-center">
      <div className=" flex flex-col items-center justify-around h-[85vh] w-[85vw] ">
        <h1 className="text-6xl font-extrabold font-mono">Services</h1>
        <div className=" flex flex-col items-center justify-around h-[70vh] w-[70vw]   text-black ">
          <div className=" flex items-center justify-between h-[35vh] w-[65vw]">
            <div
              className="border-yellow-500 border-4 w-[30vw] h-[30vh] rounded-3xl bg-yellow-500 hover:bg-white flex flex-col items-start justify-center px-5
            "
            >
              <h3 className="text-2xl  font-bold">Fontend Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, <br />
                adipisicing elit. Expedita illo accusamus repellat <br />
                ipsum quaerat non recusandae, voluptate
              </p>
            </div>
            <div className="flex flex-col items-start justify-center  border-yellow-500 border-4 w-[30vw] h-[30vh] rounded-3xl bg-yellow-500 px-5 hover:bg-white">
              <h3 className="text-2xl  font-bold">Backend Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, <br />
                adipisicing elit. Expedita illo accusamus repellat <br />
                ipsum quaerat non recusandae, voluptate
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-between  h-[35vh] w-[65vw]">
            <div className="flex flex-col items-start justify-center  border-yellow-500 border-4 w-[30vw] h-[30vh] rounded-3xl bg-yellow-500 px-5 hover:bg-white">
              <h3 className="text-2xl  font-bold">React Js</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, <br />
                adipisicing elit. Expedita illo accusamus repellat <br />
                ipsum quaerat non recusandae, voluptate
              </p>
            </div>
            <div className=" flex flex-col items-start justify-center   border-yellow-500 border-4 w-[30vw] h-[30vh] rounded-3xl bg-yellow-500 px-5 hover:bg-white">
              <h3 className="text-2xl  font-bold">cyber security</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, <br />
                adipisicing elit. Expedita illo accusamus repellat <br />
                ipsum quaerat non recusandae, voluptate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services