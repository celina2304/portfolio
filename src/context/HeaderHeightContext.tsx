import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface HeaderHeightContextType {
  headerHeight: number;
  setHeaderHeight: Dispatch<SetStateAction<number>>;
  // setHeaderRef: (node: HTMLElement | null) => void;
};

const HeaderHeightContext = createContext<HeaderHeightContextType | undefined>(undefined);

export const HeaderHeightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <HeaderHeightContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </HeaderHeightContext.Provider>
  );
};

export const useHeaderHeight = () => {
  const context = useContext(HeaderHeightContext);
  if (!context) throw new Error("useHeaderHeight must be used within provider");
  return context;
};
