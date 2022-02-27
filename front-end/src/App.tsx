import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContextProvider from "./context/UserContextProvider";
import SocieteContextProvider from "./context/SocieteContextProvider";

import Home from "./pages/B2B/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeStudio from "./pages/studio/Home";
import Profil from "./pages/dashbord/Profil";
import ProfilUser from "./pages/dashbord/ProfilUser";
import Videos from "./pages/dashbord/Videos";
import MyVideos from "./pages/studio/MyVideos";
import Community from "./pages/studio/Community";
import HomeConfiguration from "./pages/studio/HomeConfiguration";
import Player from "./pages/studio/Player";
import CreateStudio from "./pages/studio/CreateStudio";
import SuperAdminBackOffice from "./pages/super-admin/SuperAdminBackOffice";
import LivePage from "./pages/LivePage";
import Categories from "./pages/dashbord/Categories";

import WithStudio from "./layouts/WithStudio";
import StudioLayout from "./layouts/StudioLayout";
import StudioBackOfficeLayout from "./layouts/StudioBackOfficeLayout";

import "./app.css";
import QuestionChoices from "./components/QuestionChoices";
import UsersAnswer from "./components/Survey/UsersAnswer";
import HomePage from "./pages/BtoC/HomePage";
import UserLayout from "./layouts/UserLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchStudio from "./components/SearchStudio";

function App() {
  return (
    <>
      <UserContextProvider>
        <SocieteContextProvider>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/studios" element={<Home />} />
              <Route path="/search-studio" element={<SearchStudio />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/questions" element={<QuestionChoices />} />

              <Route path="video/:id" element={<Player />} />
              <Route path="/new-studio" element={<CreateStudio />} />

              <Route path="/user/:username" element={<UserLayout />}>
                <Route index element={<ProfilUser />} />
                <Route
                  path="questionnaires"
                  element={<SuperAdminBackOffice />}
                />
                <Route path="reponses" element={<UsersAnswer />} />
              </Route>

              <Route path="/studios/:studioName" element={<WithStudio />}>
                <Route path="" element={<StudioLayout />}>
                  <Route index element={<HomeStudio />} />
                  <Route path="video" element={<MyVideos />} />
                  <Route path="community" element={<Community />} />
                  <Route path="livesession/:streamurl" element={<LivePage />} />
                </Route>

                <Route path="admin" element={<StudioBackOfficeLayout />}>
                  <Route index element={<Profil />} />
                  <Route path="profil" element={<Profil />} />
                  <Route path="interface" element={<HomeConfiguration />} />
                  <Route path="user" element={<ProfilUser />} />
                  <Route path="videos" element={<Videos />} />
                  <Route path="categories" element={<Categories />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </SocieteContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
