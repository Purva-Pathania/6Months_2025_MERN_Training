import React from "react";
import "./Table.css"; // Import the CSS file for styling

const TableComponent = () => {
  const data = [
    { city: "Lyon", banner: "SUPER", area: "CENTRE-EST", type: "Franchise", state: "OPEN", avBasket: 31.53 },
    { city: "Paris", banner: "SUPER", area: "REGION PARISIENNE", type: "Franchise", state: "OPEN", avBasket: 27.32 },
    { city: "La Gorgue", banner: "HYPER", area: "NORD", type: "Franchise", state: "CLOSED", avBasket: 0.00 },
    { city: "Béziers", banner: "SUPER", area: "SUD EST", type: "Franchise", state: "OPEN", avBasket: 31.53 },
    { city: "Toulouse", banner: "HYPER", area: "SUD OUEST", type: "Franchise", state: "OPEN", avBasket: 32.12 },
    { city: "Lyon Berliet", banner: "HYPER", area: "CENTRE-EST", type: "Non franchise", state: "CLOSED", avBasket: 0.00 },
    { city: "Pauillac", banner: "HYPER", area: "SUD OUEST", type: "Non franchise", state: "OPEN", avBasket: 24.72 },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Banner</th>
            <th>Area</th>
            <th>Type</th>
            <th>State</th>
            <th>Avg Basket</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={row.state === "CLOSED" ? "closed" : "open"}>
              <td>{row.city}</td>
              <td>{row.banner}</td>
              <td>{row.area}</td>
              <td>{row.type}</td>
              <td className={row.state.toLowerCase()}>{row.state}</td>
              <td>{row.avBasket.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableComponent;
