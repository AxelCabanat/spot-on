import { video, Category } from "../interfaces";
import Manager from "./Manager";

interface Props {
  categories: Category[];
  videos: video[];
  onSaved: () => void;
}

const ManagerVideo = ({ categories, videos, onSaved }: Props) => {
  return (
    <div className="flex flex-wrap mx-10">
      {videos.map((video) => {
        return (
          <Manager
            key={video.id}
            categories={categories}
            video={video}
            onSaved={onSaved}
          />
        );
      })}
    </div>
  );
};

export default ManagerVideo;
