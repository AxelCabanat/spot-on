import BckTop from "../assets/img/top-bck.jpg";
import BckTopBlanc from "../assets/img/top-bck-blanc.jpg";
import { useState } from "react";

import ContentHome from "../components/ContentHome";
import ContentInfo from "../components/ContentInfo";
import ContentFormulaire from "../components/ContentFormulaire";
import Footer from "../components/FooterHome";
import ContentHomeResponsive from "../components/ContentHomeResponsive";
import ModalFormulaire from "../components/ModalFormulaire";

const HomeLandingOld = () => {
  const [switchColor, setSwitchColor] = useState<boolean>(false);

  function switchColors() {
    return setSwitchColor(!switchColor);
  }
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={switchColor ? "switch-white" : ""}>
      <header>
        {switchColor ? (
          <img className="w-full" src={BckTopBlanc} />
        ) : (
          <img className="w-full" src={BckTop} />
        )}
      </header>

      <section>
        <ContentHome />
      </section>

      <section>
        <ContentInfo switchColor={switchColor} />
      </section>

      <section>
        <ContentFormulaire switchColor={switchColor} setIsOpen={setIsOpen} />
      </section>

      <section>
        <ContentHomeResponsive switchColor={switchColor} />
      </section>

      <section>
        <ModalFormulaire isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
      <Footer switchColor={switchColor} />
      <div className="fixedSwitch">
        <input onClick={() => switchColors()} type="checkbox" id="toggle" />
        <label className="labelToggle" htmlFor="toggle" />
      </div>
    </div>
  );
};

export default HomeLanding;
