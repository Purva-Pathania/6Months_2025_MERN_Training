
import './App.css'
import About from './Components/About'
import Faqs from './Components/Admin/Pages/Faqs'
import Four404 from './Components/Admin/Pages/Four404'
import Contact from './Components/Contact'
import Index from './Components/Index'
import{BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/faqs" element={<Faqs/>}/>
      <Route path="/404" element={<Four404/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
