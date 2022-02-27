import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
interface Props {
  layoutName: string;
  layoutLogo?: string;
}

const SidebarHeader = ({ layoutName, layoutLogo }: Props) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="p-6 w-full text-white flex flex-col justify-center text-center">
      <p className="hidden text-2xl xl:block">{layoutName}</p>

      <img
        className="my-6 rounded-full border-2 border-solid border-white mx-auto w-1/2"
        src={layoutLogo}
        alt="avatar"
      />

      <p className="text-gray-300">{user && user.email}</p>
    </div>
  );
};

export default SidebarHeader;
