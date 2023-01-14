import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SS9 from './pages/SS9';
import OHUseState from './pages/OHUseState';
import OHUseContext from './pages/OHUseContext';

function App() {
  return (
    <div className="main-app">
      {/* <SS9></SS9> */}
      {/* <OHUseState></OHUseState> */}
      <OHUseContext></OHUseContext>
    </div>
  );
}

export default App;
