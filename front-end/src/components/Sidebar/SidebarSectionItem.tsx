import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  icon?: ReactElement;
  children?: ReactNode;
}

export default function SidebarSectionItem({ icon, link, children }: Props) {
  return (
    <Link to={link} className="w-full">
      <button className="px-3 py-2 flex items-center space-x-6 rounded w-full text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white">
        {icon && React.cloneElement(icon, { className: "h-6 w-6" })}
        <span className="grow text-left text-base">{children}</span>
      </button>
    </Link>
  );
}
