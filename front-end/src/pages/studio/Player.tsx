import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";

import Miniature from "../../components/Miniature";
import { Studio, video } from "../../interfaces";
import {
  fetchStudioById,
  fetchStudioVideos,
  fetchVideo,
} from "../../services/Api";
import { assetVideo } from "../../services/Cdn";

type ParamTypes = {
  id: string;
};

const Player = () => {
  const { id } = useParams<ParamTypes>();
  const [video, setVideo] = useState<video>();
  const [studio, setStudio] = useState<Studio>();
  const [recos, setRecos] = useState<video[]>([]);

  const setData = async (id: string) => {
    const video = await fetchVideo(id);
    setVideo(video);
    setRecos(await fetchStudioVideos(video.id_studio));
    setStudio(await fetchStudioById(video.id_studio));
  };

  useEffect(() => {
    setData(id!);
  }, [id]);

  return (
    <div className="player_container">
      <div className="player background-cover">
        <ReactPlayer
          width={"80%"}
          height={"100%"}
          controls={true}
          url={assetVideo(video?.url_video)}
        />
        <div className="player_description ">
          <h2 className="h3-title-banner-h p-4 rounded-lg">{video?.title}</h2>
          <div className="player_studio">
            <p>Vidéo de :</p>
            <Link to={`/studios/${studio?.name}`}>
              {studio?.logo ? (
                <img
                  className="logo_studio"
                  src={studio?.logo}
                  alt="Studio logo"
                />
              ) : (
                <svg
                  className="w-8 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
              <span>{studio?.name}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="player_reco ">
        <h3 className="banner-red">Recommandations</h3>
        <div className="player_reco_container">
          {recos.map((miniature, id) => {
            return <Miniature key={id} video={miniature} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Player;
