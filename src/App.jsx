import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import OtpVerify from './pages/OtpVerify'
import NewPassword from './pages/NewPassword'
import ForgetPassword from './pages/ForgetPassword'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/verify-otp' element={<OtpVerify />} />
      <Route path='/create-password' element={<NewPassword />} />
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
