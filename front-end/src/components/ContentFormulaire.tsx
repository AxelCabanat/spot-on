import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { fetchUserSurvey } from "../services/Api";
import SocieteContext from "../context/SocieteContext";

import FormulaireImageHome from "../assets/img/contact.jpg";
import FormulaireImageHomeBlanc from "../assets/img/illustration_formulaire.png";

type NewUserSurvey = {
  societe: string;
  firstName: string;
  lastName: string;
  email: string;
};

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const ContentFormulaire = ({ setIsOpen }: Props) => {
  const { setSociete } = useContext(SocieteContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserSurvey>();

  const postUser = async (
    societe: string,
    firstName: string,
    lastName: string,
    email: string
  ) => {
    await fetchUserSurvey(societe, firstName, lastName, email);
  };

  const onSubmit: SubmitHandler<NewUserSurvey> = (data) => {
    try {
      postUser(data.societe, data.firstName, data.lastName, data.email);
      setIsOpen(true);
      setSociete(data.societe);
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  return (
    <div className="block-formulaire py-4">
      <img className="img-formulaire" src={FormulaireImageHomeBlanc} />

      <div className="block-text-formulaire">
        <p className="text-formulaire uppercase banner-red">
          SPOT-ON Studio pour vous
        </p>
        <p className="text-formulaire-2">
          Moins d’une minute pour aider Spot-on Studio à mieux répondre à vos
          attentes !
        </p>
        <form className="form-formulaire" onSubmit={handleSubmit(onSubmit)}>
          <label className="label-formulaire" htmlFor="societe" />

          <input
            className="input-register bg-white"
            placeholder="Société"
            id="societe"
            type="text"
            {...register("societe", { required: true })}
          />
          <div className="div-formulaire-interne">
            <div className="mr-10 w-full sm:w-1/2">
              <label className=" label-formulaire" htmlFor="lastName" />

              <input
                className="block w-full input-register bg-white"
                placeholder="Nom"
                id="lastName"
                type="text"
                {...register("lastName", { required: true })}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="label-formulaire" htmlFor="firstName" />
              <input
                className="block w-full input-register bg-white"
                placeholder="Prénom"
                id="firstName"
                type="text"
                {...register("firstName", { required: true })}
              />
            </div>
          </div>
          <label className="label-formulaire" htmlFor="email" />
          <input
            className="block input-register bg-white"
            placeholder="Email"
            id="email"
            type="email"
            {...register("email", { required: true })}
          />
          <div className="flex w-full justify-center">
            <button className="button-general w-1/2" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentFormulaire;
