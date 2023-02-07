import {HeaderHome} from '../../components/Home/HeaderHome/HeaderHome'
import { MainHome } from '../../components/Home/MainHome/MainHome';
import { FooterHome } from '../../components/Home/FooterHome/FooterHome';

function Home() {
  return (
    <div className="App">
      <HeaderHome />
      <MainHome />
      <FooterHome />
    </div>
  );
}

export default Home;
