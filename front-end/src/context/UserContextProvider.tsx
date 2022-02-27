import { useEffect, useState } from "react";
import { ReactChildren, ReactChild } from "react";

import UserContext from "./UserContext";
import { User} from "../interfaces"
import { fetchCookiesLogin } from "../services/Api"


interface Props {
  children: ReactChild | ReactChildren;
}

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>();

  const fetchData = async () => {
    setUser(await fetchCookiesLogin());
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
