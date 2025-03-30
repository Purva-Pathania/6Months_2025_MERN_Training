import React, { useState } from 'react';


const Project = () => {
  const data = [
    { logo: '/assets/img/skill.png', title: 'Skill Hunt', developer: 'Abhishek', status: 'In Progress', deadline: '2025-04-15', bidAmount: 'Rs 10000', submissionDate: '2025-04-28', rating: 4},
    { logo: "/assets/img/stay.png", title: "Stay To Stray", developer:"Kiran", status: "Pending", deadline: '2025-04-25', bidAmount: 'Rs 5000', submissionDate: '2025-04-28', rating: 5},
    { logo: "/assets/img/travel.png", title: "Travel Guide", developer:"Rajan", status: "Completed", deadline: '2025-03-25', bidAmount: 'Rs 15000', submissionDate: '2025-03-28', rating: 3},
    { logo: "/assets/img/dev.png", title: "Dev Wiz", developer:"Raman", status: "Pending", deadline: '2025-04-15', bidAmount: 'Rs 35000', submissionDate: '2025-03-28', rating: 4},
    { logo: "/assets/img/gym.png", title: "Fit Gym", developer:"Simi", status: "Submited", deadline: '2025-03-15', bidAmount: 'Rs 25000', submissionDate: '2025-03-15', rating: 3}
  ]
  const [projects, setProjects] = useState(data);
  const [openIndex, setOpenIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const toggleAccordion = (index) => {
    if (editIndex !== null) return; // prevent toggle if editing
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleEditClick = (e, index) => {
    e.stopPropagation(); // prevent accordion toggle
    setEditIndex(index);
    setEditData({ ...projects[index] });
    setOpenIndex(index); // show accordion content while editing
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (index) => {
    const updated = [...projects];
    updated[index] = editData;
    setProjects(updated);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const handleDelete = (e, index) => {
    e.stopPropagation(); // prevent accordion toggle
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
    if (openIndex === index) setOpenIndex(null);
  };

  return (
    <>
    
    <div className="accordion bg-light rounded p-4" id="accordionExample">
      {projects.map((el, index) => (
        <div key={index} className="accordion-item border-0 mb-4">
          <div className="accordion-header" id="headingOne" onClick={() => toggleAccordion(index)}>
          <button
                  className="accordion-button text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseTOne"
                >
            <img src={el.logo} alt="Logo" className="logo img-fluid" style={{height:"100px", width:"100px"}} />
            <h3>{el.title}</h3>
            <span>{el.developer}</span>
            <span >{el.deadline}</span>
            <button onClick={(e) => handleEditClick(e, index)} className="btn btn-primary" style={{marginRight:"20px"}}>Edit</button>
            <button onClick={(e) => handleDelete(e, index)} className="btn btn-outline-danger">Delete</button>
          </button>
          </div>
          <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
          {openIndex === index && (
            <div className="accordion-body my-2">
              {editIndex === index ? (
                <>
                  <p>
                    <strong>Title:</strong>
                    <input type="text" name="title" value={editData.title} onChange={handleInputChange} />
                  </p>
                  <p>
                    <strong>Developer:</strong>
                    <input type="text" name="developer" value={editData.developer} onChange={handleInputChange} />
                  </p>
                  <p>
                    <strong>Status:</strong>
                    <input type="text" name="status" value={editData.status} onChange={handleInputChange} />
                  </p>
                  <p>
                    <strong>Deadline:</strong>
                    <input type="text" name="deadline" value={editData.deadline} onChange={handleInputChange} />
                  </p>
                  <p>
                    <strong>Bid Amount:</strong>
                    <input type="text" name="bidAmount" value={editData.bidAmount} onChange={handleInputChange} />
                  </p>
                  <p>
                    <strong>Submission Date:</strong>
                    <input type="text" name="submissionDate" value={editData.submissionDate} onChange={handleInputChange} />
                  </p>
                  <p>
                    <strong>Rating:</strong>
                    <input type="number" name="rating" value={editData.rating} onChange={handleInputChange} />
                  </p>
                  <button onClick={() => handleSave(index)} className="btn btn-primary">Save</button>
                  <button onClick={handleCancel} className="btn btn-outline-secondary" style={{marginLeft:"10px"}}>Cancel</button>
                </>
              ) : (
                <>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <img src={el.logo} alt="Logo"className="img-fluid" style={{height:"250px", width:"250px"}}/>
                    </div>
                    <div className="col-md-5">
                      <p><strong>Title:</strong> {el.title}</p>
                      <p><strong>Developer:</strong> {el.developer}</p>
                      <p><strong>Status:</strong> {el.status}</p>
                      <p><strong>Deadline:</strong> {el.deadline}</p>
                      <p><strong>Bid Amount:</strong> {el.bidAmount}</p>
                      <p><strong>Submission Date:</strong> {el.submissionDate}</p>
                      <p><strong>Rating:</strong><span style={{color:"gold", fontSize:"20px"}}>{'★'.repeat(el.rating)}{'☆'.repeat(5 - el.rating)}</span></p>
                    </div>
                  </div>
                </div>
                </>
              )}
            </div>
          )}
          </div>
        </div>
      ))}
    </div>
  </>
  )
};

export default Project