import { useOutletContext } from "react-router-dom";
import { useState } from "react";

import { StudioOutletContext } from "../../interfaces";
import HomeComponent from "../../components/HomeComponent";

const Home = () => {
  const { studio, setStudio }: StudioOutletContext = useOutletContext();
  const [newStudio, setNewStudio] = useState(studio);

  return (
    <>
      <HomeComponent newStudio={newStudio} isInterface={false} />
    </>
  );
};

export default Home;
