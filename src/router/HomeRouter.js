import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developers from "../components/CompanyPage/DevelopersSection/Developers/Developers";
import MenuEnterprise from "../components/CompanyPage/MenuEnterprise/MenuEnterprise";
import Perfil from "../pages/Perfil/Perfil";
import Notifications from '../components/CompanyPage/Notifications/Notifications'
import Logout from '../components/CompanyPage/Logout/Logout'
import Home from "../pages/Home/Home";
import MenuDeveloper from '../components/DevelopersPage/MenuDeveloper/MenuDeveloper'
import Perfildeveloper from "../pages/Developers/Perfil/Perfil";
import PuestosTrabajos from "../pages/Developers/PuertosTrabajos/PuestosTrabajo";
import Login from '../pages/Home/Login';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { HeaderHome } from "../components/Home/HeaderHome/HeaderHome";
import HomePage from "../pages/Home/HomePage/HomePage";
import DevForm from "../pages/Registros/regdev/DevForm";
import EmpForm from "../pages/Registros/regemp/EmpForm";

export const Router = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="formDev" element={<DevForm/>}/>
                    <Route path="formEmp" element={<EmpForm/>}/>
                </Route>
                <Route path="company/:mn" element={<MenuEnterprise/>}>
                    <Route index element={<Perfil/>}/>
                    <Route path="developers" element={<Developers/>}/>        
                    <Route path="notifications" element={<Notifications/>}/>        
                    <Route path="logout" element={<Logout/>}/>  
                </Route>
                <Route path="/developers/:dv" element={<MenuDeveloper />} >
                    <Route index element={<Perfildeveloper/> } />
                    <Route path="propuestasTrabajos" element={ <PuestosTrabajos /> } />
                </Route>
            </Routes>
        </BrowserRouter>
        </SkeletonTheme>
    )
}