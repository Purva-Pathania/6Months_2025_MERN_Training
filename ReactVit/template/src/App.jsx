
import './App.css'
import About from './Components/Developer/Pages/About'
import Faqs from './Components/Developer/Pages/Faqs'
import Blog from './Components/Developer/Pages/Blog'
import Four404 from './Components/Developer/Pages/Four404'
import Contact from './Components/Developer/Pages/Contact'
import Index from './Components/Developer/Pages/Index'
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Services from './Components/Developer/Pages/Services'
import Testimonial from './Components/Developer/Pages/Testimonial'
import Team from './Components/Developer/Pages/Team'
import Layout from './Components/Developer/Layouts/Layout'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Cindex from './Components/Client/Pages/Cindex'
import Logout from './Components/Authentication/Logout'
import Log from './Components/Authentication/Login/Log'
import Client from './Components/Admin copy/Pages/UserManagement/Client/Client'
import Dev from './Components/Admin copy/Pages/UserManagement/Developer/Dev'
import Project from './Components/Admin copy/Pages/ProjectManagement/Project'
import Bid from './Components/Admin copy/Pages/BiddingManagement/Bid'
import Add from './Components/Admin copy/Pages/Technology/Add'
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
          <Route path="/services" element={<Services/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/team" element={<Team/>}/>
      </Route>
      <Route path="/client/index" element={<Cindex/>}/>
      <Route path="/log" element={<Log/>}/>
      
      <Route path="/table" element={<Client/>}/>
      <Route path="/dev" element={<Dev/>}/>
      <Route path="/project1" element={<Project/>}/>
      <Route path="/bid" element={<Bid/>}/>
      <Route path="/add" element={<Add/>}/>
      
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App
