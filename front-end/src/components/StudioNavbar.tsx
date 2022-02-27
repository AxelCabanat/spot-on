import { Link } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../context/UserContext";

const StudioNavbar = ({ studio }: any) => {
  const { user } = useContext(UserContext);
  return (
    <div className="navbar_studio">
      <nav>
        <div
          style={{
            color: studio.color_secondary,
            background: `${studio.background2 || "#E6E6E6"}`,
          }}
          className="link_studio"
        >
          <Link to={`/studios/${studio.name}/video`}>Mes vidéos</Link>
          <p>Planning des Lives</p>
          <p>Ma communauté</p>
          <Link
            to={
              user?.role === 1 && user.admin && user.admin.length != 0
                ? `/studios/${studio.name}/admin`
                : `/user/${user?.username}`
            }
          >
            Mon compte
          </Link>
          <Link to="/">Spot On</Link>
        </div>
      </nav>
    </div>
  );
};

export default StudioNavbar;
