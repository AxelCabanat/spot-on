import { Studio } from "../interfaces";

import personne1 from "../assets/img/personnage/personne1.jpeg";
import personne2 from "../assets/img/personnage/personne2.jpeg";
import personne3 from "../assets/img/personnage/personne3.jpeg";
import personne4 from "../assets/img/personnage/personne4.jpeg";
import personne5 from "../assets/img/personnage/personne5.jpeg";
import personne6 from "../assets/img/personnage/personne6.jpeg";
import personne7 from "../assets/img/personnage/personne7.jpeg";
import personne8 from "../assets/img/personnage/personne8.jpeg";
import personne9 from "../assets/img/personnage/personne9.jpeg";
import personne10 from "../assets/img/personnage/personne10.jpeg";

interface Props {
  title?: string;
  newStudio: Studio;
}

const BlocHomeCommu = ({ title, newStudio }: Props) => {
  return (
    <section
      className="my-2 lg:my-20 flex flex-col items-center"
      style={{
        background: `${newStudio.background}`,
      }}
    >
      <h2
        style={{
          background: newStudio.background_secondary || "#FFBE00",
          color: newStudio.color_primary || "#000000",
        }}
        className={
          "home-config-normal text-3xl color-primary text-center uppercase py-2"
        }
      >
        {title}
      </h2>
      <div className="container_commu px-10">
        <img src={personne1} alt="membre" />
        <img src={personne2} alt="membre" />
        <img src={personne3} alt="membre" />
        <img src={personne4} alt="membre" />
        <img src={personne5} alt="membre" />
        <img src={personne6} alt="membre" />
        <img src={personne7} alt="membre" />
        <img src={personne8} alt="membre" />
        <img src={personne9} alt="membre" />
        <img src={personne10} alt="membre" />
      </div>
    </section>
  );
};

export default BlocHomeCommu;
