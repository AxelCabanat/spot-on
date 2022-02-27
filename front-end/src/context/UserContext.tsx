//create UserContext
import { createContext } from "react";
import { UserContext } from "../interfaces";

export default createContext<UserContext>({
  setUser: () => {}
});
