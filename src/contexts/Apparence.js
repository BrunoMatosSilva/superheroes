import { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

export function ApparenceProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
