import React, { useState } from "react";
import "./styles.css"; // Import the CSS file for styling

const Project = () => {
    const data = [
        { logo: "/assets/img/skill.png", pname: "Skill Hunt", cname: "Shivam", dname:"Abhishek"},
        { logo: "/assets/img/stay.png", pname: "Stay To Stray", cname: "Riya", dname:"Kiran"},
        { logo: "/assets/img/travel.png", pname: "Travel Guide", cname: "Krish", dname:"Rajan"},
        { logo: "/assets/img/dev.png", pname: "Dev Wiz", cname: "Vaidehi", dname:"Raman"},
        { logo: "/assets/img/gym.png", pname: "Fit Gym", cname: "Priyansh", dname:"Simi"}
      ];

  return (
    <div className="table-container">

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>LOGO</th>
            <th>TITLE</th>
            <th>CLIENT</th>
            <th>DEVELOPER</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={row.logo} className="img-fluid" style={{height:"100px", width:"100px"}}/></td>
                    <td>{row.pname}</td>
                    <td>{row.cname}</td>
                    <td>{row.dname}</td>
                    <td>
                    <div className="button">
                        <button className="btn btn-primary">View</button>
                        <button className="btn btn-outline-danger del">Delete</button>
                    </div>
                    </td>
                </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Project;
