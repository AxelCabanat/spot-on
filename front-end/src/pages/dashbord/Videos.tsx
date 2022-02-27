import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import UploadVideo from "../../components/UploadVideo";
import ManagerVideo from "../../components/ManagerVideo";
import { StudioOutletContext, Category, video } from "../../interfaces";
import { fetchStudioCategories, fetchStudioVideos } from "../../services/Api";
import LiveLauncher from "../../components/LiveLauncher";

const Videos = () => {
  const { studio }: StudioOutletContext = useOutletContext();
  const [categories, setCategories] = useState<Category[]>([]);
  const [videos, setvideos] = useState<video[]>([]);

  const setData = async () => {
    setCategories(await fetchStudioCategories(studio.id));
    setvideos(await fetchStudioVideos(studio.id));
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <>
      <LiveLauncher />
      <UploadVideo categories={categories} OnCreated={setData} />
      <ManagerVideo videos={videos} categories={categories} onSaved={setData} />
    </>
  );
};

export default Videos;
