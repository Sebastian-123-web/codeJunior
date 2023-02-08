import './App.css';
import { Router } from './router/HomeRouter';
import { Router2 } from './router/CompanyRouterUser';

function App() {
  return (
    <div className="company-user">
      <Router2/>
    </div>
  );
}

export default App;
