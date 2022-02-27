import { useState } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/img/illustration_digitalisation.png";
import image2 from "../../assets/img/illustration_communaute.png";
import image3 from "../../assets/img/illustration_analyse.png";
import image4 from "../../assets/img/illustration_multiplateforme.png";
import logo from "../../assets/img/logo_temp.png";
import pictoOrga from "../../assets/img/picto_cours_en_ligne.png";
import pictoStream from "../../assets/img/picto_streaming.png";
import pictoVOD from "../../assets/img/picto_VOD.png";
import pictoAnalyse from "../../assets/img/picto_analyse.png";
import pictoSecurity from "../../assets/img/picto_sécurité.png";
import imageIllustration from "../../assets/img/illustration_BtoB.png";

import BlocHomePage from "../../components/BlocHomePage";
import FooterHomePageB2B from "../../components/FooterHomePageB2B";
import Register from "../../components/Register";
import CardPicto from "../../components/CardPicto";
import ModalFormulaire from "../../components/ModalFormulaire";
import ContentFormulaire from "../../components/ContentFormulaire";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVideo, setIsVideo] = useState<boolean>(false);

  return (
    <div className="contain-home">
      <section className="contain-scroll">
        <div className="background-cover  relative">
          <p className="banner-red text-xl py-2">
            <Link to="/">Let the word discover the experience !</Link>
          </p>
          <img src={logo} className="logo-homepage" alt="logo" />
          <img src={imageIllustration} className="w-3/4" alt="illustration" />

          <Register studio={false} />
        </div>
      </section>
      <section className="contain-scroll">
        <BlocHomePage
          titleBanner={"Lancez-vous dans la digitalisation"}
          textBloc={
            "Soyez partout tout le temps. En quelques clics, postez vos vidéos sur des templates dynamiques et intuitifs. Personnalisez-les aux couleurs de votre enetreprise et suscitez l'excitation de vos membres. Pas de codage requis"
          }
          image={image1}
          wayPicture={"right"}
          isVideo={true}
        />
        <BlocHomePage
          titleBanner={"Créez votre communauté"}
          textBloc={
            "Grâce aux dernières technologies utilisées par Spot-On, ajoutez de l'interaction dans vos séances, fidélisez vos clients en créant des séances privées, développez votre propre esprit communautaire."
          }
          image={image2}
          wayPicture={"left"}
        />
        <BlocHomePage
          titleBanner={"Analysez, améliorez, réussissez"}
          textBloc={
            "Avec nos outils d'analyse, améliorez vos offres et touchez des cibles plus larges et plus nombreuses. Elaborez votre stratégie, développez votre business et suivez votre succès en analysant vos données."
          }
          image={image3}
          wayPicture={"right"}
        />
        <BlocHomePage
          titleBanner={"Un accès Multi-plateformes"}
          textBloc={
            "Disponible sur toutes vos plateformes ! Ordinateur, tablette, téléphone, tv connectée ..."
          }
          image={image4}
          wayPicture={"left"}
        />
      </section>
      <section>
        <ContentFormulaire setIsOpen={setIsOpen} />
        <ModalFormulaire isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
      <section className="contain-scroll">
        <p className="banner-red text-xl py-2">Créer mon compte</p>
        <div className="background-cover contain-scroll ">
          <div className="flex items-center flex-col md:flex-wrap md:flex-row justify-around ">
            <CardPicto
              picto={pictoOrga}
              titleCard={"Organisez-vos cours en ligne"}
              bodyCard={
                "Gérez vos réservations. Effectuez des campagnes emailing. Personnalisez vos séances et plus encore"
              }
            />
            <CardPicto
              picto={pictoStream}
              titleCard={"Stream Live"}
              bodyCard={
                "Notifiez vos membres. Créez un comtpe à rebours. Faites interagir vos viewers"
              }
            />
            <CardPicto
              picto={pictoVOD}
              titleCard={"Video on demand"}
              bodyCard={
                "Ajoutez facilement du contenu vidéos. Organisez-le en catégories. Mettez en avant le contenu souhaité"
              }
            />
            <CardPicto
              picto={pictoAnalyse}
              titleCard={"Rapports/Analyse"}
              bodyCard={
                "Répertoriez vos vidéos les plus appréciées, les horaires les plus efficaces... . Analaysez votre clientèle(Genre, nationalité, langue parlée, fréquence de visionnage ..."
              }
            />
            <CardPicto
              picto={pictoSecurity}
              titleCard={"Sécurité"}
              bodyCard={"Optez pour des vidéos et des paiements sécurisés"}
            />
          </div>
          <div className="flex justify-center">
            <button type="button" className="button-general mt-4 mb-4 px-16">
              + d'infos
            </button>
          </div>
        </div>
      </section>
      <section>
        <FooterHomePageB2B />
      </section>
    </div>
  );
}
