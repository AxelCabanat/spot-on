import { useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

import { video, StudioOutletContext, Category } from "../interfaces";
import { assetMiniature } from "../services/Cdn";
import Label from "./Label";
import FormRow from "./FormRow";
import { fetchUpdateVideo, deleteVideo } from "../services/Api";
import { notifSuccess, notifFail } from '../services/notifications';

interface Props {
  video: video;
  categories: Category[];
  onSaved: () => void;
}

const Manager = ({ video, categories, onSaved }: Props) => {
  const { studio }: StudioOutletContext = useOutletContext();
  const studioId = studio.id.toString();
  const videoId = video.id.toString();
  const [isShow, setIsShow] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(video.title);
  const [category, setCategory] = useState<number | undefined>(video.category_id);

  const isOpen = () => {
    setIsShow(true);
  };

  const isClose = () => {
    setIsShow(false);
  };

  const isDelete = () => {
    deleteVideo(video.id);
    onSaved();
    notifSuccess("Suppression effectuée")
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("category_id", data.category);
      formData.append("miniature", data.miniature[0]);
      formData.append("id_studio", studioId);
      formData.append("id", videoId);

      await fetchUpdateVideo(formData);
      onSaved();
      notifSuccess(`Modification sauvegardée`)
    } catch (e: any) {
      notifFail(`Modification échouée`)
      console.log(e);
    }
  }

  return (
    <div
      className={`lg:h-40 flex m-4 transition-all ease-in-out delay-300  ${
        isShow ? "w-full overflow-hidden" : "w-1/6 order-1"
      }`}
    >
      <div className="w-60 overflow-hidden">
        <img
          className={`w-full h-full`}
          onClick={isOpen}
          src={assetMiniature(video.url_miniature)}
        />
      </div>

      <div
        className={`overflow-hidden flex items-center justify-center  transition-all ease-in-out delay-300 ${
          isShow ? "mx-4" : "w-0"
        }`}
      >
        <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap">
            <FormRow>
              <Label htmlFor="title">Titre</Label>
              <input
                {...register("title", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "minimum 3 caractères",
                  },
                })}
                id="title"
                className="studio-inputs mx-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <ErrorMessage
                errors={errors}
                name="title"
                render={({ message }) => (
                  <p className="text-red-800">{message}</p>
                )}
              />
            </FormRow>
            <FormRow>
              <Label htmlFor="category">Categories</Label>

              <select
                {...register("category", { required: true })}
                id="category"
                value={category}
                onChange={(e: any) => setCategory(e.target.value)}
                className="rounded-full mx-4 mt-1 focus:ring-indigo-500 text-gray-700 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 bg-gray-100"
              >
                {categories.map((category, id) => {
                  return (
                    <option key={id} value={category.id}>
                      {category.label}
                    </option>
                  );
                })}
              </select>
            </FormRow>

            <FormRow>
              <Label htmlFor="miniature">Miniature</Label>
              <input
                {...register("miniature")}
                type="file"
                id="miniature"
                className="studio-inputs  mx-4"
              />
            </FormRow>
          </div>
          <div className="flex flex-col">
            <button
              type="button"
              className={`m-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
              onClick={isClose}
            >
              Fermer
            </button>
            <button
              type="submit"
              className={` m-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
            >
              sauvegarder
            </button>
            <button
              type="button"
              onClick={isDelete}
              className={` m-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
            >
              supprimer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Manager;
