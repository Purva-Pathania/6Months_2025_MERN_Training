/*Create div with property background color red in shape of circle using all method of css*/ 
import "./DivWithCssProperties.css"
export default function DivWithCssProperties(){
    return(
        <div>
            <div style={{ height:"200px", width:"200px", backgroundColor:"red", border:"solid red", borderRadius:"50%", margin:"auto"}}></div><br/>
            <div className="main"></div><br/>
            <div className="main2"></div>
        </div>

    )
}