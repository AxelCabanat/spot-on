import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Studio, StudioOutletContext } from "../interfaces";

export default function NavbarIntraStudio() {
  const { studio }: StudioOutletContext = useOutletContext();
  return (
    <nav className="w-full mt-4">
      <div
        style={{
          background: studio.background2,
          color: studio.color_primary,
        }}
        className="link_studio"
      >
        <p className="cursor-pointer text-center w-1/3 font-bold">Tarifs</p>
        <p className="cursor-pointer text-center w-1/3 font-bold border-x-black border-2 py-2">
          Tester
        </p>
        <p className="cursor-pointer text-center w-1/3 font-bold">
          Déja inscrit dans ce studio?
          <br /> Se connecter
        </p>
      </div>
    </nav>
  );
}
