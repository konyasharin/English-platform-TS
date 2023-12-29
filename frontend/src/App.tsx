import './App.css';
import {Route, Routes} from "react-router-dom";
import ToMain from "./components/ToMain/ToMain";
import Footer from "./components/Footer/Footer";
import OpenAuth from "./Auth/OpenAuth";
import MainPage from "./pages/MainPage/MainPage";
import TrainingsPage from "./pages/TrainingPages/TrainingsPage";
import FoldersPage from "./pages/FoldersPage/FoldersPage";
import ModulesPage from "./pages/ModulesPage/ModulesPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import "./components/Header/Header.module.css"
import FormsStore from "./store/FormsStore";
import initializeForms from "./initializeForms";
import CreateModule from "./FoldersAndModules/CreateModule/CreateModule";
import ChooseModule from "./Trainings/ChooseModule";
import AvatarImg from "./assets/avatar.png"
import TrainingLearnPage from "./pages/TrainingPages/TrainingLearnPage/TrainingLearnPage";
import Header from "./components/Header/Header";

initializeForms(FormsStore.getInstance()) // Нужно инициализировать не внутри компонента

/**
 * Главный компонент приложения
 */
function App() {
    return (
        <div className="App">
            <Header/>
            <ToMain/>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/trainings" element={<TrainingsPage/>}/>
                    <Route path="/folders" element={<FoldersPage/>}/>
                    <Route path="/modules" element={<ModulesPage/>}/>
                    <Route path="/profile" element={<ProfilePage img={AvatarImg}/>}/>
                    <Route path="/createModule" element={<CreateModule/>}/>
                    <Route path="/trainings/learn/chooseModule" element={<ChooseModule/>}/>
                    <Route path="/trainings/learn/training" element={<TrainingLearnPage/>}/>
                </Routes>
            </main>
            <Footer/>
            <OpenAuth/>
        </div>
    )
}

export default App;
