import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { Studio, StudioOutletContext } from "../../interfaces";
import { fetchUpdateStudioAll } from "../../services/Api";
import ColorsStudio from "../../components/ColorsStudio";
import { notifSuccess, notifFail } from "../../services/notifications";

import HomeComponent from "../../components/HomeComponent";

const HomeConfiguration = () => {
  const { studio, setStudio, isText, setIsText }: StudioOutletContext =
    useOutletContext();

  const [newStudio, setNewStudio] = useState(studio);

  // TODO: Fix colors inputs to reset after cancel

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Studio>({ defaultValues: studio });

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  useEffect(() => {
    const subscription = watch((studio: any) => setNewStudio(studio));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<Studio> = async (data) => {
    try {
      await fetchUpdateStudioAll(data);
      setStudio(data);
      notifSuccess("Vos modifications ont bien été enregistrées !");
    } catch (e) {
      notifFail(e.reponse.data);
    }
  };

  function previsualize() {
    setIsText(!isText);
  }

  useEffect(() => {
    previsualize();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="studioHome mt-6"
      id="backgroundId"
      style={{ background: newStudio.background }}
    >
      <input type="hidden" {...register("id", { required: true })} />

      <ColorsStudio register={register} newStudio={newStudio} />
      <HomeComponent
        newStudio={newStudio}
        register={register}
        isInterface={true}
      />

      <div className="lg:px-4 py-3 flex justify-between lg:inline-block text-right sm:px-6">
        <button
          type="button"
          className="button-general mr-3"
          onClick={() => setNewStudio(studio)}
        >
          Annuler
        </button>

        <button
          type="button"
          className="button-general mr-3"
          onClick={() => previsualize()}
        >
          {isText ? "Prévisualiser" : "Modifier"}
        </button>

        <button type="submit" className="button-general">
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default HomeConfiguration;
