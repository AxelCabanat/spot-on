import Responsive from "../assets/img/responsive-img.jpg";
import ResponsiveBlanc from "../assets/img/responsive-img-blanc.jpg";
interface Props {
  switchColor: boolean;
}

const ContentHomeResponsive = ({ switchColor }: Props) => {
  return (
    <>
      <h2 className="info-home">Disponible sur toutes vos plateformes ! PC, tablette, téléphone, tv connectée...</h2>
      {switchColor ?(<img src={ResponsiveBlanc}/>):(<img src={Responsive}/>)}
    </>
  );
};

export default ContentHomeResponsive;
