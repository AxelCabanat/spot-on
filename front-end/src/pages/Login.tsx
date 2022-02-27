import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { fetchLogin } from "../services/Api";
import UserContext from "../context/UserContext";
import { notifSuccess, notifFail } from "../services/notifications";

type UserLogin = {
  username: string;
  clearPassword: string;
};

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    try {
      const user = await fetchLogin(data.username, data.clearPassword);
      setUser(user);
      if (user && user.role === 1 && user.admin && user.admin.length != 0) {
        return navigate(`/studios/${user.admin[0].name}/admin/interface`);
      }
      if (user && user.role === 2) {
        return navigate(`/search-studio`);
      }
      if (user && user.role === 0) {
        return navigate(`/user/${user.username}`);
      }
      notifSuccess(`Welcome back ${data.username}`);
    } catch (e: any) {
      notifFail(e.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-black">
      <label htmlFor="username" />
      <input
        {...register("username", { required: true })}
        placeholder="Username"
        type="text"
        id="username"
        className="input-register"
      />
      {errors.username && <div className="error">enter your username</div>}
      <label htmlFor="clearPassword" />
      <input
        {...register("clearPassword", { required: true })}
        placeholder="Mot de passe"
        type="password"
        id="clearPassword"
        className="input-register"
      />
      {errors.clearPassword && <div className="error">enter your password</div>}
      <button type="submit" className="button-general w-full font-extrabold">
        Login
      </button>
      <p className="text-gray-900 pt-4 text-center">Mot de passe oublié ?</p>
    </form>
  );
};

export default Login;
