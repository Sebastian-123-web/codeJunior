import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developers from "../components/CompanyPage/Developers/Developers";
import MenuEnterprise from '../components/MenuEnterprise/MenuEnterprise'
import Perfil from "../pages/Perfil/Perfil";
import Notifications from '../components/CompanyPage/Notifications/Notifications'
import Logout from '../components/CompanyPage/Logout/Logout'

export const Router = () => {
    return (
        <BrowserRouter className='rts'>
            <MenuEnterprise/>
            <Routes>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/developers" element={<Developers/>}/>        
                <Route path="/notifications" element={<Notifications/>}/>        
                <Route path="/logout" element={<Logout/>}/>        
            </Routes>
        </BrowserRouter>
    )
}