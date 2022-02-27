import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

import Login from "../pages/Login";
import RegisterUser from "../pages/Register";
import CreateStudio from "../pages/studio/CreateStudio";
import connexion from "../assets/img/picto_connexion.png";

interface Props {
  studio: boolean;
}
export default function Register({ studio }: Props) {
  const [isLoggin, setIsLoggin] = useState<boolean>(true);
  const [isHide, setIsHide] = useState<boolean>(true);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function toggleLogin() {
    setIsLoggin(!isLoggin);
  }

  function toggleOpenConnexion() {
    if (user) {
      if (user && user.role === 1 && user.admin && user.admin.length != 0) {
        return navigate(`/studios/${user.admin[0].name}/admin/interface`);
      }
      if (user && user.role === 2) {
        return navigate(`/search-studio`);
      }
      if (user && user.role === 0) {
        return navigate(`/user/${user.username}`);
      }
    }
    setIsHide(!isHide);
  }

  return (
    <>
      {studio ? (
        <div className={isHide ? "blog-register-hide" : "bloc-register-view"}>
          <div className="flex">
            <img
              src={connexion}
              className="connect"
              onClick={() => toggleOpenConnexion()}
            />
            <div className="block-connexion">
              <div className="flex flex-row pl-6 justify-around">
                <div
                  className={isLoggin ? "clic-login true" : "clic-login"}
                  onClick={() => toggleLogin()}
                >
                  Login
                </div>
                <div
                  className={isLoggin ? "clic-login" : "clic-login true"}
                  onClick={() => toggleLogin()}
                >
                  Créer un compte
                </div>
              </div>

              <div className=" flex justify-center items-center">
                {isLoggin ? <Login /> : <RegisterUser />}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={
              isHide ? "blog-register-hide" : "bloc-create-studio-view"
            }
          >
            <div className="flex">
              <img
                src={connexion}
                className="connect"
                onClick={() => toggleOpenConnexion()}
              />

              <div className="block-connexion">
                <div className="flex flex-row pl-6 justify-around">
                  <div
                    className={isLoggin ? "clic-login true" : "clic-login"}
                    onClick={() => toggleLogin()}
                  >
                    Login
                  </div>
                  <div
                    className={isLoggin ? "clic-login" : "clic-login true"}
                    onClick={() => toggleLogin()}
                  >
                    Créer un studio
                  </div>
                </div>

                <div className=" flex justify-center items-center">
                  {isLoggin ? <Login /> : <CreateStudio />}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
