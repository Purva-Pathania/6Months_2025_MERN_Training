
import './App.css'
import Employee from './Components/Employee'
import Student from './Components/Student'
import ShoppingCart from './Components/ShoppingCart'
import ProductCard from './Components/ProductCard'
import ContactCard from './Components/ContactCard'
import Weather from './Components/Weather'
import DivWithCssProperties from './Components/DivWithCssProperties'
function App() {
  return (
    <div>
      <Employee/>
      <Employee/>
      <Employee/>
      <Student/>
      <Student/><br/>
      <ShoppingCart name="Jewellery" price="10000" quantity="2"/><br/>
      <ShoppingCart name="Clothes" price="5000" quantity="5"/>
      <ProductCard  pname="Television" pprice="10K" desc="It's a device that displays moving images and sound."/>
      <ProductCard  pname="Luxury Items" pprice="100K" desc="Expensive Things such as jewellery etc."/>
      <ProductCard  pname="Shopping Products" pprice="50K" desc="Purchasing goods and services from a retailer."/><br/>
      <ContactCard name="Raman" phn="7468065447" email="raman@gmail.com"/><br/>
      <ContactCard name="Riya" phn="9878065898" email="riya@gmail.com"/><br/>
      <ContactCard name="Harman" phn="9687658879" email="harman@gmail.com"/><br/>
      <ContactCard name="Preeti" phn="7507775322" email="preeti@gmail.com"/>
      <Weather city="Jalandhar" temp="12°C" hum="38%" wc="Partly cloudy"/>
      <Weather city="Chandigarh" temp="11°C" hum="31%" wc="Sunny"/>
      <Weather city="Amritsar" temp="13°C" hum="23%" wc="Partly cloudy"/>
      <DivWithCssProperties/>
    </div>
  )
}
export default App
