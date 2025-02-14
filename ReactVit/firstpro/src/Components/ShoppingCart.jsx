/*Create a shopping cart in form of table that displays details of a shopping cart item, including name, price, and quantity. Pass these details as props from a parent component. Show two cart items.*/

export default function ShoppingCart(props){
    return(
        <div style={{marginLeft:"200px"}}>
        <table border={"1px"} cellSpacing={"0px"}>
            <tbody>
                <tr>
                    <th style={{padding:"20px"}}>Name</th>
                    <th style={{padding:"20px"}}>Price</th>
                    <th style={{padding:"20px"}}>Quantity</th>
                </tr>
                <tr>
                    <td style={{padding:"10px"}}>{props.name}</td>
                    <td style={{padding:"10px"}}>{props.price}</td>
                    <td style={{padding:"10px"}}>{props.quantity}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}