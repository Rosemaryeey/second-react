import React from "react";

const CallButton = () => {
  const handleCall = () => {
    window.location.href = "tel:09163269010";
  };

  return (
    <button
      onClick={handleCall}
      className="btn md:w-[6rem] w-[100px] md:h-[3rem] h-[50px] border-2 border-yellow-500 rounded-3xl bg-yellow-500 shadow shadow-yellow-500 text-black"
    >
      Hire Me
    </button>
  );
};

export default CallButton;
