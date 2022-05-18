import { HashRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './style/app.scss';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <AllRoutes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
