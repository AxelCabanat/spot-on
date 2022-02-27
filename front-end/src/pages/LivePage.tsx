import { useContext } from "react";

import UserContext from "../context/UserContext";
import LiveStudioComponent from "../components/LiveStudioComponent";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { fetchUpdateStudioLive } from "../services/Api";
import { StudioOutletContext } from "../interfaces";
import { notifSuccess } from "../services/notifications";

const LivePage = () => {
  const { user } = useContext(UserContext);
  const { studioName, streamurl } = useParams();
  const { studio }: StudioOutletContext = useOutletContext();
  const navigate = useNavigate();

  const endLive = async (id: number) => {
    await fetchUpdateStudioLive(id, false, "");
  };

  const endOfStream = () => {
    if (user && user.role === 2) {
      notifSuccess("Merci d'avoir assisté à ce live !");

      setTimeout(() => {
        navigate(`/studios/${studioName}`);
      }, 2000);
    }
    if (user && user.role === 1) {
      notifSuccess("Fin de tournage !");

      endLive(studio.id);

      setTimeout(() => {
        navigate(`/studios/${studioName}/admin`);
      }, 2000);
    }
  };

  return (
    <div>
      <LiveStudioComponent
        roomName={streamurl}
        user={user ? user.username : "---"}
        studio={studioName ? studioName : "PAS DE STUDIO"}
        studioBackground={
          studio.background ? studio.background : "PAS DE BACKGROUND"
        }
        onConferenceLeft={() => endOfStream()}
      />
    </div>
  );
};

export default LivePage;
