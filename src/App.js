import { HashRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar';
import './style/app.scss';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <AllRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
