import React from 'react';
import './History.css'; 

const History = () => {
    const data = [
        { logo: '/assets/img/skill.png', title: 'Skill Hunt', client: 'Abhishek', date: '2025-04-15', amount: 'Rs 10000'},
        { logo: "/assets/img/stay.png", title: "Stay To Stray", client:"Kiran", date: '2025-04-25', amount: 'Rs 5000'},
        { logo: "/assets/img/travel.png", title: "Travel Guide", client:"Rajan", date: '2025-03-25', amount: 'Rs 15000'},
        { logo: "/assets/img/dev.png", title: "Dev Wiz", client:"Raman", date: '2025-04-15', amount: 'Rs 35000'},
        { logo: "/assets/img/gym.png", title: "Fit Gym", client:"Simi", date: '2025-03-15', amount: 'Rs 25000'}
      ]

  return (
    <div className="history-container">
      <table className="table table-striped table-hover custom-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Logo</th>
            <th>Title</th>
            <th>Client</th>
            <th>Date</th>
            <th>Payment Received</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={el.logo} className="img-fluid" style={{width: "50px", height: "50px", borderRadius: "50%"}}/></td>
              <td>{el.title}</td>
              <td>{el.client}</td>
              <td>{el.date}</td>
              <td>{el.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;