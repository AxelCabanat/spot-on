import Label from "./Label";
import { StudioOutletContext, Studio } from "../interfaces";
import { useOutletContext } from "react-router-dom";
import logo from "../../src/assets/img/logo-court.jpg";
import imageBanner from "../../src/assets/img/banner.png";
import { fetchNewStudio } from "../services/Api";

interface Props {
  register: Function;
  newStudio: Studio;
}

export default function ColorsStudio({ register, newStudio }: Props) {
  const { isText }: StudioOutletContext = useOutletContext();

  return (
    <div className={isText ? "bg-white mb-6" : "bg-white-200 mb-6"}>
      {isText && (
        <>
          <div className="label-color flex-col lg:flex-row items-center  lg:items-start flex flex-warp   md:flex-row justify-between mt-2 mb-6">
            <div>
              <Label htmlFor="logo">Logo</Label>

              {newStudio.logo ? (
                <img
                  className="w-40 h-40 m-0"
                  src={newStudio.logo}
                  alt="Studio logo"
                />
              ) : (
                <img
                  className="w-40 h-40 mr-2"
                  src="https://vectorified.com/images/man-icon-png-10.png"
                  alt="avatar"
                />
              )}
            </div>
            <div>
              <Label htmlFor="background">Couleurs du fond</Label>
              <div className="triangle-ll">
                <input
                  {...register("background", { required: true })}
                  type="color"
                  id="background"
                  className="input-color triangle-left w-40 h-40 shadow-inputs"
                />
              </div>
              <div className="triangle-rr">
                <label htmlFor="background2" className="triangle-right" />

                <input
                  {...register("background2", { required: true })}
                  type="color"
                  id="background2"
                  className="input-color  w-40 h-40 shadow-inputs triangle-right "
                />
              </div>
            </div>
            <div>
              <Label htmlFor="background_secondary">Couleur secondaire</Label>

              <input
                {...register("background_secondary", { required: true })}
                type="color"
                id="background_secondary"
                className="input-color w-40 h-40 shadow-inputs"
              />
            </div>

            <div>
              <Label htmlFor="color_primary">Couleur du texte principal</Label>
              <input
                {...register("color_primary", { required: true })}
                type="color"
                id="color_primary"
                className="input-color w-60 h-10 shadow-inputs"
              />

              <Label htmlFor="color_secondary">
                Couleur du texte secondaire
              </Label>
              <input
                {...register("color_secondary", { required: true })}
                type="color"
                id="color_secondary"
                className="input-color w-60 h-10 shadow-inputs"
              />

              <Label htmlFor="typo">Police principale</Label>
              <select
                {...register("typo", { required: true })}
                id="typo"
                className="mt-1 focus:ring-indigo-500 text-gray-700 focus:border-indigo-500 block w-60 sm:text-sm border-gray-300 bg-white shadow-inputs"
              >
                <option value="'Montserrat', sans-serif">Monserrat</option>
                <option value="brandon-grotesque-black">
                  Brandon Grotesque
                </option>
                <option value="typo3">Typo 3</option>
              </select>
            </div>
          </div>
          <p className="block text-xl font-medium text-gray-700 pb-2">
            Bandeau
          </p>
          <div
            className="w-full bg-no-repeat bg-cover bg-center min-h-[350px]"
            style={{
              backgroundImage: `url(${newStudio.banner || imageBanner})`,
            }}
          ></div>
          <textarea
            {...register(`banner`, { required: false })}
            placeholder="Insérer une url pour la bannière"
            className={"home-config-previsualize z-50 text-black mt-6"}
          />
        </>
      )}
    </div>
  );
}
