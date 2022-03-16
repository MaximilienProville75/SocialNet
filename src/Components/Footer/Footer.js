import React from "react";
import Wave from "../../Assets/wave3.png";

export const Footer = () => {
  return (
    <>
      <div className="fixed-footer ">
        <img src={Wave} className="-mt-72 w-full -mb-14 m-h-[26.563rem]" />
        <footer className="bg-sky-500 h-250">
          <div className="flex flex-col text-center">
            <div className="text-2xl text-white font-pacifico">
              SocialNet Copyright©
            </div>
            <div>
              <div className="flex-row flex font-quicksand text-white text-m justify-end -mt-5">
                Powered By:
                <div className="flex flex-row">
                  <img
                    align="center"
                    height="30"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />
                  <img
                    align="center"
                    height="30"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  />
                  <img
                    align="center"
                    height="30"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
