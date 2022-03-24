import React from "react";

export const PopUp = (props) => {
  console.log(props);
  return props.trigger ? (
    <div
      className={`fixed top-0 left-0 bg-sky-500/50 w-full h-screen flex justify-center items-center z-10`}
    >
      <div
        className={`relative p-6 w-full max-w-xl bg-slate-300 rounded-xl border-4 border-sky-300 shadow-lg shadow-sky-500 flex justify-between`}
      >
        {props.children}
        <button
          className="font-pacifico text-white text-xl ml-2 bg-sky-300 w-36 ring-2 ring-white rounded-2xl h-18 animate-pulse"
          onClick={() => props.setTrigger(false)}
        >
          Add
        </button>
      </div>
    </div>
  ) : null;
};
