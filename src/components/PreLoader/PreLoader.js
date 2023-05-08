import React from "react";
import { HashLoader } from "react-spinners";
import './PreLoader.css'

export const PreLoader = () => {
  return (
    <>
      <div className="loader-container">
        <HashLoader
          color="#36d7b7"
          cssOverride={{}}
          loading
          size={130}
        />
      </div>
    </>
  );
};
