import React from "react";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";

export const SignUpForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const transferValue = async (event) => {
    event.preventDefault();
    const collectionRef = collection(db, "user");
    const val = {
      email,
      firstName,
      lastName,
      password,
    };
    clearState();
    await addDoc(collectionRef, val);
  };

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="font-quicksand mt-52 ">
      <form className="bg-slate-300 rounded-formRad flex flex-col gap-2 shadow-xl border-sky-300 border-8 p-5">
        <div className="text-sky-500 text-5xl text-center mt-10">Sign-Up</div>
        <div className="flex flex-col gap-5 mt-14 mb-14">
          <div className="flex gap-2">
            <div className="flex flex-col text-lg">
              <label className="">Last Name</label>
              <input
                type="text"
                className="rounded-2xl border-sky-300 border-2"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div className="flex flex-col text-lg">
              <label className="">First Name</label>
              <input
                type="text"
                className="rounded-2xl border-sky-300 border-2"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col text-lg">
            <label className="">Email</label>
            <input
              type="email"
              className="rounded-2xl border-sky-300 border-2"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col text-lg">
            <label className="">PassWord</label>
            <input
              type="password"
              className="rounded-2xl border-sky-300 border-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <button
          onClick={transferValue}
          className="font-pacifico text-white text-4xl m-auto bg-sky-300 w-52 ring-2 ring-white rounded-2xl h-14 mb-10 animate-pulse"
        >
          Join Us
        </button>
      </form>
    </div>
  );
};
