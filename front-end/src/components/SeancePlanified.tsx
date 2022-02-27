const SeancePlanified = () => {
  return (
    <>
      <table className="seance_planified">
        <tbody className="">
          <tr>
            <th className="header_array">Séance</th>
            <td className="header_array">15/12/2021 à 20h00</td>
          </tr>
          <tr>
            <th className="header_array_col">Type</th>
            <td className="border">Live</td>
          </tr>
          <tr>
            <th className="header_array_col">Catégorie</th>
            <td className="border">RPM</td>
          </tr>
          <tr>
            <th className="header_array_col">Durée</th>
            <td className="border">50 min</td>
          </tr>

          <tr>
            <th className="header_array_col">Instructeur</th>
            <td className="border">Rodrigo</td>
          </tr>
          <tr>
            <th className="header_array_col">Amis inscrits</th>
            <td className="border">Sarah</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default SeancePlanified;
