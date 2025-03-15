
import React, { useState } from "react";
import "./styles.css"; // Import the CSS file for styling

const Client = () => {
    const data = [
        { pic: "/assets/img/client2.png", name: "Shivam", dev:"Web developer", address: "CENTRE-EST" },
        { pic: "/assets/img/client1.webp", name: "Riya", dev:"AI developer", address: "REGION PARISIENNE"},
        { pic: "/assets/img/client2.png", name: "Krish", dev:"Graphics developer", address: "NORD"},
        { pic: "/assets/img/client1.webp", name: "Vaidehi", dev:"Web developer", address: "SUD EST" },
        { pic: "/assets/img/client2.png", name: "Priyansh", dev:"Full Stack developer", address: "SUD OUEST" }
      ];

  const [filters, setFilters] = useState({
    dev: "",
    name:""
  });

  // Function to update filter state
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Apply filters
  const filteredData = data.filter((row) => {
    return (
      (filters.dev === "" || row.dev === filters.dev)&&
      (filters.name === "" || row.name === filters.name)
    );
  });

  return (
    <div className="table-container">

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>PIC</th>
            <th>
               <div className="dropdown1">
                    <select name="name" value={filters.name} onChange={handleFilterChange}>
                    <option value="">NAME</option>
                    {[...new Set(data.map((row) => row.name))].map((name) => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                    </select>
                    <i className="bi bi-chevron-down "></i>
                </div>
            </th>
            <th>
                <div className="dropdown2">
                    <select name="dev" value={filters.dev} onChange={handleFilterChange}>
                    <option value="">DEVELOPERS</option>
                    {[...new Set(data.map((row) => row.dev))].map((dev) => (
                        <option key={dev} value={dev}>{dev}</option>
                    ))}
                    </select>
                    <i className="bi bi-chevron-down "></i>
                </div>
            </th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={row.pic} className="img-fluid" style={{height:"100px", width:"100px"}}/></td>
                    <td>{row.name}</td>
                    <td>{row.dev}</td>
                    <td>{row.address}</td>
                    <td>
                    <div className="icons">
                        <i className="bi bi-eye-fill"></i>
                        <i className="bi bi-lock-fill"></i>
                        <i className="bi bi-unlock-fill"></i>
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

export default Client;

