/*Create an array of students and print each name using map */
import { Fragment } from "react"

export default function StudentsMap(){
    let students = ["Aryan", "Shaya", "Rishita", "Jahan", "Priya"]
    return(
        <>
        {students.map((student,index)=>{
            return(
                <Fragment key={index}>
                    <h4>{student}</h4>
                </Fragment>
            )
        })}
        </>
    )
} 