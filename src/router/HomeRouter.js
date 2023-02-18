import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Developers from "../components/CompanyPage/DevelopersSection/Developers/Developers";
import MenuEnterprise from "../components/CompanyPage/MenuEnterprise/MenuEnterprise";
import PerfilCompany from "../pages/Business/Perfil/Perfil";
import Notifications from '../components/CompanyPage/Notifications/Notifications'
import Home from "../pages/Home/Home";
import MenuDeveloper from '../components/DevelopersPage/MenuDeveloper/MenuDeveloper'
import Perfildeveloper from "../pages/Developers/Perfil/Perfil";
import PuestosTrabajos from "../pages/Developers/PuertosTrabajos/PuestosTrabajo";
import Login from '../pages/Home/Login';
import { SkeletonTheme } from 'react-loading-skeleton'
import HomePage from "../pages/Home/HomePage/HomePage";
import DevForm from "../pages/Registros/regdev/DevForm";
import EmpForm from "../pages/Registros/regemp/EmpForm";
import PrivateRoute from "./PrivateRoute";
import NotificationBusiness from "../components/CompanyPage/Notifications/NotificationBusiness/NotificationBusiness";
import { Fernando, Jorge, Sebastian } from "../components/CompanyPage/Notifications/NotificationBusiness/MessageBusiness";
import NotificationDeveloper from "../components/CompanyPage/Notifications/NotificationDeveloper/NotificationDeveloper";
import { Gerardo } from "../components/CompanyPage/Notifications/NotificationDeveloper/MessageDeveloper";

export const Router = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="/registro/desarrollador" element={<DevForm/>}/>
                    <Route path="/registro/empresa" element={<EmpForm/>}/>
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="business/:mn" element={<MenuEnterprise/>}>
                        <Route index element={<PerfilCompany/>}/>
                        <Route path="developers" element={<Developers/>}/>        
                        <Route path="notifications" element={<Notifications Section={<NotificationBusiness/>}/>}>
                            <Route index element={<Jorge/>}/>    
                            <Route path="Fernando" element={<Fernando/>}/>    
                            <Route path="Sebastian" element={<Sebastian/>}/>    
                        </Route>        
                    </Route>
                    <Route path="/developers/:dv" element={<MenuDeveloper />} >
                        <Route index element={<Perfildeveloper/> } />
                        <Route path="propuestasTrabajos" element={ <PuestosTrabajos /> } />
                        <Route path="notifications" element={<Notifications Section={<NotificationDeveloper/>} />}>
                            <Route index element={<Gerardo/>}/>    
                        </Route>        
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </SkeletonTheme>
    )
}