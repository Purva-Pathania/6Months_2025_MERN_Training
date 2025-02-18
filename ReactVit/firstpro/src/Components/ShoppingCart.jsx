/*Create a shopping cart in form of table that displays details of a shopping cart item, including name, price, and quantity. Pass these details as props from a parent component. Show two cart items.*/

export default function ShoppingCart(props){
    return(
        <>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th style={{padding:"20px"}}>Name</th>
                    <th style={{padding:"20px"}}>Price</th>
                    <th style={{padding:"20px"}}>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {props.shoppingCart.map((el,index)=>(
                <tr key={index}>
                    <td style={{padding:"10px"}}>{el.sname}</td>
                    <td style={{padding:"10px"}}>{el.price}</td>
                    <td style={{padding:"10px"}}>{el.quantity}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}