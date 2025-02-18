import { Link } from "react-router-dom";
export default function Path(){
    return(
        <>
        1.<Link to={"/Employee"}>Employee</Link><br/>
        2.<Link to={"/Student"}>Student</Link><br/>
        3.<Link to={"/ShoppingCart"}>ShoppingCart</Link><br/>
        4.<Link to={"/ProductCard"}>ProductCard</Link><br/>
        5.<Link to={"/ContactCard"}>ContactCard</Link><br/>
        6.<Link to={"/Weather"}>Weather</Link><br/>
        7.<Link to={"/DivWithCssProperties"}>DivWithCssProperties</Link><br/>
        8.<Link to={"StudentsMap"}>StudentsMap</Link><br/>
        9.<Link to={"EmployeeMap"}>EmployeeMap</Link><br/>
        10.<Link to={"ZomatoData"}>ZomatoData</Link>
        </>
    )
}