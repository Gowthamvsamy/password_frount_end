import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import EmailVerification from './pages/emailVerification';
import ChangePassword from './pages/changePassword';
import Dashboard from './pages/dashboard';
import Conformotp from './pages/conformOTP';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/emailVerification" element={<EmailVerification />} />
        <Route exact path="/changePassword" element={<ChangePassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/conformotp" element={<Conformotp />} />
        <Route path="*" element={<div>File not found</div>} />
      </Routes>
    </>
  )
}

export default App
