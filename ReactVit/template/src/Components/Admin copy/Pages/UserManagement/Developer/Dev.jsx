import React, { useState } from "react";
import "./styles.css"; // Import the CSS file for styling

const Dev = () => {
    const data = [
        { pic: "/assets/img/dev2.jpg", name: "Abhishek", dev: "Front End Developer" },
        { pic: "/assets/img/dev1.jpg", name: "Kiran", dev: "Full-stack Developer"},
        { pic: "/assets/img/dev2.jpg", name: "Rajan", dev: "Mobile Developer"},
        { pic: "/assets/img/dev3.jpg", name: "Raman", dev: "Security Developer" },
        { pic: "/assets/img/dev1.jpg", name: "Simi", dev: "Back End Developer" }
      ];

  const [filters, setFilters] = useState({
    dev: "",
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
      (filters.dev === "" || row.dev === filters.dev)
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
            <th>NAME</th>
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

export default Dev;