import {HeaderHome} from '../../components/Home/HeaderHome/HeaderHome'
import { MainHome } from '../../components/Home/MainHome/MainHome';
import { FooterHome } from '../../components/Home/FooterHome/FooterHome';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <HeaderHome />
      <Outlet/>
    </div>
  );
}

export default Home;