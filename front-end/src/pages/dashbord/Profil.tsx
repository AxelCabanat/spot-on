import { useOutletContext } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Label from "../../components/Label";
import FormRow from "../../components/FormRow";

import { fetchUpdateStudio } from "../../services/Api";
import { Studio, StudioOutletContext } from "../../interfaces";
import { notifSuccess, notifFail } from "../../services/notifications";

const Profil = () => {
  const { studio, setStudio }: StudioOutletContext = useOutletContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Studio>({ defaultValues: studio });

  const onSubmit: SubmitHandler<Studio> = async (data) => {
    try {
      await fetchUpdateStudio(data);
      setStudio(data);
      notifSuccess("Studio modifié");
    } catch (e: any) {
      console.log(e.reponse.data);
      notifSuccess("Une erreur est survenue");
    }
  };

  return (
    <form
      className="form-profil sm:rounded-md sm:overflow-hidden px-4 py-5 sm:p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" {...register("id", { required: true })} />

      <FormRow>
        <Label htmlFor="name">Nom du studio</Label>
        <input
          {...register("name", {
            required: true,
            minLength: {
              value: 3,
              message: "minimum 3 caractères",
            },
            maxLength: {
              value: 50,
              message: "maximum 50 caractères",
            },
          })}
          id="name"
          className="studio-inputs w-1/4"
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p className="text-red-800">{message}</p>}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="logo">Photo de profil</Label>

        <div className="mt-1 flex items-center">
          {studio.logo ? (
            <img
              className="logo-round m-0"
              src={studio.logo}
              alt="Studio logo"
            />
          ) : (
            <img
              className="rounded-full w-16 mr-2"
              src="https://vectorified.com/images/man-icon-png-10.png"
              alt="avatar"
            />
          )}

          <input
            {...register("logo", { required: false })}
            placeholder="http://"
            type="text"
            id="logo"
            className="studio-inputs w-1/2 ml-2"
          />
        </div>
      </FormRow>

      <FormRow>
        <Label htmlFor="background">Couleur de fond 1</Label>

        <input
          {...register("background", { required: true })}
          type="color"
          id="background"
          className="studio-inputs studio-size-color"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="background2">Couleur de fond 2</Label>

        <input
          {...register("background2", { required: true })}
          type="color"
          id="background2"
          className="studio-inputs studio-size-color"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="background_secondary">Couleur secondaire</Label>

        <input
          {...register("background_secondary", { required: true })}
          type="color"
          id="background_secondary"
          className="studio-inputs studio-size-color"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="color_primary">Couleur du texte principal</Label>

        <input
          {...register("color_primary", { required: true })}
          type="color"
          id="color_primary"
          className="studio-inputs studio-size-color"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="color_secondary">Couleur du texte secondaire</Label>

        <input
          {...register("color_secondary", { required: true })}
          type="color"
          id="color_secondary"
          className="studio-inputs studio-size-color"
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="typo">Police principale</Label>

        <select
          {...register("typo", { required: true })}
          id="typo"
          className="mt-1 focus:ring-indigo-500 text-gray-700 focus:border-indigo-500 block w-1/3 shadow-sm sm:text-sm border-gray-300 bg-gray-100 rounded-md"
        >
          <option value="'Montserrat', sans-serif">Monserrat</option>
          <option value="brandon-grotesque-black">Brandon Grotesque</option>
          <option value="typo3">Typo 3</option>
        </select>
      </FormRow>

      <div className="px-4 py-3 text-right sm:px-6">
        <button type="submit" className="button-general">
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default Profil;
