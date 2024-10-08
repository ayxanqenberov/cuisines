import React, { useContext } from "react";
import { globalContext } from "../../../Context/GlobalProvider";
import "./twoSect.css";

const TwoSect = () => {
  const { alldata } = useContext(globalContext);

  if (!alldata.recipes || !Array.isArray(alldata.recipes)) {
    // If alldata.recipes is not available or not an array, show loading or fallback
    return <p>Loading...</p>;
  }

  return (
    <section>
      <div className="allProducts">
        {alldata.recipes.map((item) => (
            <div className="product" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="description">
              <h2>{item.name}</h2>
              <p>{item.cuisine}</p>
              <span>{item.rating}</span>
            </div>
          </div>
        ))}
        </div>
    </section>
  );
};

export default TwoSect;
