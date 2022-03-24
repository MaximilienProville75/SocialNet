import React from "react";
import { Post } from "../Post/Post";

//? Map over the array of Db of Posts, transfer data to each --> Post component

export const PostField = (props) => {
  const posts = props.posts;

  return (
    <>
      <div className="bg-slate-300 w-auto max-w-xl lg:max-w-3xl flex flex-col m-auto shadow-xl border-sky-300 border-8 rounded-formRad p-3 mt-10 h-auto  relative gap-5">
        {posts.map((post) => {
          return <Post post={post} key={post} />;
        })}
      </div>
    </>
  );
};
