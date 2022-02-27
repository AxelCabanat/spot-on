import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import Miniature from "../../components/Miniature";
import StudioNavbar from "../../components/StudioNavbar";
import { StudioOutletContext, video } from "../../interfaces";
import { fetchStudioVideos } from "../../services/Api";
import imageBanner from "../../assets/img/banner.png";

const MyVideos = () => {
  const { studio }: StudioOutletContext = useOutletContext();
  const [videos, setVideos] = useState<video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setData = async (id: number) => {
    setVideos(await fetchStudioVideos(id));
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setData(studio.id);
  }, []);

  return (
    <div className={`myvideos min-h-screen bg-[${studio.background}]`}>
      <div
        className="w-full bg-no-repeat bg-cover bg-center min-h-[350px]"
        style={{
          backgroundImage: `url(${studio.banner || imageBanner})`,
        }}
      >
        <div className="w-1/4 pl-8 pt-2">
          <img src={studio.logo} alt={studio.logo} />
        </div>
        <h1
          style={{
            color: studio.color_primary || "#ffffff",
          }}
          className={"home-config-normal main-title bg-transparent	ml-8"}
        >
          {studio.main_title}
        </h1>
      </div>
      <p
        style={{
          color: studio.color_secondary || "#000000",
        }}
        className={
          "home-config-normal text-center color-secondary bg-transparent"
        }
      >
        {studio.main_description}
      </p>
      <StudioNavbar studio={studio} />
      <h2>Nouveautés du studio {studio.name}</h2>
      <div className="container_videos">
        {videos.map((video) => {
          return <Miniature key={video.id} video={video} />;
        })}
        {isLoading && <p>chargement en cours ...</p>}
      </div>
    </div>
  );
};

export default MyVideos;
