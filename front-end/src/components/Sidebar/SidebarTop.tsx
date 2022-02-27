import { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

interface Props {
  layoutName: string;
  onToggle: (toggle: boolean) => void;
}

export default function SidebarTop({ layoutName, onToggle }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
    onToggle && onToggle(!isOpen);
  }

  return (
    <div className="p-6 fixed z-[999] bg-gray-900 flex items-center w-full xl:hidden">
      <p className="ml-4 text-2xl leading-6 text-white grow">{layoutName}</p>

      <button
        aria-label={isOpen ? "close" : "open"}
        onClick={toggle}
        className="focus:outline-none focus:ring-2"
      >
        {isOpen ? (
          <XIcon className="white-svg w-6 h-6" />
        ) : (
          <MenuIcon className="white-svg w-6 h-6" />
        )}
      </button>
    </div>
  );
}
