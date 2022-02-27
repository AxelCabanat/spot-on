import {useContext} from 'react'
import { Outlet } from 'react-router-dom';

import UserContext from "../context/UserContext";
import Sidebar from "../components/Sidebar/Sidebar";



export default function UserLayout() {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
        {user ? (
          <div className="xl:grid xl:grid-cols-5">
            <Sidebar layout={user} />
  
            <div className="flex flex-col col-span-4 bg-white min-h-screen mt-[82px] xl:mt-0">
              <h2 className="text-center text-gray-900 mt-4">
                Bienvenue dans la gestion de : {user.username}
              </h2>
  
              <Outlet
              />
            </div>
          </div>
        ) : (
          <p>Chargement du utilisateur ...</p>
        )}
      </>
    )
}