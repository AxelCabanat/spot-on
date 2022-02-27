import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchRecontactedUser } from "../services/Api";

type UserSurvey = {
  firstname: string;
  lastname: string;
  mail: string;
};

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  answer: boolean;
  societe: string;
}

const LastQuestionModal = ({ isOpen, answer, societe }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSurvey>();

  const recontact = async (societe : string) => {
    await fetchRecontactedUser(societe)
  };

  return (
    <div
      className={
        isOpen
          ? "block bg-[#392DD9] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-50 w-1/2 h-auto rounded m-auto p-10 text-center text-xl;"
          : "hidden"
      }
    >
      {answer ? (
        <>
          <h2 className="text-3xl mb-4">Merci c’est TOP !</h2>
          <Link to="/" onClick={() => recontact(societe)}>
            <button className="modalButton mt-6 p-2">Retour Accueil</button>
          </Link>
        </>
      ) : (
        <>
          <h2 className="text-3xl mb-4">ok merci !</h2>
          <h3 className="text-2xl">
            On espère rester en contact. Merci de nous avoir aidé jusqu’ici,
            c’est top !
          </h3>
          <Link to="/">
            <button className="modalButton mt-6 p-2">Retour Accueil</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default LastQuestionModal;
