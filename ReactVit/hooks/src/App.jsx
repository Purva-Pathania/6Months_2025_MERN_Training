
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from './Components/Counter'
import Array from './Components/Array'
import Email from './Components/Email'
import RegisterPage from './Components/RegisterPage'
import ToDoList from './Components/ToDoList'
import Nav from './Components/Nav&Tabs/Nav'
import PDFComponent from './Components/ReactPDF/PDFComponent'
import data from './Components/ReactPDF/data'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/nav" element={<Nav/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/array" element={<Array/>}/>
      <Route path="/email" element={<Email/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/todolist" element={<ToDoList/>}/>
      <Route path="/pdf" element={<PDFComponent data={data}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
