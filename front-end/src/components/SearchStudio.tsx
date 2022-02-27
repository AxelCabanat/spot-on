import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo_temp.png";
import { Studio } from "../interfaces";
import { fetchAllStudio } from "../services/Api";

const SearchStudio = () => {
  const [studios, setStudios] = useState<Studio[]>();

  const setData = async () => {
    setStudios(await fetchAllStudio());
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <section className="contain-scroll">
      <div className="background-cover contain-scroll relative min-h-screen">
        <img src={logo} className="logo-homepage" alt="logo" />
        <h2 className="text-center my-4">Nos studios partenaires :</h2>
        <div className="flex justify-center mt-10">
          {studios?.map((studio) => {
            return (
              <Link
                to={`/studios/${studio.name}`}
                className="bg-[#322DD9] w-60 flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-2xl text-center transition-all hover:scale-125"
              >
                <img className="" src={studio?.logo} alt="Studio logo" />
                <h3 className="text-3xl text-white my-4 ">{studio.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchStudio;
