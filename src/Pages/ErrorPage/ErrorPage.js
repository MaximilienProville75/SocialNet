import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <div className="h-screen bg-slate-500 m-h-full flex justify-between flex-col">
        <div>
          <NavBar />
        </div>
        <div>
          <div className="text-center text-8xl font-pacifico text-white">
            Error 404
          </div>
          <Link to="/">
            <p className="text-center font-quicksand text-2xl text-sky-500 hover:underline">
              Return to Dashboard
            </p>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};
