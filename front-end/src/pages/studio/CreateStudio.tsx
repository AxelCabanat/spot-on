import { useForm, SubmitHandler } from "react-hook-form";

import { fetchAdminRegister, fetchNewStudio } from "../../services/Api";
import { notifSuccess, notifFail } from "../../services/notifications";

type NewStudio = {
  username: string;
  email: string;
  password: string;
  name: string;
};

const CreateStudio = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewStudio>();

  const onSubmit: SubmitHandler<NewStudio> = async (data) => {
    try {
      await fetchAdminRegister(data.username, data.email, data.password);
      await fetchNewStudio(data.name, data.username);
      notifSuccess(
        `Bienvenue ${data.username}, ton studio ${data.name} est prêt !`
      );
    } catch (e: any) {
      notifFail(e.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username" />
      <input
        {...register("username", { required: true })}
        placeholder="Username"
        type="text"
        id="username"
        className="input-register"
      />
      {errors.username && <div className="error">enter your username</div>}
      <label htmlFor="email" />
      <input
        {...register("email", { required: true })}
        placeholder="Email"
        type="email"
        id="email"
        className="input-register"
      />
      {errors.email && <div className="error">enter your email</div>}
      <label htmlFor="password" />
      <input
        {...register("password", { required: true })}
        placeholder="Password"
        type="password"
        id="password"
        className="input-register"
      />
      {errors.password && <div className="error">enter your password</div>}
      <label htmlFor="Studio_name" />
      <input
        {...register("name", { required: true })}
        placeholder="Studio name"
        type="text"
        id="Studio_name"
        className="input-register"
      />
      {errors.name && <div className="error">enter a Studio name</div>}
      <button type="submit" className="button-general w-full font-black">
        Créer mon studio
      </button>
    </form>
  );
};

export default CreateStudio;
