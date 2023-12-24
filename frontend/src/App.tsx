// Главный компонент приложения

import './App.css';
import {Route, Routes} from "react-router-dom";
import ToMain from "./ToMain/ToMain";
import Footer from "./components/Footer/Footer";
import OpenAuth from "./Auth/OpenAuth";
import MainPage from "./pages/MainPage/MainPage";
import Trainings from "./Trainings/Trainings";
import Folders from "./FoldersAndModules/Folders";
import Modules from "./FoldersAndModules/Modules";
import Profile from "./Profile/Profile";
import "./components/Header/Header.module.css"
import FormsStore from "./store/FormsStore";
import initializeForms from "./initializeForms";
import CreateModule from "./FoldersAndModules/CreateModule/CreateModule";
import ChooseModule from "./Trainings/ChooseModule";
import AvatarImg from "./assets/avatar.png"
import TrainingPage from "./Trainings/TrainingPage";
import Header from "./components/Header/Header";


initializeForms(FormsStore.getInstance()) // Нужно инициализировать не внутри компонента
function App() {
    return (
        <div className="App">
            <Header/>
            <ToMain/>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/trainings" element={<Trainings/>}/>
                    <Route path="/folders" element={<Folders/>}/>
                    <Route path="/modules" element={<Modules/>}/>
                    <Route path="/profile" element={<Profile img={AvatarImg}/>}/>
                    <Route path="/createModule" element={<CreateModule/>}/>
                    <Route path="/trainings/learn/chooseModule" element={<ChooseModule/>}/>
                    <Route path="/trainings/learn/training" element={<TrainingPage/>}/>
                </Routes>
            </main>
            <Footer/>
            <OpenAuth/>
        </div>
    )
}

export default App;
