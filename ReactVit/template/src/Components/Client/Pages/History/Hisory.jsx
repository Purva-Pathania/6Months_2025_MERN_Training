import React from 'react';
import './History.css'; 

const History = () => {
    const data = [
        { logo: '/assets/img/skill.png', title: 'Skill Hunt', developer: 'Abhishek', role: 'Web developer', date: '2025-04-15', amount: 'Rs 10000', rating: 4},
        { logo: "/assets/img/stay.png", title: "Stay To Stray", developer:"Kiran", role: 'AI developer', date: '2025-04-25', amount: 'Rs 5000', rating: 5},
        { logo: "/assets/img/travel.png", title: "Travel Guide", developer:"Rajan", role: 'Graphics developer', date: '2025-03-25', amount: 'Rs 15000', rating: 3},
        { logo: "/assets/img/dev.png", title: "Dev Wiz", developer:"Raman", role: 'Web developer', date: '2025-04-15', amount: 'Rs 35000', rating: 4},
        { logo: "/assets/img/gym.png", title: "Fit Gym", developer:"Simi", role: 'Full Stack Developer', date: '2025-03-15', amount: 'Rs 25000', rating: 3}
      ]

  return (
    <div className="history-container">
      <table className="table table-striped table-hover custom-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Logo</th>
            <th>Title</th>
            <th>Developer</th>
            <th>Dev Role</th>
            <th>Date of Completion</th>
            <th>Amount Paid</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={el.logo} className="img-fluid" style={{width: "50px", height: "50px", borderRadius: "50%"}}/></td>
              <td>{el.title}</td>
              <td>{el.developer}</td>
              <td>{el.role}</td>
              <td>{el.date}</td>
              <td>{el.amount}</td>
              <td>{'★'.repeat(el.rating)}{'☆'.repeat(5 - el.rating)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;