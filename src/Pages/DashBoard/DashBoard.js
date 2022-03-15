import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PostField } from "../../Components/PostField/PostField";

export const DashBoard = () => {
  return (
    <div>
      <NavBar />
      <div className="font-quicksand font-extrabold text-2xl text-violet-600 text-center">
        DashBoard
      </div>
      <PostField />
    </div>
  );
};
