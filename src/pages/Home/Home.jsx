import {HeaderHome} from '../../components/Home/HeaderHome/HeaderHome'
import { MainHome } from '../../components/Home/MainHome/MainHome';
import { FooterHome } from '../../components/Home/FooterHome/FooterHome';
import { Outlet } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className="HomePage">
      <section className='headerHome'>
        <HeaderHome />
      </section>
      <section className='outletHome'>
        <Outlet/>
      </section>
    </div>
  );
}

export default Home;