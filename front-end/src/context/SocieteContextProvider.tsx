import { useState } from "react";
import { ReactChildren, ReactChild } from "react";

import SocieteContext from "./SocieteContext";

interface Props {
  children: ReactChild | ReactChildren;
}

const SocieteContextProvider = ({ children }: Props) => {
  const [societe, setSociete] = useState<string>();

  return (
    <SocieteContext.Provider value={{ societe, setSociete }}>
      {children}
    </SocieteContext.Provider>
  );
};

export default SocieteContextProvider;