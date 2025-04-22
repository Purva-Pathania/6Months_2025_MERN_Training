
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
import History from './Components/Developer/Pages/History/History'
import Project from './Components/Developer/Pages/Project'
import Rating from './Components/Developer/Pages/Rating'

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
          <Route path="/services" element={<Services/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/project" element={<Project/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App
