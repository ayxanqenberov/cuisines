import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const globalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [alldata, setdata] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/recipe");
        setdata(res.data); // Adjust based on the actual structure of res.data
      } catch (e) {
        console.log(e);
      }
    };
    getApi();
  }, []);

  const data = {
    alldata,
  };

  return <globalContext.Provider value={data}>{children}</globalContext.Provider>;
};

export default GlobalProvider;

