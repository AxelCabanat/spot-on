//create SocieteContext
import { createContext } from "react";
import { SocieteContext } from "../interfaces";

export default createContext<SocieteContext>({
  setSociete: () => {}
});
