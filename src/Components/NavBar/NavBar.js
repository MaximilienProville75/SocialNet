import React from "react";
import wave from "../../Assets/wave4.png";
import { Link } from "react-router-dom";
import { UserThumbs } from "../UserThumbs/UserThumbs";

export const NavBar = () => {
  return (
    <>
      <header className="bg-sky-500 h-7 fixed-header">
        <div className="flex flex-row justify-between">
          <Link to="/">
            <div className="font-pacifico text-white text-6xl absolute top-5 left-5">
              SocialNet
            </div>
          </Link>
          <UserThumbs />
        </div>
      </header>
      <img src={wave} alt="wave" className="-mb-72 w-full max-h-[26.563rem]" />
    </>
  );
};
