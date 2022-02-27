import { Link, Outlet, useOutletContext } from "react-router-dom";

import { StudioOutletContext } from "../interfaces";
import StudioNavbar from "../components/StudioNavbar";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function StudioLayout() {
  const { studio, setStudio }: StudioOutletContext = useOutletContext();
  const { user } = useContext(UserContext);
  return (
    <>
      <div style={{ background: studio.background }}>
        <Outlet context={{ studio, setStudio }} />
      </div>
    </>
  );
}
