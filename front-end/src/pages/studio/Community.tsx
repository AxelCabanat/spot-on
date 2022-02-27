import Friend from "../../components/Friend";
import Badges from "../../components/Badges";
import SeancePlanified from "../../components/SeancePlanified";

const Community = () => {
  return (
    <>
      <h2>Ma communauté</h2>
      <div className="container_friends">
        {/*
         * boucle de friends à faire
         */}
        <Friend />
        <Friend />
        <Friend />
        <div className="add_new">
          Ajouter un nouvel ami{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
      <h2>Mon tableau de bord</h2>
      <table className="flex justify-center">
        <tbody className="">
          <tr>
            <th className="header_array">Classements</th>
            <td className="header_array">1</td>
            <td className="header_array">2</td>
            <td className="header_array">3</td>
          </tr>
          <tr>
            <th className="header_array_col">Epanouissement</th>
            <td className="border">Ami 1 : 90%</td>
            <td className="border">Ami 2 : 75%</td>
            <td className="border">Ami 3 : 35 %</td>
          </tr>
          <tr>
            <th className="header_array_col">Temps passé</th>
            <td className="border">Ami 1 : 2h00</td>
            <td className="border">Vous : 1h30</td>
            <td className="border">Ami 2 : 1h03</td>
          </tr>
          <tr>
            <th className="header_array_col">Nombre de séances suivies</th>
            <td className="border">Vous : 5 séances</td>
            <td className="border">Ami 1 : 3 séances</td>
            <td className="border">Ami 3 : 1 séance</td>
          </tr>
          <tr>
            <th className="header_array_col">Nombre de catégories essayées</th>
            <td className="border">Ami1 : 15 Catégories</td>
            <td className="border">Vous : 5 catégories</td>
            <td className="border">Ami2 : 3 catégories</td>
          </tr>
        </tbody>
      </table>
      <h2>Mes badges</h2>
      <div className="container_badges">
        {/*
         * boucle de Badges à faire
         */}
        <Badges />
        <Badges />
        <Badges />
      </div>
      <h2>Mon planning des séances avec ma communauté</h2>
      <div className="container_seance_planified">
        <SeancePlanified />
        <SeancePlanified />
        <SeancePlanified />
        <div className="add_new">
          Ajouter une nouvelle séance
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Community;
