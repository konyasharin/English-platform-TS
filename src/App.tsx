// Главный компонент приложения

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Refer from "./Header/Refer";
import ToMain from "./ToMain/ToMain";
import Footer from "./Footer/Footer";
import OpenAuth from "./Auth/OpenAuth";
import Main from "./Main/Main";
import Trainings from "./Trainings/Trainings";
import Folders from "./FoldersAndModules/Folders";
import Modules from "./FoldersAndModules/Modules";
import Profile from "./Profile/Profile";
import "./Header/Header.css"
import FormsStore from "./store/FormsStore";
import initializeForms from "./initializeForms";
import CreateModule from "./FoldersAndModules/CreateModule/CreateModule";
import ChooseModule from "./Trainings/ChooseModule";
import TrainingsImg from "./assets/header/trainings.png"
import FoldersImg from "./assets/header/folders.png"
import ModulesImg from "./assets/header/modules.png"
import ProfileImg from "./assets/header/profile.png"
import AvatarImg from "./assets/avatar.png"


initializeForms(FormsStore.getInstance()) // Нужно инициализировать не внутри компонента
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <section className="header container">
            <Refer text={"Тренировки"} img={TrainingsImg} alt={"trainings"} url={"trainings"}></Refer>
            <Refer text={"Папки"} img={FoldersImg} alt={"folders"} url={"folders"}></Refer>
            <Refer text={"Модули"} img={ModulesImg} alt={"modules"} url={"modules"}></Refer>
            <Refer text={"Профиль"} img={ProfileImg} alt={"profile"} url={"profile"}></Refer>
          </section>
          <ToMain/>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/trainings" element={<Trainings />}/>
            <Route path="/folders" element={<Folders />}/>
            <Route path="/modules" element={<Modules />}/>
            <Route path="/profile" element={<Profile img={AvatarImg}/>}/>
            <Route path="/createModule" element={<CreateModule />}/>
            <Route path="/trainings/learn/chooseModule" element={<ChooseModule />}/>
          </Routes>
          <Footer/>
          <OpenAuth />
        </div>
      </BrowserRouter>
  )
}

export default App;
