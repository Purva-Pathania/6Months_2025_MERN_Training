/*Create a ContactCard component that displays a person's contact information, including name, phone number, and email. Pass these details as props from a parent component and store 4 users details, use inline css to style the card*/ 

export default function ContactCard({name , phn , email}){
    return(
        <div style={{height:"200px", width:"500px", marginLeft:"100px", color:"black", backgroundColor:"darkorange", borderStyle: "solid", borderRadius:"30px"}}>
            <h2><u>{name} Contact Information</u></h2>
            <div><h3>{phn}</h3></div>
            <div><h3>{email}</h3></div>
        </div>
    )
}