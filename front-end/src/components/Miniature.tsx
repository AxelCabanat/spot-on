import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import { video } from "../interfaces";
import { assetMiniature } from "../services/Cdn";

interface Props {
  video: video;
}

const Miniature = ({ video }: Props) => {
  return (
    <Link className="miniature" to={`/video/${video.id}`}>
      <h3>{video.title}</h3>
      <img src={assetMiniature(video.url_miniature)} />
    </Link>
  );
};

export default Miniature;
