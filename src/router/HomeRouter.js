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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Login from '../pages/Home/Login'

export const Router = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/mn" element={<MenuEnterprise/>}>
                    <Route path="perfil" element={<Perfil/>}/>
                    <Route path="developers" element={<Developers/>}/>        
                    <Route path="notifications" element={<Notifications/>}/>        
                    <Route path="logout" element={<Logout/>}/>  
                </Route>
                <Route path="/developers" element={<MenuDeveloper />} >
                    <Route path="perfilDeveloper" element={<Perfildeveloper/> } />
                    <Route path="propuestasTrabajos" element={ <PuestosTrabajos /> } />
                </Route>
            </Routes>
        </BrowserRouter>
        </SkeletonTheme>
    )
}