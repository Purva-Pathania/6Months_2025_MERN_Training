/*Create an array of object named employee with key name, dept and salary, Print each data using map in form of cards*/
import { Fragment } from "react"

export default function EmployeeMap(){
    let employees = [
        {sname: "Priyanka", dept: "Technology", salary: "20K"}
    ] 
    return(
        <div style={{height:"300px", width:"500px", backgroundColor:"white", color:"black", margin:"auto"}}>
            <h1><u>Employee Data</u></h1>
            {employees.map((employee,index)=>{
                return(
                    <Fragment key={index}>
                        <h2>Name: <em>{employee.sname}</em></h2>
                        <h2>Department: <em>{employee.dept}</em></h2>
                        <h2>Salary: <em>{employee.salary}</em></h2>
                    </Fragment>
                )
            })}
        </div>
    )
}