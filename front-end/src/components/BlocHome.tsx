import { useOutletContext } from "react-router-dom";

import { Studio, StudioOutletContext } from "../../src/interfaces";
import IsContactComponent from "../components/IsContact";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  picture?: string;
  wayPicture?: string;
  isText?: boolean;
  register: Function;
  registerTitle?: string;
  registerDescription?: string;
  registerUrl?: string;
  newStudio: Studio;
  colorBackground?: string;
  isCatalog?: boolean;
  isContact?: boolean;
}

export default function BlocHome({
  title,
  description,
  url,
  picture,
  wayPicture,
  isText,
  register,
  registerTitle,
  registerDescription,
  registerUrl,
  newStudio,
  colorBackground,
  isCatalog,
  isContact,
}: Props) {
  const { studio, setStudio }: StudioOutletContext = useOutletContext();
  return (
    <section
      className="my-2 lg:my-20"
      style={{
        background: `${colorBackground || "#E6E6E6"}`,
      }}
    >
      {" "}
      <div
        className={
          wayPicture === "left" ? "homeStudio" : "homeStudio home-reverse"
        }
      >
        <img className="" src={url ? `${url}` : `${picture}`} />
        <div className="homeStudio-text">
          {isText ? (
            <textarea
              rows={1}
              {...register(`${registerTitle}`, { required: true })}
              placeholder="insérer un titre"
              style={{
                background: newStudio.background_secondary || "#FFBE00",
                color: newStudio.color_primary || "#000000",
              }}
              className={
                "home-config-previsualize text-3xl color-primary uppercase py-2 pl-4"
              }
            />
          ) : (
            <h2
              style={{
                background: newStudio.background_secondary || "#FFBE00",
                color: newStudio.color_primary || "#000000",
              }}
              className={
                "home-config-normal text-3xl color-primary uppercase py-2 pl-4"
              }
            >
              {title}
            </h2>
          )}

          {isText ? (
            <>
              <textarea
                rows={10}
                cols={20}
                {...register(`${registerDescription}`, { required: true })}
                placeholder="insérer une description"
                style={{
                  color: newStudio.color_secondary || "#000000",
                }}
                className={"home-config-previsualize"}
              />

              {isCatalog ? (
                <h3
                  style={{
                    background: newStudio.background2 || "#E6E6E6",
                    color: newStudio.color_primary || "#000000",
                  }}
                  className={"text-3xl uppercase py-2 mx-auto pl-4 w-9/12 mb-2"}
                >
                  Voir notre catalogue
                </h3>
              ) : (
                ""
              )}
              {isContact ? <IsContactComponent newStudio={newStudio} /> : null}

              <textarea
                {...register(`${registerUrl}`, { required: false })}
                placeholder="Insérer une url"
                className={"home-config-previsualize text-black"}
              />
            </>
          ) : (
            <>
              <p
                style={{
                  color: newStudio.color_secondary,
                }}
                className={"home-config-normal"}
              >
                {description}
              </p>
              {isCatalog ? (
                <h3
                  style={{
                    background: newStudio.background2 || "#E6E6E6",
                    color: newStudio.color_primary || "#000000",
                  }}
                  className={
                    "home-config-normal text-3xl uppercase py-2 pl-4 w-9/12 mt-2"
                  }
                >
                  Voir notre catalogue
                </h3>
              ) : (
                ""
              )}
              {isContact ? <IsContactComponent newStudio={newStudio} /> : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
