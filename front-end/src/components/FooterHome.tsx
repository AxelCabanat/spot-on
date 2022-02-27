import LogoCourt from "../assets/img/logo-court.png";
import Facebook from "../assets/img/icone-face.png";
import Instagram from "../assets/img/icone-insta.png";
import Linkedin from "../assets/img/icone-link.png";
import Youtube from "../assets/img/icone-youtube.png";
import LogoCourtBlanc from "../assets/img/logo-court-blanc.png";
import FacebookBlanc from "../assets/img/icone-face-blanc.png";
import InstagramBlanc from "../assets/img/icone-insta-blanc.png";
import LinkedinBlanc from "../assets/img/icone-link-blanc.png";
import YoutubeBlanc from "../assets/img/icone-youtube-blanc.png";

interface Props {
  switchColor: boolean;
}

const FooterHome = ({ switchColor }: Props) => {
  return (
    <footer className="pb-4 pt-4 border-t w-10/12 m-auto mt-20 border-white border-solid">
      <div className="footer-flex">
        {switchColor ? (
          <img className="w-1/5" src={LogoCourtBlanc} />
        ) : (
          <img className="w-1/5" src={LogoCourt} />
        )}
        <div className="block-footer">
          <a href="@mail">hello@spot-on.studio</a>
          <p>Bordeaux - France</p>
        </div>
        {switchColor ? (
          <div className="flex my-4">
            <a href="mailto: ">
              <img src={FacebookBlanc} />
            </a>
            <a href="mailto: ">
              <img src={InstagramBlanc} />
            </a>
            <a href="mailto: ">
              <img src={LinkedinBlanc} />
            </a>
            <a href="mailto: ">
              <img src={YoutubeBlanc} />
            </a>
          </div>
        ) : (
          <div className="flex my-4">
            <a href="mailto: ">
              <img src={Facebook} />
            </a>
            <a href="mailto: ">
              <img src={Instagram} />
            </a>
            <a href="mailto: ">
              <img src={Linkedin} />
            </a>
            <a href="mailto: ">
              <img src={Youtube} />
            </a>
          </div>
        )}
      </div>
      <p className="text-right">
        © Spot On Studio 2021 - Tous droits réservés -{" "}
        <a href="#">Mentions Légales</a> - <a href="#">RGPD</a>
      </p>
    </footer>
  );
};

export default FooterHome;
