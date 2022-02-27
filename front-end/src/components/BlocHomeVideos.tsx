import { useState, useEffect } from "react";

import { fetchStudioVideos } from "../services/Api";
import Miniature from "./Miniature";
import { Studio, video } from "../interfaces";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
  newStudio: Studio;
  content: string;
}

const BlocHomeVideos = ({ title, newStudio, content }: Props) => {
  const [videos, setVideos] = useState<video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setData = async (id: number) => {
    setVideos(await fetchStudioVideos(id));
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setData(newStudio.id);
  }, []);

  return (
    <section
      className="my-2 lg:my-20 flex flex-col items-center"
      style={{
        background: `${newStudio.background}`,
      }}
    >
      <h2
        style={{
          background: newStudio.background_secondary || "#FFBE00",
          color: newStudio.color_primary || "#000000",
        }}
        className={
          "home-config-normal text-3xl color-primary text-center uppercase py-2"
        }
      >
        {title}
      </h2>
      <div className="container_videos px-10">
        {videos.map((video) => {
          return <Miniature key={video.id} video={video} />;
        })}
        {isLoading && <p>chargement en cours ...</p>}
      </div>
      <Link
        className="button-general w-1/6 font-extrabold text-center"
        to="video"
      >
        Plus de vidéos
      </Link>
    </section>
  );
};

export default BlocHomeVideos;
