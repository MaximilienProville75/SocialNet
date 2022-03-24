import React from "react";
import userImg from "../../Assets/userPng.png";
import ReactPlayer from "react-player";

//? Ajouter logique check if photo or video got link then add it to the an html Balise to add it to the post under the potential description

export const Post = (props) => {
  const post = props.post;

  return (
    <div className="bg-white border-sky-300 border-4 shadow-xl rounded-formRad min-h-max">
      <div className="flex flex-row m-4">
        <img src={userImg} className="h-12 w-12" />
        <div className="ml-4 mt-3 font-quicksand">{post.description}</div>
      </div>
      {post.imgSrc ? (
        <img
          src={post.imgSrc}
          className="pr-4 pl-4 pb-4 rounded-formRad shadow-xl"
        />
      ) : (
        ""
      )}
      {post.videoSrc ? <ReactPlayer url={post.videoSrc} controls={true} /> : ""}
    </div>
  );
};
