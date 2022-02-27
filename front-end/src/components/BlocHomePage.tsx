interface Props {
  titleBanner: string;
  textBloc: string;
  image: string;
  wayPicture: string;
  isVideo:boolean;
}
export default function ({ titleBanner, textBloc, image, wayPicture, isVideo }: Props) {
  return (
    <div
      className={
        wayPicture === "right"
          ? "container-right"
          : wayPicture === "left"
          ? "container-left"
          : wayPicture === "down"
          ? "container-down"
          : ""
      }
    >
      <div
        className={
          wayPicture === "down" ? "container-div-v" : "container-div-h"
        }
      >
        <h3
          className={
            wayPicture === "down" ? "h3-title-banner-v" : "h3-title-banner-h"
          }
        >
          {titleBanner}
        </h3>
        <p className="p-text-bloc-h">{textBloc}</p>
        {isVideo ? (
          <div className="link-btb">
          <a href="#">
            Voir des exemples de vidéos
          </a>
          <a href="#">
            Tester les templates
          </a>
          </div>
        ) : (null)}
      </div>
      <img
        src={image}
        alt="image d'illustration"
        className={wayPicture === "down" ? "img-v" : "img-h"}
      />
    </div>
  );
}
