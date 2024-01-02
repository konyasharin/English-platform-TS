import './App.css';
import {Route, Routes} from "react-router-dom";
import ToMain from "./components/ToMain/ToMain";
import Footer from "./components/Footer/Footer";
import OpenAuth from "./components/OpenAuth/OpenAuth";
import MainPage from "./pages/MainPage/MainPage";
import TrainingsPage from "./pages/trainingPages/TrainingsPage/TrainingsPage";
import FoldersPage from "./pages/FoldersPage/FoldersPage";
import ModulesPage from "./pages/ModulesPage/ModulesPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import "./components/Header/Header.module.css"
import FormsStore from "./store/FormsStore";
import initializeForms from "./initializeForms";
import CreateModulePage from "./pages/CreateModulePage/CreateModulePage";
import ChooseModulePage from "./pages/ChooseModulePage/ChooseModulePage";
import AvatarImg from "./assets/avatar.png"
import TrainingLearnPage from "./pages/trainingPages/TrainingLearnPage/TrainingLearnPage";
import Header from "./components/Header/Header";
import CreateFolderPage from "./pages/CreateFolderPage/CreateFolderPage";

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
                    <Route path="/createModule" element={<CreateModulePage/>}/>
                    <Route path="/trainings/learn/chooseModule" element={<ChooseModulePage/>}/>
                    <Route path="/trainings/learn/training" element={<TrainingLearnPage/>}/>
                    <Route path="/createFolder" element={<CreateFolderPage/>}/>
                </Routes>
            </main>
            <Footer/>
            <OpenAuth/>
        </div>
    )
}

export default App;
