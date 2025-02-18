/*Create a product card that displays product details like name, price, and description. Pass these details as props from a parent component. Call it for 3 different product. Use destructuring method and external css for this*/ 
import { Fragment } from "react"
import "./ProductCard.css"
export default function ProductCard({productCard}){
    return(
        <>
            {productCard.map((el,index)=>{
                return(
                    <>
                        <div className="product card" key={index}>
                            <h1 className="proch">Product Details</h1>
                            <h3>Name: {el.pname}</h3>
                            <h3>Price: {el.pprice}</h3>
                            <h3>Description: {el.desc}</h3>
                        </div>
                        <br/>
                    </>
                )
            })}
        </>
    )
}