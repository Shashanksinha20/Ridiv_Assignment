import React, { useState } from "react";

export const ThemeContext = React.createContext();

export default function ThemeContextProviderComponent({ children }) {
  const [state, setState] = useState("dark");
  const toggleState = () => {
    setState(state === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={[state, toggleState]}>
      {children}
    </ThemeContext.Provider>
  );
}
