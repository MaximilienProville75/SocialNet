import React from "react";

export const SignUpForm = () => {
  return (
    <div className="font-quicksand">
      <form className="bg-slate-300 rounded-formRad flex flex-col gap-2 shadow-xl border-sky-300 border-8 p-5">
        <div className="text-sky-500 text-5xl text-center">Sign-Up</div>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <label className="">Last Name</label>
            <input
              type="text"
              className="rounded-2xl border-sky-300 border-2"
              // value={firstName}
              // onChange={changeFirstName}
            />
          </div>
          <div className="flex flex-col">
            <label className="">First Name</label>
            <input
              type="text"
              className="rounded-2xl border-sky-300 border-2"
              // value={firstName}
              // onChange={changeFirstName}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="">Email</label>
          <input
            type="email"
            className="rounded-2xl border-sky-300 border-2"
            // value={firstName}
            // onChange={changeFirstName}
          />
        </div>
        <div className="flex flex-col">
          <label className="">PassWord</label>
          <input
            type="password"
            className="rounded-2xl border-sky-300 border-2"
            // value={firstName}
            // onChange={changeFirstName}
          />
        </div>
        <button
          //   onClick={transferValue}
          className="font-pacifico text-white text-4xl m-auto bg-sky-300 w-52 ring-2 ring-white rounded-2xl h-14 "
        >
          Join Us
        </button>
      </form>
    </div>
  );
};
