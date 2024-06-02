import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Login from './components/login/Login'
import Signup from './components/sign up/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/profile/Profile'
import List from './components/listpage/List'
import Donate from './components/donate/Donate'

const App = () => {
  return (
    <Router>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/donate' element={<Donate/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App