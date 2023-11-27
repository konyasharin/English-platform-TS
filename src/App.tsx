import React, {useState} from 'react';
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

function App() {
  const [formStatus, setFormStatus] = useState("choose")
  return (
      <BrowserRouter>
        <div className="App">
          <section className="header container">
            <Refer text={"Тренировки"} img={"header/trainings.png"} alt={"trainings"} url={"trainings"}></Refer>
            <Refer text={"Папки"} img={"header/folders.png"} alt={"folders"} url={"folders"}></Refer>
            <Refer text={"Модули"} img={"header/modules.png"} alt={"modules"} url={"modules"}></Refer>
            <Refer text={"Профиль"} img={"header/profile.png"} alt={"profile"} url={"profile"}></Refer>
          </section>
          <ToMain/>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/trainings" element={<Trainings />}/>
            <Route path="/folders" element={<Folders/>}/>
            <Route path="/modules" element={<Modules/>}/>
            <Route path="/profile" element={<Profile img={"/avatar.png"}/>}/>
          </Routes>
          <Footer/>
          <OpenAuth />
        </div>
      </BrowserRouter>
  )
}

export default App;
