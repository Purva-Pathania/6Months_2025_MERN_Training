
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Path from './Components/Path'
import Employee from './Components/Employee'
import Student from './Components/Student'
import ShoppingCart from './Components/ShoppingCart'
import ProductCard from './Components/ProductCard'
import ContactCard from './Components/ContactCard'
import Weather from './Components/Weather'
import DivWithCssProperties from './Components/DivWithCssProperties'
import StudentsMap from './Components/StudentsMap'
import EmployeeMap from './Components/EmployeeMap'
import ZomatoData from './Components/ZomatoData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  let shoppingCart = [{ sname:'Jewellery', price:'10000', quantity:'2' },
    {sname:'Clothes', price:'5000', quantity:'5'}
  ];
  let productCard = [{pname:"Television", pprice:"10K", desc:"It's a device that displays moving images and sound."},
    {pname:"Luxury Items", pprice:"100K", desc:"Expensive Things such as jewellery etc."},
    {pname:"Shopping Products", pprice:"50K" ,desc:"Purchasing goods and services from a retailer."}
  ];
  let contactCard = [{name:"Raman", phn:"7468065447", email:"raman@gmail.com"},
    {name:"Riya", phn:"9878065898", email:"riya@gmail.com"},
    {name:"Harman", phn:"9687658879", email:"harman@gmail.com"},
    {name:"Preeti", phn:"7507775322", email:"preeti@gmail.com"}
  ];
  let weather = [{ city:"Jalandhar", temp:"12°C", hum:"38%", wc:"Partly cloudy"},
    {city:"Chandigarh", temp:"11°C", hum:"31%", wc:"Sunny"},
    {city:"Amritsar", temp:"13°C", hum:"23%", wc:"Partly cloudy"}
  ]
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Path/>}/>
            <Route path="/Employee" element={<Employee/>}/>
            <Route path="/Student" element={<Student/>}/>
            <Route path="/ShoppingCart" element={<ShoppingCart shoppingCart={shoppingCart}/>} />
            <Route path="/ProductCard" element={<ProductCard productCard={productCard}/>} />
            <Route path="/ContactCard" element={<ContactCard contactCard={contactCard}/>}/>
            <Route path="/Weather" element={<Weather weather={weather}/>}/>
            <Route path="/DivWithCssProperties" element={<DivWithCssProperties/>}/>
            <Route path="/StudentsMap" element={<StudentsMap/>}/>
            <Route path="/EmployeeMap" element={<EmployeeMap/>}/>
            <Route path="/ZomatoData" element={<ZomatoData/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
