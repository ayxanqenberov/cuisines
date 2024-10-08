import React from "react";
import "../OneSect/oneSect.css";

const OneSect = () => {
  return (
    <section>
      <div className="bckgrnd"></div>
      <img
        className="imghome"
        src="https://preview.colorlib.com/theme/cuisines/images/hero_1.jpg.webp"
        alt=""
      />
      <div className="textshome">
        <p id="textHome">You dont need a silver fork to eat good food.</p>
        <div className="bttnsHome">
          <button>see our menu</button>
          <button>special offers</button>
        </div>
      </div>
    </section>
  );
};

export default OneSect;
