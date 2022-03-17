import React from "react";
import { Post } from "../Post/Post";

export const PostField = () => {
  return (
    <>
      <div className="bg-slate-300  max-w-xl lg:max-w-3xl flex flex-col m-auto shadow-xl border-sky-300 border-8 rounded-formRad p-3 mt-5 h-full">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};
