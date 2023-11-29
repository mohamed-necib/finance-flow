import React, { createContext, useContext } from "react";


const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
