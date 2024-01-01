import React, { createContext } from "react";
export const DataContext = createContext(1);
export default function DataProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}
