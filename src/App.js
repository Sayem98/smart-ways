import './App.css';
import Navbar from './components/Navbar';
import TermsConditions from './page/TermsConditions';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPage from './page/mainpage';
function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/termcondition" element={<TermsConditions/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
