import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { UserGroupListData } from '../../../DataTable';
import { useNavigate } from 'react-router-dom';

function UserGroupList() {
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
    const storedData = JSON.parse(localStorage.getItem("usergroupData"));
    if (storedData && storedData.length > 0) {
      setData(storedData);
    } else {
      setData(UserGroupListData);
      localStorage.setItem("usergroupData", JSON.stringify(UserGroupListData));
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("editUserGroup"); 
    navigate("/UserGroupUpdateList");
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      localStorage.setItem("usergroupData", JSON.stringify(updatedData));
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
    localStorage.setItem("editUserGroup", JSON.stringify(item));
    navigate("/UserGroupUpdateList");
  };

  const handleEditChange = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    const updatedData = data.map(item => item.id === editId ? editItem : item);
    setData(updatedData);
    localStorage.setItem("usergroupData", JSON.stringify(updatedData));
    setEditId(null);
  };

  return (
    <div>
      <div className='list-container'>
        <div className='list-bt-div'>
          <h2>UserGroup List</h2>
          <div>
            <button className='list-add-bt' onClick={handleClick}>Add UserGroup</button>
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
                <th>User Name</th>
                <th>Company Company</th>
                <th>Oil Company</th>
                <th>Total Amount</th>
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
                      <td><input name="userName" value={editItem.userName} onChange={handleEditChange} /></td>
                      <td><input name="amount" value={editItem.amount} onChange={handleEditChange} /></td>
                      <td>
                        <button onClick={handleEditSave}>Save</button>
                        <button onClick={() => setEditId(null)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{item.userName}</td>
                      <td>{item.companyName}</td>
                      <td>{item.oilCompany}</td>
                      <td>{item.amount}</td>
                      <td className='table-icons'>
                        <span  className='pencil-icon' onClick={() => handleEditClick(item)}><FaPencil /></span>
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

export default UserGroupList;
