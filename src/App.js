import { useDispatch } from "react-redux";
import { ADMIN } from "./constants/actionTypes";
import Notify from "./admin/utils/Notify";
// routes
import Router from "./routes";

// theme
import ThemeProvider from "./admin/theme";
import { slider, gallery } from "./actions/client";
// components

// PreLoader
import { useState, useEffect } from "react";
import { PreLoader } from "./components/PreLoader/PreLoader";

// ----------------------------------------------------------------------

export default function App() {
  const dispatch = useDispatch();
  dispatch(slider());
  dispatch(gallery());
  dispatch({ type: ADMIN });

  const [isLoaded, setIsLoading] = useState(true);

  // Static Pre-Loader
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // Dynamin Pre-Loader01
  // useEffect(() => {
  //   window.onload = () => {
  //     console.log("Page Has Loaded");
  //     setIsLoading(false);
  //   };
  // }, []);

  // Dynamin Pre-Loader01
  // window.addEventListener("load", () => {
  //   if (document.readyState === "complete") {
  //     // window.onload has completed
  //     console.log("Page Has Loaded");
  //     setIsLoading(false);
  //   }
  // });

  return (
    <ThemeProvider>
      <Notify />
      {isLoaded ? <PreLoader /> : <Router />}
      {/* <Router /> */}
    </ThemeProvider>
  );
}
