import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developers from "../components/CompanyPage/Developers/Developers";
import MenuEnterprise from "../components/CompanyPage/MenuEnterprise/MenuEnterprise";
import Perfil from "../pages/Perfil/Perfil";
import Notifications from '../components/CompanyPage/Notifications/Notifications'
import Logout from '../components/CompanyPage/Logout/Logout'

export const Router2 = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/mn/perfil" element={<Perfil/>}/>
                    <Route path="/mn/developers" element={<Developers/>}/>        
                    <Route path="/mn/notifications" element={<Notifications/>}/>        
                    <Route path="/mn/logout" element={<Logout/>}/>        
            </Routes>
        </BrowserRouter>
    )
}