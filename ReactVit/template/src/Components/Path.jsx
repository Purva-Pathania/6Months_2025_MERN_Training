import { Link } from "react-router-dom";

export default function Path(){
    return(
        <>
        1.<Link to={"/home"}>Home</Link><br/>
        2.<Link to={"/about"}>About</Link><br/>
        3.<Link to={"/contact"}>Contact</Link>
        </>
    )
}