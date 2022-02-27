import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

import { StudioOutletContext } from "../interfaces";
import Sidebar from "../components/Sidebar/Sidebar";

export default function StudioBackOfficeLayout() {
  const { studio, setStudio }: StudioOutletContext = useOutletContext();
  const [isText, setIsText] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {user && studio && user.username === studio.username ? (
        <div className="xl:grid xl:grid-cols-5">
          <Sidebar layout={studio} />

          <div className="flex flex-col col-span-4 bg-white min-h-screen mt-[82px] xl:mt-0">
            <h2 className="text-center text-gray-900 mt-4">
              Bienvenue dans la gestion de : {studio.name}
            </h2>

            <Outlet
              context={{
                studio,
                setStudio,
                isText,
                setIsText,
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <h2 className="ml-[44%] mt-[25%] text-4xl text-red-600">
            unauthorized
          </h2>
          <button onClick={() => navigate("/")} className="ml-[44%]">
            Retour a l'acceuil
          </button>
        </>
      )}
    </>
  );
}
