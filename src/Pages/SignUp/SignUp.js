import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SignUpForm } from "../../Components/SignUpForm/SignUpForm";
import SignupImg from "../../Assets/signUpImg.png";

export const SignUp = () => {
  return (
    <>
      <div className="bg-slate-500 h-screen">
        <NavBar />
        <div>
          <div className="flex flex-row justify-center ">
            <img src={SignupImg} alt="signUp img" />
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};
