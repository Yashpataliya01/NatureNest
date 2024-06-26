import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [islogin, setislogin] = useState(() => {
    const savedLoginState = localStorage.getItem("islogin");
    return savedLoginState ? JSON.parse(savedLoginState) : false;
  });

  useEffect(() => {
    localStorage.setItem("islogin", JSON.stringify(islogin));
  }, [islogin]);

  const [rewardscount, setrewardscount] = useState(0);

  return (
    <AppContext.Provider
      value={{ islogin, setislogin, rewardscount, setrewardscount }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
