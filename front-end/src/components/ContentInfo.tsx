import Check from "../assets/img/icone-check.png";
import Vod from "../assets/img/icone-play.png";
import Playing from "../assets/img/icone-playing.png";
import Planning from "../assets/img/icone-planning.png";
import Security from "../assets/img/icone-security.png";
import CheckBlanc from "../assets/img/icone-check-blanc.png";
import VodBlanc from "../assets/img/icone-play-blanc.png";
import PlayingBlanc from "../assets/img/icone-playing-blanc.png";
import PlanningBlanc from "../assets/img/icone-planning-blanc.png";
import SecurityBlanc from "../assets/img/icone-security-blanc.png";

interface Props {
  switchColor: boolean;
}

const ContentInfo = ({ switchColor }: Props) => {
  return (
    <>
      <h2 className="info-home">
        Digitalisez votre offre studio dès maintenant !
      </h2>
      <ul className="ul-info-home">
        <li className="li-info-home-base">
          {switchColor ? <img src={CheckBlanc} /> : <img src={Check} />}
          <div className="div-block-info">
            <p className="title-info-home">Organisez vos cours en ligne :</p>
            <ul>
              <li>
                <p className="text-info-block">
                  <span>○</span> Gérez vos réservations
                </p>
              </li>
              <li>
                <p className="text-info-block">
                  <span>○</span> Effectuez des campagnes emailing
                </p>
              </li>
              <li>
                <p className="text-info-block">
                  <span>○</span> Personnalisez vos séances
                </p>
              </li>
              <li>
                <p className="text-info-block">
                  <span>○</span> Et plus encore ...
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="li-info-home-base">
          {switchColor ? <img src={VodBlanc} /> : <img src={Vod} />}
          <div className="div-block-info">
            <p className="title-info-home">Video On Demand :</p>
            <ul>
              <li>
                <p className="text-info-block">
                  <span>○</span> Ajoutez facilement du contenu vidéo
                </p>
              </li>
              <li>
                <p className="text-info-block">
                  <span>○</span> Organisez-les en catégories
                </p>
              </li>
              <li>
                <p className="text-info-block">
                  <span>○</span> Mettre en avant le contenu souhaité
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="li-info-home-base">
          {switchColor ? <img src={PlayingBlanc} /> : <img src={Playing} />}
          <div className="div-block-info">
            <p className="title-info-home">Steam Live :</p>
            <ul>
              <li>
                <p className="text-info-block">
                  <span>○</span> Notifiez vos membres,
                </p>
              </li>
              <li>
                <p className="text-info-block">
                  <span>○</span> Créez l'excitation avec un compte à rebours
                </p>
              </li>
              <li>
                <p className="text-info-block">
                  <span>○</span> Faites interagir vos viewers.
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="li-info-home-base">
          {switchColor ? <img src={PlanningBlanc} /> : <img src={Planning} />}
          <div className="div-block-info">
            <p className="title-info-home">Rapports/Analyses :</p>
            <ul>
              <li>
                <p className="text-info-block">
                  <span>○</span> Répertoriez vos classes les plus apprécies, les
                  horaires les plus efficaces...
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="li-info-home-base">
          {switchColor ? <img src={SecurityBlanc} /> : <img src={Security} />}
          <div className="div-block-info">
            <p className="title-info-home">Sécurité :</p>
            <ul>
              <li>
                <p className="text-info-block">
                  <span>○</span> Optez pour des vidéos et des paiements
                  sécurisés
                </p>
              </li>
              <li>
                <p className="text-info-block">
                  <span>○</span> Analysez votre clientèle (Genre, nationalité,
                  langue parléen fréquence de visionnage...)
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ContentInfo;
