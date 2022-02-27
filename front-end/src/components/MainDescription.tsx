import { useOutletContext } from "react-router-dom";

import { Studio, StudioOutletContext } from "../../src/interfaces";
import imageBanner from "../assets/img/banner.png";

interface Props {
  isText: boolean;
  register: Function;
  newStudio: Studio;
  main_title?: string;
  main_description?: string;
  registerMainTitle: string;
  registerMainDescription: string;
}

export default function MainDescription({
  isText,
  register,
  newStudio,
  main_title,
  main_description,
  registerMainTitle,
  registerMainDescription,
}: Props) {
  return (
    <>
      {isText ? (
        <>
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-center min-h-[350px]"
            style={{
              backgroundImage: `url(${newStudio.banner || imageBanner} )`,
            }}
          >
            <div className="w-1/4 pl-8 pt-2">
              {newStudio.logo ? (
                <img className="w-40" src={newStudio.logo} alt="Studio logo" />
              ) : (
                <img
                  className="w-16 mr-2"
                  src="https://vectorified.com/images/man-icon-png-10.png"
                  alt="avatar"
                />
              )}{" "}
            </div>
            <textarea
              {...register(`${registerMainTitle}`, { required: true })}
              placeholder="Titre de présentation"
              style={{
                color: newStudio.color_primary || "#ffffff",
              }}
              className={
                "home-config-previsualize main-title bg-transparent	ml-8"
              }
            />
          </div>
          <textarea
            rows={4}
            {...register(`${registerMainDescription}`, { required: true })}
            placeholder="Courte présentation du studio"
            style={{
              color: newStudio.color_secondary || "#000000",
            }}
            className={
              "home-config-previsualize h-full text-center color-secondary bg-transparent"
            }
          />
        </>
      ) : (
        <>
          <div
            className="w-full  bg-no-repeat bg-cover bg-center min-h-[350px]"
            style={{
              backgroundImage: `url(${newStudio.banner || imageBanner})`,
            }}
          >
            <div className="w-1/4 pl-8 pt-2">
              <img src={newStudio.logo} alt={newStudio.logo} />
            </div>
            <h1
              style={{
                color: newStudio.color_primary || "#ffffff",
              }}
              className={
                "home-config-normal main-title bg-transparent	ml-8 my-4"
              }
            >
              {main_title}
            </h1>
          </div>
          <p
            style={{
              color: newStudio.color_secondary || "#000000",
            }}
            className={
              "home-config-normal text-center color-secondary bg-transparent my-4"
            }
          >
            {main_description}
          </p>
        </>
      )}
    </>
  );
}
