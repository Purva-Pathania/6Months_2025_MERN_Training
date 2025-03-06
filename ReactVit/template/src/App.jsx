
import './App.css'
import About from './Components/Developer/Pages/About'
import Faqs from './Components/Developer/Pages/Faqs'
import Blog from './Components/Developer/Pages/Blog'
import Four404 from './Components/Developer/Pages/Four404'
import Contact from './Components/Developer/Pages/Contact'
import Index from './Components/Developer/Pages/Index'
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Project from './Components/Developer/Pages/Project'
import Services from './Components/Developer/Pages/Services'
import Testimonial from './Components/Developer/Pages/Testimonial'
import Team from './Components/Developer/Pages/Team'
import Layout from './Components/Developer/Layouts/Layout'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Cindex from './Components/Client/Pages/Cindex'
import Logout from './Components/Authentication/Logout'
import Log from './Components/Authentication/Login/Log'
import TableComponent from './Components/Admin/Pages/TableComponent'

function App() {
  const sampleData = [
    { city: "Lyon", banner: "SUPER", area: "CENTRE-EST", type: "Franchise", state: "OPEN", avgBasket: 31.53 },
    { city: "Paris", banner: "SUPER", area: "REGION PARISIENNE", type: "Franchise", state: "OPEN", avgBasket: 27.32 },
    { city: "La Gorgue", banner: "HYPER", area: "NORD", type: "Franchise", state: "CLOSED", avgBasket: 0.0 },
    { city: "Béziers", banner: "SUPER", area: "SUD EST", type: "Franchise", state: "OPEN", avgBasket: 31.53 },
    { city: "Pauillac", banner: "HYPER", area: "SUD OUEST", type: "Non franchise", state: "OPEN", avgBasket: 24.72 },
  ];
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
      <Route path="/client/index" element={<Cindex/>}/>
      <Route path="/log" element={<Log/>}/>
      <Route path="/table" element={<TableComponent data={sampleData} />}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App
