import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PostDashBoardForm } from "../../Components/PostDashBoardForm/PostDashBoardForm";
import { PostField } from "../../Components/PostField/PostField";

export const DashBoard = (props) => {
  const user = props.user;
  const posts = props.post;
  console.log(user);

  return (
    <div className="bg-slate-500 h-full">
      <NavBar />
      <PostDashBoardForm />
      <PostField posts={posts} />
    </div>
  );
};
