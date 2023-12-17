import { createContext, useState } from "react";

const RoundContext = createContext();

export const RoundProvider = ({ children }) => {
  const [round, setRound] = useState([2,2,2]);

  const contextData = {
    round: round,
    setRound: setRound,
  };


  return (
    <RoundContext.Provider value={contextData}>{children}</RoundContext.Provider>
  );
};

export default RoundContext;
