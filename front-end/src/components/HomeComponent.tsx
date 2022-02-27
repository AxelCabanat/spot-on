import { useOutletContext, Link } from "react-router-dom";

import { StudioOutletContext, Studio } from "../interfaces";
import BlocHome from "./BlocHome";
import commuHome from "../assets/img/illustration_communaute.png";
import imageVOD from "../assets/img/image_VOD.png";
import imagePlanning from "../assets/img/illustration_calendrier_live.png";
import imageMultiPlateforme from "../assets/img/illustration_multiplateforme.png";
import imageHelp from "../assets/img/illustration_help.png";
import MainDescription from "./MainDescription";
import NavbarIntraStudio from "./NavbarIntraStudio";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";

import MapVideo from "../assets/img/map-video.png";
import UserContext from "../context/UserContext";
import StudioNavbar from "./StudioNavbar";
import BlocHomeVideos from "./BlocHomeVideos";
import BlocHomeCommu from "./BlocHomeCommu";

interface Props {
  register: Function;
  newStudio: Studio;
  isInterface: boolean;
}

export default function HomeComponent({
  register,
  newStudio,
  isInterface,
}: Props) {
  const { studio, setStudio, isText, setIsText }: StudioOutletContext =
    useOutletContext();
  const [isCatalog, setIsCatalog] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <div
      style={
        !isText
          ? {
              color: newStudio.color_primary,
              background: newStudio.background,
              fontFamily: studio.typo,
            }
          : {
              color: newStudio.color_primary,
              background: newStudio.background,
              fontFamily: studio.typo,
            }
      }
      className="studioHome"
    >
      <MainDescription
        main_title={newStudio.main_title}
        main_description={newStudio.main_description}
        register={register}
        isText={isText}
        registerMainTitle={"main_title"}
        registerMainDescription={"main_description"}
        newStudio={newStudio}
      />
      {user && isText === true ? (
        <NavbarIntraStudio />
      ) : (
        <StudioNavbar studio={studio} />
      )}
      {studio.is_on_stream && (
        <button className="bg-yellow-500 rounded shadow-md mx-6 p-2 text-white">
          <Link to={`livesession/${studio.stream_url}`}>Join Live Session</Link>
        </button>
      )}

      {isInterface || !user?.username ? (
        <BlocHome
          title={newStudio.title1}
          description={newStudio.description1}
          url={newStudio.url1}
          picture={imageVOD}
          wayPicture={"left"}
          register={register}
          isText={isText}
          registerTitle={"title1"}
          registerDescription={"description1"}
          registerUrl={"url1"}
          newStudio={newStudio}
          colorBackground={`${newStudio.background || "#E6E6E6"}`}
          isCatalog={true}
        />
      ) : (
        <BlocHomeVideos
          title={newStudio.title1}
          newStudio={newStudio}
          content={MapVideo}
        />
      )}

      <BlocHome
        title={newStudio.title2}
        description={newStudio.description2}
        url={newStudio.url2}
        picture={imagePlanning}
        wayPicture={"right"}
        isText={isText}
        register={register}
        registerTitle={"title2"}
        registerDescription={"description2"}
        registerUrl={"url2"}
        newStudio={newStudio}
        colorBackground={`${newStudio.background2}`}
      />
      {isInterface ? (
        <BlocHome
          title={newStudio.title3}
          description={newStudio.description3}
          url={newStudio.url3}
          picture={commuHome}
          wayPicture={"left"}
          register={register}
          isText={isText}
          registerTitle={"title3"}
          registerDescription={"description3"}
          registerUrl={"url3"}
          newStudio={newStudio}
          colorBackground={`${newStudio.background || "#E6E6E6"}`}
        />
      ) : (
        <BlocHomeCommu title={newStudio.title3} newStudio={newStudio} />
      )}
      <BlocHome
        title={newStudio.title4}
        description={newStudio.description4}
        url={newStudio.url4}
        picture={imageMultiPlateforme}
        wayPicture={"right"}
        register={register}
        isText={isText}
        registerTitle={"title4"}
        registerDescription={"description4"}
        registerUrl={"url4"}
        newStudio={newStudio}
        colorBackground={`${newStudio.background2}`}
      />
      <BlocHome
        title={newStudio.title5}
        description={newStudio.description5}
        url={newStudio.url5}
        picture={imageHelp}
        wayPicture={"left"}
        register={register}
        isText={isText}
        registerTitle={"title5"}
        registerDescription={"description5"}
        registerUrl={"url5"}
        newStudio={newStudio}
        colorBackground={`${newStudio.background || "#E6E6E6"}`}
        isContact={true}
      />
      {!user ? (
        <nav className="w-full mt-4">
          <div
            style={{
              background: studio.background2,
              color: studio.color_primary,
            }}
            className="link_studio"
          >
            <p className="cursor-pointer font-bold w-1/2 text-center">Tarifs</p>
            <p className="cursor-pointer font-bold border-l-black border-2 py-2 w-1/2 text-center">
              Tester
            </p>
          </div>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
}
