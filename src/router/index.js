import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developers from "../components/Developers/Developers";
import MenuEnterprise from '../components/MenuEnterprise/MenuEnterprise'
import Perfil from "../pages/Perfil/Perfil";
import Notifications from '../components/Notifications/Notifications'
import Logout from '../components/Logout/Logout'

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