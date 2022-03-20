import React from "react";
import userImg from "../../Assets/userPng.png";

//? Ajouter logique check if photo or video got link then add it to the an html Balise to add it to the post under the potential description

export const Post = (props) => {
  const post = props.post;
  console.log(post);
  console.log(post.imgSrc);

  return (
    <div className="bg-white border-sky-300 border-4 shadow-xl rounded-formRad min-h-max">
      <div className="flex flex-row m-4">
        <img src={userImg} className="h-12 w-12" />
        <div className="ml-4 mt-3 font-quicksand">{post.description}</div>
      </div>
      <img
        src={post.imgSrc}
        className="pr-4 pl-4 pb-4 rounded-formRad shadow-xl"
      />
      {/* <video src={post.videoSrc} /> */}
    </div>
  );
};
