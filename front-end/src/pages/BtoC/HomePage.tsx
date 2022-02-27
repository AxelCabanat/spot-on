import { Link } from "react-router-dom";

import image1 from "../../assets/img/illustration_meilleurs.png";
import image2 from "../../assets/img/illustration_achat.png";
import image3 from "../../assets/img/illustration_communaute.png";
import image4 from "../../assets/img/illustration_multiplateforme.png";
import image5 from "../../assets/img/illustration_help.png";
import logo from "../../assets/img/logo_temp.png";

import BlocHomePage from "../../components/BlocHomePage";
import FooterHomePageB2C from "../../components/FooterHomePageB2C";
import BlocCategoryHomePage from "../../components/BlocCategoryHomePage";
import Register from "../../components/Register";
import { Carousel } from "3d-react-carousal";

export default function HomePage() {
  let slides = [
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0yT5DsGZErc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>,
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/bqHNs-m3fBs"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>,
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/70dsmyclR3o"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>,
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Xu-FLmk7t5Y"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>,
  ];

  return (
    <div className="contain-home">
      <section className="contain-scroll">
        <div className="background-cover contain-scroll relative">
          <Link to="/studios">
            <p className="banner-red text-xl py-2 cursor-pointer">
              Vous êtes un pro, un studio, un coach .... C'est par ici !
            </p>
          </Link>
          <img src={logo} className="logo-homepage" alt="logo" />
          <BlocCategoryHomePage />
          <div className="carousel">
            <Carousel slides={slides} interval={1000} />
          </div>
          <Register studio={true} />
        </div>
      </section>
      <section className="contain-scroll">
        <p className="banner-red">Plus de vidéos</p>
        <BlocHomePage
          titleBanner={"Les Meilleurs Pros chez toi"}
          textBloc={
            "Aujourd'hui depuis votre salon, demain à l'hôtel ou chez votre copine Marie... Spot on vous suit par- tout et est accessible depuis tous vos écrans          Télé ordinateur , smartphone ou tablette aucune excuse pour rater la séance. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sec diam nonummy nion eu smod tincidunt ut lapreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lebortis nisl ut aliquip ex ea commodo consequat. Dus autern vel eut iriure delon in hendre rit in vulnutate velit esse molestie consequat, vel illum delore eu feugiat nulla facitisis at vero eros et accumsan et luste edio dignissim qui blandit praesent lup"
          }
          image={image1}
          wayPicture={"right"}
        />
        <BlocHomePage
          titleBanner={"Achète les crédits dont tu as besoin"}
          textBloc={
            "Pas d'abonnement ! Pas d'engagement ! Pas de bague au doigt ! Tu n'achète que ce dont tu as besoin ... mais on est surs que tu seras vite accro à ta séance de live, au cours de yoga et à celui d'aquarelle. 1 crédit/ 5 crédits / 20 crédits / 100 crédits à toi de voir"
          }
          image={image2}
          wayPicture={"left"}
        />
        <BlocHomePage
          titleBanner={"Retrouve tes amis"}
          textBloc={
            "Chacun chez soi mais tous ensemble ! A plusieurs c'est quand même plus sympa et ça permet de se motiver... Stop aux tricheurs ! Quoi ? Marie, tu as zappé les 32 pompes ? Créé ton espace dédié, connecte tes amis et faites en même temps le même cours ! Sport, Pilate, Aquarelle, quoi de mieux que de progresser ensemble ?"
          }
          image={image3}
          wayPicture={"right"}
        />
      </section>
      <section className="contain-scroll bg-[#e6e6e6]">
        <p className="banner-red">Créer mon compte</p>
        <div className="flex md:mx-20 md:flex-row flex-col sm:mx-0">
          <BlocHomePage
            titleBanner={"Un accès Multi-plateformes"}
            textBloc={
              "Aujourd'hui depuis ton salon, demain à l'hôtel ou chez ta copine Marie... Spot-On te suis partout et est accessible depuis tous les écrans, quelque soit l'heure du jour ou de la nuit. Télé, ordinateur, smartphone ou tablette, les meilleurs pofessionnels seront toujours la pour t'épauler dans tes challenges."
            }
            image={image4}
            wayPicture={"down"}
          />
          <BlocHomePage
            titleBanner={"Besoin d'aide"}
            textBloc={
              "Tu souhaites parler au Coach ? Tu as un problème technique, des questions sur ton compte ? Pas de soucis, nous sommes la pour te répondre"
            }
            image={image5}
            wayPicture={"down"}
          />
        </div>
      </section>
      <section>
        <FooterHomePageB2C />
      </section>
    </div>
  );
}
