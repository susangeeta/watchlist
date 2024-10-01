import React from "react";

const CradSkeleton = () => {
  return (
    <div
      className={`h-64 p-2 flex flex-col transition-all rounded-lg   !ease-in-out !duration-500  shadow-[rgba(76,_78,_100,_0.12)_0px_2px_10px_0px] bg-white`}
    >
      <div className="bg-slate-500 h-full rounded-lg animate-pulse duration-300"></div>
    </div>
  );
};

export default CradSkeleton;
