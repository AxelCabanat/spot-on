import React, { ReactElement, ReactNode, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { ChevronDownIcon } from "@heroicons/react/outline";
import UserContext from "../../context/UserContext";
import { fetchLogout } from "../../services/Api";

interface SidebarSectionProps {
  label: string;
  icon?: ReactElement;
  link?: string;
  layout?: any;
  open?: boolean;
  children?: ReactNode;
}

export default function SidebarSection({
  icon,
  label,
  link,
  layout,
  open = false,
  children,
}: SidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(open);
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const logout = async () => {
    setUser(undefined);
    fetchLogout();
    navigate("/");
  };

  const NavStudio = async () => {
    navigate(`/studios/${layout.name}`);
  };

  return (
    <div
      className="px-3 border-b border-gray-600 w-full"
      onClick={() =>
        (label === "Déconnexion" && logout()) ||
        (label === "Mon studio" && NavStudio())
      }
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none focus:text-indigo-400, hover:text-indigo-400 text-white flex items-center w-full py-5"
      >
        {icon && React.cloneElement(icon, { className: "h-6 w-6" })}
        {link ? (
          <Link className="!ml-4 text-left text-sm uppercase grow" to={link}>
            {label}
          </Link>
        ) : (
          <p className="ml-4 text-left text-sm uppercase grow">{label}</p>
        )}

        {children && (
          <ChevronDownIcon
            className={`w-6 h-6 transform duration-100 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {children && (
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } justify-start flex-col w-full items-start pb-1`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
