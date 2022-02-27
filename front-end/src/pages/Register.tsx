import { useForm, SubmitHandler } from 'react-hook-form';

import { fetchRegister } from '../services/Api';
import { notifSuccess, notifFail } from '../services/notifications';

type NewUser = {
	username: string;
	email: string;
	password: string;
};

const Register = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<NewUser>();

  const onSubmit: SubmitHandler<NewUser> = async (data) => {
    try {
      await fetchRegister(data.username, data.email, data.password);
	  notifSuccess(`Welcome into the spot ${data.username} !`);
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
        placeholder="Mot de passe"
        type="password"
        id="password"
        className="input-register"
      />
      {errors.password && <div className="error">enter your password</div>}
      <button className="button-general w-full" type="submit">
        Créer mon compte
      </button>
    </form>
  );
};

export default Register;
