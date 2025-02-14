/*Create a product card that displays product details like name, price, and description. Pass these details as props from a parent component. Call it for 3 different product. Use destructuring method and external css for this*/ 
import "./ProductCard.css"
export default function ProductCard({pname , pprice , desc}){
    return(
        <div className="product">
            <h1 className="proch">Product Details</h1>
            <h3>Name: {pname}</h3>
            <h3>Price: {pprice}</h3>
            <h3>Description: {desc}</h3>
        </div>
    )
}