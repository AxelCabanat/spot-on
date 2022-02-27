import { Link, useOutletContext, useNavigate } from "react-router-dom";

import { StudioOutletContext } from "../interfaces";
import { fetchUpdateStudioLive } from "../services/Api";

const LiveLauncher = () => {
  const navigate = useNavigate();
  const { studio }: StudioOutletContext = useOutletContext();

  const getRandomUrl = (urlLength: Number) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (var i = 0; i < urlLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  };

  const startLive = async () => {
    const roomId = getRandomUrl(20);
    await fetchUpdateStudioLive(studio.id, true, roomId);
    navigate(`/studios/${studio.name}/livesession/${roomId}`);
  };

  return (
    <div>
      <button
        className="bg-yellow-500 rounded shadow-md mx-6 p-2"
        onClick={startLive}
      >
        START LIVE SESSION
      </button>
    </div>
  );
};

export default LiveLauncher;
