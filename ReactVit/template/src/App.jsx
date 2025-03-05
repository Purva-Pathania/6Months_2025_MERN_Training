
import './App.css'
import About from './Components/Admin/Pages/About'
import Faqs from './Components/Admin/Pages/Faqs'
import Blog from './Components/Admin/Pages/Blog'
import Four404 from './Components/Admin/Pages/Four404'
import Contact from './Components/Admin/Pages/Contact'
import Index from './Components/Admin/Pages/Index'
import Findex from './Components/FreeLancer/Pages/Findex'
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Project from './Components/Admin/Pages/Project'
import Services from './Components/Admin/Pages/Services'
import Testimonial from './Components/Admin/Pages/Testimonial'
import Team from './Components/Admin/Pages/Team'
import Layout from './Components/Admin/Layouts/Layout'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Cindex from './Components/Client/Pages/Cindex'
import Logout from './Components/Authentication/Logout'
import Log from './Components/Authentication/Login/Log'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Index/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/404" element={<Four404/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/team" element={<Team/>}/>
      </Route>
      <Route path="/freelancer/index" element={<Findex/>}/>
      <Route path="/client/index" element={<Cindex/>}/>
      <Route path="/log" element={<Log/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App
