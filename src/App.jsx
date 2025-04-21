import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/landingPage';
import SignIn from '../src/pages/signIn';
import EmailOtp from '../src/pages/emailOtp';
import Login from '../src/pages/login';
import Analyze from '../src/pages/analyze';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/EmailOtp" element={<EmailOtp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Analyze" element={<Analyze />} />
        
      </Routes>
    </Router>
  );
}

export default App;
