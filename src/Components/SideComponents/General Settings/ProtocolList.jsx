import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CountryListData } from '../../../DataTable';
import { useNavigate } from 'react-router-dom';

function ProtocolList() {
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
    const storedData = JSON.parse(localStorage.getItem("ProtocolData"));
    if (storedData && storedData.length > 0) {
      setData(storedData);
    } else {
      setData(CountryListData);
      localStorage.setItem("ProtocolData", JSON.stringify(CountryListData));
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("editProtocol"); 
    navigate("/ProtocolUpdateList");
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      localStorage.setItem("ProtocolData", JSON.stringify(updatedData));
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
    localStorage.setItem("editProtocol", JSON.stringify(item));
    navigate("/ProtocolUpdateList");
  };

  const handleEditChange = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    const updatedData = data.map(item => item.id === editId ? editItem : item);
    setData(updatedData);
    localStorage.setItem("ProtocolData", JSON.stringify(updatedData));
    setEditId(null);
  };

  return (
    <div>
      <div className='list-container'>
        <div className='list-bt-div'>
          <h2>Protocol List</h2>
          <div>
            <button className='list-add-bt' onClick={handleClick}>Add Protocol</button>
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
                <th>Company</th>
                <th>Country</th>
                <th>Device Type</th>
                <th>Device Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  {editId === item.id ? (
                    <>
                      <td><input name="company" value={editItem.company} onChange={handleEditChange} /></td>
                      <td><input name="country" value={editItem.country} onChange={handleEditChange} /></td>
                      <td><input name="deviceType" value={editItem.deviceType} onChange={handleEditChange} /></td>
                      <td><input name="deviceName" value={editItem.deviceName} onChange={handleEditChange} /></td>
                      <td>
                        <button onClick={handleEditSave}>Save</button>
                        <button onClick={() => setEditId(null)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{item.company}</td>
                      <td>{item.country}</td>
                      <td>{item.deviceType}</td>
                      <td>{item.deviceName}</td>
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

export default ProtocolList;
