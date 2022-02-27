import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useContext } from "react";

import Label from "../../components/Label";
import FormRow from "../../components/FormRow";
import { fetchUpdateUser } from "../../services/Api";
import UserContext from "../../context/UserContext";
import { User } from "../../interfaces";
import { assetAvatar } from "../../services/Cdn";
import { notifSuccess, notifFail } from '../../services/notifications';


const ProfilUser = () => {
  const { user, setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ defaultValues: user });

  async function onSubmit(data: any) {
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("avatar", data.avatar[0]);
      formData.append("firstname", data.firstname);
      formData.append("lastname", data.lastname);
      formData.append("adresse", data.adresse);
      formData.append("postal_code", data.postal_code);
      formData.append("city", data.city);
      formData.append("country", data.country);
      formData.append("phone", data.phone);
      formData.append("id", user.id);

      const updateUser = await fetchUpdateUser(formData, user.id);
      setUser(updateUser)
      notifSuccess("Modification sauvegardée")
    } catch (e: any) {
      notifFail(`Modification échouée`)
      console.log(e);
    }
  };

  return (
    <form
      className=" sm:rounded-md sm:overflow-hidden px-4 py-5 sm:p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between w-4/5 items-end">
        <input
          {...register("avatarhttp", { required: false })}
          placeholder="http://"
          id="urlPicture"
          className="studio-inputs w-1/2 h-10"
        />
        <div className="mt-1 flex rounded-lg items-center shadow-lg">
          <label className="profilImg" htmlFor="profilImg">
            <span className="inline-block rounded-lg overflow-hidden bg-gray-100">
              {user && user.avatar ? (
                <>
                  <img
                    className="max-w-none h-full cursor-pointer"
                    src={assetAvatar(user.avatar)}
                  />
                </>
              ) : (
                <>
                  <svg
                    className="h-full w-32 text-gray-300 "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </>
              )}
            </span>
          </label>
          <input
            {...register("avatar", { required: false })}
            id="profilImg"
            type="file"
          ></input>
        </div>
      </div>
      <FormRow>
        <Label htmlFor="username">{""}</Label>
        <input
          {...register("username", {
            required: true,
            minLength: {
              value: 3,
              message: "minimum 3 caractères",
            },
            maxLength: {
              value: 20,
              message: "maximum 20 caractères",
            },
          })}
          placeholder="Nom d'utilisateur"
          id="username"
          className="studio-inputs w-4/5"
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ message }) => <p className="text-red-800">{message}</p>}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="email">{""}</Label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "email invalide",
            },
          })}
          placeholder="Email"
          id="email"
          type="email"
          className="studio-inputs w-4/5"
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p className="text-red-800">{message}</p>}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="firstname">{""}</Label>
        <input
          {...register("firstname", { required: false })}
          placeholder="Prénom"
          id="firstname"
          className="studio-inputs w-4/5"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="lastname">{""}</Label>
        <input
          {...register("lastname", { required: false })}
          placeholder="Nom"
          id="lastname"
          className="studio-inputs w-4/5"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="adresse">{""}</Label>
        <input
          {...register("adresse", { required: false })}
          placeholder="Adresse"
          id="adresse"
          className="studio-inputs w-4/5"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="postal_code">{""}</Label>
        <input
          {...register("postal_code", {
            required: false,
          })}
          placeholder="Code Postal"
          id="postal_code"
          type="string"
          className="studio-inputs w-4/5"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="city">{""}</Label>
        <input
          {...register("city", { required: false })}
          placeholder="Ville"
          id="city"
          className="studio-inputs w-4/5"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="country">{""}</Label>
        <input
          {...register("country", { required: false })}
          placeholder="Pays"
          id="country"
          className="studio-inputs w-4/5"
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="phone">{""}</Label>
        <input
          {...register("phone", {
            required: false,
            pattern: {
              value: /[0-9]/,
              message: "Numero invalide",
            },
          })}
          placeholder="Téléphone +33"
          id="phone"
          type="tel"
          className="studio-inputs w-4/5"
        />
        <ErrorMessage
          errors={errors}
          name="phone"
          render={({ message }) => <p className="text-red-800">{message}</p>}
        />
      </FormRow>

      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-4/5"
        >
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default ProfilUser;
