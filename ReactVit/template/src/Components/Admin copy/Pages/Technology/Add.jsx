import React, { useState } from 'react';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
function Add() {
  const [technologies, setTechnologies] = useState([]);
  const [title, setTitle] = useState('');
  const [logo, setLogo] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ title: '', logo: null, status: 'Active', date: '' });

  const handleAdd = () => {
    if (!title || !logo){
      toast.error("Title and Logo are required!");
      return;
    }
    const newTech = {
      title,
      logo,
      status: 'Active',
      date: new Date().toLocaleDateString()
    };
    setTechnologies([...technologies, newTech]);
    setTitle('');
    setLogo(null);
  };

  const handleDelete = (index) => {
    const updated = [...technologies];
    updated.splice(index, 1);
    setTechnologies(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(technologies[index]);
  };

  const handleSaveEdit = () => {
    const updated = [...technologies];
    updated[editIndex] = editData;
    setTechnologies(updated);
    setEditIndex(null);
  };

  return (
    <div className="App">

      {/* Add Form */}
      <div className="form-box">
        <h3>Add</h3>
        <label>Title: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Logo: </label>
        <input type="file" onChange={(e) => setLogo(URL.createObjectURL(e.target.files[0]))} />
        <br />
        <button className="btn btn-primary" onClick={handleAdd}>SAVE</button>
      </div>

      {/* Table */}
      <h3>Manage</h3>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Technology Name</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {technologies.map((tech, index) => (
            <tr key={index}>
              <td><img src={tech.logo} alt="logo" width="40" /></td>
              <td>{tech.title}</td>
              <td>{tech.status}</td>
              <td><button className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button></td>
              <td><button className="btn btn-outline-danger" onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Form */}
      {editIndex !== null && (
        <div className="form-box">
          <h3>Edit Technology</h3>
          <br/>
          <label>Logo: </label>
          <img src={editData.logo} alt="edit logo" width="40" />
          <br/>
          <label>Status: </label>
          <select className="sel" value={editData.status} onChange={(e) => setEditData({ ...editData, status: e.target.value })}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <br />
          <label>Title: </label>
          <input value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} />
          <br />
          <label>Date: </label>
          <input value={editData.date} readOnly />
          <br />
          <button className="btn btn-primary" onClick={() => setEditIndex(null)}>Cancel</button>
          <button className="btn btn-outline-primary save" onClick={handleSaveEdit}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Add;