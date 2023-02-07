import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developers from "../components/CompanyPage/Developers/Developers";
import MenuEnterprise from "../components/CompanyPage/MenuEnterprise/MenuEnterprise";
import Perfil from "../pages/Perfil/Perfil";
import Notifications from '../components/CompanyPage/Notifications/Notifications'
import Logout from '../components/CompanyPage/Logout/Logout'
import Home from "../pages/Home/Home";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/mn" element={<MenuEnterprise/>}>
                    <Route path="perfil" element={<Perfil/>}/>
                    <Route path="developers" element={<Developers/>}/>        
                    <Route path="notifications" element={<Notifications/>}/>        
                    <Route path="logout" element={<Logout/>}/>  
                </Route>
            </Routes>
        </BrowserRouter>
    )
}