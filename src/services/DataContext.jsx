import React, { createContext } from "react";
export const DataContext = createContext();
export const DataContext1 = createContext(10);

const DataProvider = ({ children }) => {
  const dataValue = 8; // Change this to the actual data you want to provide

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
