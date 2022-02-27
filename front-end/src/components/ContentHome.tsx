import Analyse from "../assets/img/analyse.jpg";
import Communaute from "../assets/img/communaute.jpg";
import Digital from "../assets/img/digital.jpg";

const ContentHome = () => {
  return (
    <>
      <ul>
        <li className="li-box">
          <div className="block-image">
            <img src={Digital} />
            <p className="text-image">Digital</p>
          </div>
          <div className="block-center">
            <h2 className="h2-home">Lancez vous dans la digitalisation</h2>
            <p>
              Soyez partout, tout le temps.
              <br />
              En quelques clics, postez vos vidéos sur des templates éclatants
              et intuitifs. Personnalisez aux couleurs de votre enseigne et
              suscitez l'excitation de vos membres. Pas de codage requis.
            </p>
          </div>
        </li>
        <li className="li-box">
          <div className="block-center">
            <h2 className="h2-home">Créez votre communauté</h2>
            <p>
              Grâce aux dernières technologies utilisées par Spot-On, ajoutez de
              l'interaction dans vos séances, fidélisez vos clients en créant
              des séances privées, développez votre propre esprit communautaire.
            </p>
          </div>
          <div className="block-image">
            <img src={Communaute} />
            <p className="text-image">Communauté</p>
          </div>
        </li>
        <li className="li-box">
          <div className="block-image">
            <img src={Analyse} />
            <p className="text-image">Analyse</p>
          </div>
          <div className="block-center">
            <h2 className="h2-home">Améliorez, Grandissez, Réussissez</h2>
            <p>
              Avec nos outils d'analyse, améliorez vos offres et touchez des
              cibles plus larges et plus nombreuses.
              <br />
              Élaborez votre stratégie, développez votre business et suivez
              votre succès en analysant vos données.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ContentHome;
