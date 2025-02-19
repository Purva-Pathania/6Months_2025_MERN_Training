
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Path from './Components/Path'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Path/>}/>
      <Route path={"/home"} element={<Home/>}/>
      <Route path={"/about"} element={<About/>}/>
      <Route path={"/contact"} element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
