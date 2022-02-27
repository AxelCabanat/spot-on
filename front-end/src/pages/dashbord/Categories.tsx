import { useOutletContext } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useState } from "react";

import { Category, StudioOutletContext } from "../../interfaces";
import { fetchCategory } from "../../services/Api";
import Label from "../../components/Label";
import FormRow from "../../components/FormRow";
import { notifSuccess, notifFail } from '../../services/notifications';


const Categories = () => {
  const { studio, setStudio }: StudioOutletContext = useOutletContext();
  const id_studio = studio.id;
  const [category, setCategory] = useState<Category>();

  const { register, handleSubmit } = useForm<Category>({
    defaultValues: category,
  });

  const onSubmit: SubmitHandler<Category> = async (data) => {
    data = { ...data, id_studio };
    try {
      await fetchCategory(data);
      notifSuccess("Catégorie ajoutée")
    } catch (e: any) {
      notifFail("Envoi échoué")
      return e.reponse.data;
    }
  };

  return (
    <div>
      <form
        className=" sm:rounded-md sm:overflow-hidden px-4 py-5 sm:p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow>
          <Label htmlFor="label">Titre</Label>
          <input
            {...register("label", {
              required: true,
              minLength: {
                value: 3,
                message: "minimum 3 caractères",
              },
            })}
            id="label"
            className="studio-inputs w-1/4"
          />
        </FormRow>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-4/5"
        >
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default Categories;
