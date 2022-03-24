import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PostDashBoardForm } from "../../Components/PostDashBoardForm/PostDashBoardForm";

//? Fields Imports
import { NewsField } from "../../Components/NewsField/NewsField";
import { PostField } from "../../Components/PostField/PostField";
import { AddsField } from "../../Components/AddsField/AddsField";
import { ProfilThumbs } from "../../Components/ProfilThumbs/ProfilThumbs";

import { Footer } from "../../Components/Footer/Footer";

export const DashBoard = (props) => {
  const user = props.user;
  const posts = props.post;
  console.log(user);

  return (
    <>
      <div className="bg-slate-500 h-auto">
        <NavBar />

        <div className="flex flex-row bg-slate-500 max-w-7xl gap-5 m-auto">
          <div className="w-1/6">
            <NewsField />
          </div>
          <div className="flex-col w-auto mt-5">
            <PostDashBoardForm className="z-20" />
            <PostField posts={posts} />
          </div>
          <div className=" flex-col w-1/6">
            <ProfilThumbs />
            <AddsField />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
