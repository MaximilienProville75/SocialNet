import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SignUpForm } from "../../Components/SignUpForm/SignUpForm";
import SignupImg from "../../Assets/signUpImg.png";
import { Footer } from "../../Components/Footer/Footer";

export const SignUp = () => {
  return (
    <>
      <div className="bg-slate-500 m-h-full flex justify-between flex-col h-screen">
        <div className="">
          <NavBar />
          <div className=" items-center justify-center m-h-screen bg-slate-500">
            <div className="flex flex-row justify-center m-h-screen gap-10">
              <img
                src={SignupImg}
                alt="signUp img"
                className="max-h-96 mb-auto mt-80 "
              />
              <SignUpForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
