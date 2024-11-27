import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUS/ContactUs';
import LoginForm from './Components/Login/LoginForm';
import StateSelect from './Components/StateSelect/StateSelect';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';




function App() {

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/form' element={<StateSelect/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/signUp' element={<RegistrationForm/>} />
          <Route path='/aboutUs' element={<AboutUs/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      </div>
  )
}

export default App
