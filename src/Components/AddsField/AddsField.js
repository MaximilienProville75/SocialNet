import React from "react";
import { Adds } from "./Adds/Adds";

export const AddsField = () => {
  return (
    <>
      <div className="bg-slate-300  max-w-xs flex flex-col m-auto shadow-xl border-sky-300 border-8 rounded-formRad p-3 mt-5 h-auto relative gap-5">
        <Adds />
      </div>
    </>
  );
};
