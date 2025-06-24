import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FranchiseListData } from '../../../DataTable';
import { useNavigate } from 'react-router-dom';

function FranchiseList() {
  const [data, setData] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [editId, setEditId] = useState(null); 
  const [editItem, setEditItem] = useState({});
  const navigate = useNavigate();

  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("franchiseData"));
    if (storedData && storedData.length > 0) {
      setData(storedData);
    } else {
      setData(FranchiseListData);
      localStorage.setItem("franchiseData", JSON.stringify(FranchiseListData));
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("editFranchise"); 
    navigate("/FranchiseUpdateList");
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      localStorage.setItem("franchiseData", JSON.stringify(updatedData));
    }
  };

  const handleLikeToggle = (id) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const pagination = (direction) => {
    setCurrentPage(prev =>
      direction === "next" ? Math.min(prev + 1, totalPages) : Math.max(prev - 1, 1)
    );
  };

  const handleEditClick = (item) => {
    // Save data to localStorage and navigate to update form 
    localStorage.setItem("editFranchise", JSON.stringify(item));
    navigate("/FranchiseUpdateList");
  };

  const handleEditChange = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    const updatedData = data.map(item => item.id === editId ? editItem : item);
    setData(updatedData);
    localStorage.setItem("franchiseData", JSON.stringify(updatedData));
    setEditId(null);
  };

  return (
    <div>
      <div className='list-container'>
        <div className='list-bt-div'>
          <h2>Franchise List</h2>
          <div>
            <button className='list-add-bt' onClick={handleClick}>Add Franchise</button>
            <button className='list-download-bt'>Download Data</button>
          </div>
        </div>

        <div className='list-input-div'>
          <input type="number" placeholder='Show Entries' />
          <input type="search" placeholder='Search' />
        </div>

        <div className="table-items">
          <table>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Oil Company</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>City</th>
                <th>Distict</th>
                <th>State</th>
                <th>Pincode</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  {editId === item.id ? (
                    <>
                      <td><input name="companyName" value={editItem.companyName} onChange={handleEditChange} /></td>
                      <td><input name="oilCompany" value={editItem.oilCompany} onChange={handleEditChange} /></td>
                      {/* <td><input name="amount" value={editItem.amount} onChange={handleEditChange} /></td> */}
                      <td><input name="name" value={editItem.name} onChange={handleEditChange} /></td>
                      <td><input name="email" value={editItem.email} onChange={handleEditChange} /></td>
                      <td><input name="phone" value={editItem.phone} onChange={handleEditChange} /></td>
                      <td><input name="address" value={editItem.address} onChange={handleEditChange} /></td>
                      <td><input name="city" value={editItem.city} onChange={handleEditChange} /></td>
                      <td><input name="district" value={editItem.district} onChange={handleEditChange} /></td>
                      <td><input name="state" value={editItem.state} onChange={handleEditChange} /></td>
                      <td><input name="pincode" value={editItem.pincode} onChange={handleEditChange} /></td>
                      <td>
                        <button onClick={handleEditSave}>Save</button>
                        <button onClick={() => setEditId(null)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{item.companyName}</td>
                      <td>{item.oilCompany}</td>
                      {/* <td>{item.amount}</td> */}
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.city}</td>
                      <td>{item.district}</td>
                      <td>{item.state}</td>
                      <td>{item.pincode}</td>
                      <td className='table-icons'>
                        <span className='pencil-icon' onClick={() => handleEditClick(item)}><FaPencil /></span>
                         <span onClick={() => handleLikeToggle(item.id)}
                            style={{ color: likedItems[item.id] ? 'gray' : 'green', cursor: 'pointer' }}>
                            {likedItems[item.id] ? <FaThumbsDown /> : <FaThumbsUp />}
                          </span>
                          <span className='delete-icon' onClick={() => handleDelete(item.id)}><RiDeleteBin5Line /></span>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className='table-tfoot'>
                <td colSpan={12}>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)} of {data.length} Items
                  <div style={{ float: 'right' }}>
                    <button onClick={() => pagination("prev")} disabled={currentPage === 1}>Prev</button>
                    <span> Page {currentPage} of {totalPages} </span>
                    <button onClick={() => pagination("next")} disabled={currentPage === totalPages}>Next</button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FranchiseList;
