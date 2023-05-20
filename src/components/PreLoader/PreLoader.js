import React from "react";
import "./PreLoader.css";

export const PreLoader = () => {
  return (
    <>
      {/* <div className="loader-container">
        <HashLoader
          color="#36d7b7"
          cssOverride={{}}
          loading
          size={130}
        />
      </div> */}

      <div className="hash-loader">
        <span
          style={{
            display: "inherit",
            position: "relative",
            width: 150,
            height: 150,
            transform: "rotate(165deg)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              display: "block",
              width: 30,
              height: 30,
              borderRadius: 15,
              transform: "translate(-50%, -50%)",
              animation:
                "2s ease 0s infinite normal none running react-spinners-HashLoader-before",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              display: "block",
              width: 30,
              height: 30,
              borderRadius: 15,
              transform: "translate(-50%, -50%)",
              animation:
                "2s ease 0s infinite normal none running react-spinners-HashLoader-after",
            }}
          />
        </span>
      </div>
    </>
  );
};
