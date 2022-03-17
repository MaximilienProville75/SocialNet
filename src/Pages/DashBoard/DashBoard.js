import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PostDashBoardForm } from "../../Components/PostDashBoardForm/PostDashBoardForm";
import { PostField } from "../../Components/PostField/PostField";

export const DashBoard = (props) => {
  const user = props.user;
  console.log(user);

  return (
    <div className="bg-slate-500 h-screen">
      <NavBar />
      <PostDashBoardForm />
      <PostField />
    </div>
  );
};
