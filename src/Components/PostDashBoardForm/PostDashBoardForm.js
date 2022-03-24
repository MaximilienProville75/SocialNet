import React from "react";
import { BiCamera } from "react-icons/bi";
import { IoFilmOutline } from "react-icons/io5";
import userImg from "../../Assets/userPng.png";
import { PopUp } from "./PopUpSrc/PopUpSrc";

import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  setDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import db from "../../firebase";

export const PostDashBoardForm = () => {
  const [description, setDescription] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [videoSrc, setVideoSrc] = useState("");

  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [buttonPopUp2, setButtonPopUp2] = useState(false);

  const transferValue = async (event) => {
    event.preventDefault();
    const collectionRef = collection(db, "userPost");
    const val = {
      description,
      imgSrc,
      videoSrc,
      // userId,
    };
    clearState();
    await addDoc(collectionRef, val);
  };

  const transferImgSrc = (event) => {
    event.preventDefault();
    setButtonPopUp(true);
  };

  const transerVideoSrc = (event) => {
    event.preventDefault();
    setButtonPopUp2(true);
  };

  const clearState = () => {
    setDescription("");
    setImgSrc("");
    setVideoSrc("");
  };

  console.log(imgSrc);

  return (
    <>
      <div className="bg-slate-300  max-w-xl lg:max-w-3xl flex flex-row m-auto shadow-xl border-sky-300 border-8 rounded-formRad p-3 ">
        <img src={userImg} className="h-20 w-20 mr-4 p-1 mt-2" alt="user img" />
        <div className="w-full pr-4">
          <form>
            <div className="flex flex-col text-lg w-auto">
              <input
                type="text"
                className="rounded-2xl border-sky-300 border-2 h-24 focus:caret-red-300"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Write Your Post..."
              />
            </div>
            <div className="flex flex-row justify-between ml-1">
              <div className="flex flex-row mt-4 gap-6">
                <button className="flex flex-row" onClick={transferImgSrc}>
                  <BiCamera className="text-sky-500 text-xl mt-1 mr-1" />
                  <div className="font-quicksand text-slate-500 text-lg">
                    Photo
                  </div>
                </button>

                <button className="flex flex-row" onClick={transerVideoSrc}>
                  <IoFilmOutline className="text-sky-500 text-xl mt-1 mr-1" />
                  <div className="font-quicksand text-slate-500 text-lg">
                    Video
                  </div>
                </button>
              </div>
              <button
                className="font-pacifico text-white text-2xl mt-2 mr-2 bg-sky-300 w-36 ring-2 ring-white rounded-2xl h-10 animate-pulse"
                onClick={transferValue}
              >
                Post
              </button>
            </div>
          </form>
          <PopUp
            trigger={buttonPopUp}
            setTrigger={setButtonPopUp}
            className="fixed top-0 left-0 w-full h-screen flex justify-center items-center"
          >
            <input
              type="text"
              className="rounded-2xl border-sky-300 border-2 w-full h-18  p-2"
              value={imgSrc}
              onChange={(event) => setImgSrc(event.target.value)}
              placeholder="Add your Img Link"
            />
          </PopUp>
          <PopUp
            trigger={buttonPopUp2}
            setTrigger={setButtonPopUp2}
            className="fixed top-0 left-0 w-full h-screen flex justify-center items-center"
          >
            <input
              type="text"
              className="rounded-2xl border-sky-300 border-2 w-full h-18  p-2"
              value={videoSrc}
              onChange={(event) => setVideoSrc(event.target.value)}
              placeholder="Add your Video Link"
            />
          </PopUp>
        </div>
      </div>
    </>
  );
};
