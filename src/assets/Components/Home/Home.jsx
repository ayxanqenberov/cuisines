import React from "react";
import OneSect from "./OneSect/OneSect";
import Aside from "../Aside/Aside";
import TwoSect from "./TwoSect/TwoSect";
import "../Home/home.css";
import GlobalProvider from "../../Context/GlobalProvider";
import ThreeSect from "./ThreeSect/ThreeSect";
import FourSect from "./FourSect/FourSect";

const Home = () => {
  return (
    <>
      <OneSect />
      <GlobalProvider>
        <TwoSect />
      </GlobalProvider>
      <ThreeSect/>
      <FourSect/>
    </>
  );
};

export default Home;
