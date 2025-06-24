import React, { useState } from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BaudRateListData } from '../../../DataTable';

function BaudRateList() {
  const [data, setData] = useState(BaudRateListData);
  const [likedItems, setLikedItems] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [editId, setEditId] = useState(null); 
  const [editItem, setEditItem] = useState({}); 

  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this item?');
    if (confirm) {
      setData(data.filter(item => item.id !== id));
    }
  };

  const handleLikeToggle = (id) => {
    setLikedItems(prev => ({ ...prev,  [id]: !prev[id]
    }));
  };

  const pagination = (direction) => {
    setCurrentPage(prev =>
      direction === "next" ? Math.min(prev + 1, totalPages) : Math.max(prev - 1, 1)
    );
  };

  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditItem(item); 
  };

  const handleEditChange = (e) => {
      setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    setData(data.map(item => item.id === editId ? editItem : item)
    );
    setEditId(null);
  };

  return (
    <div>
      <div className='list-container'>
        <div className='list-bt-div'>
          <h2>Baud Rate List</h2>
          <div>
            <button className='list-add-bt'>Add Baud Rate</button>
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
                <th>Device Type Name</th>
                <th>Device Name</th>
                <th>BaudRate</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  {editId === item.id ? (
                    <>
                      <td><input name="deviceType" value={editItem.deviceType} onChange={handleEditChange} /></td>
                      <td><input name="deviceName" value={editItem.deviceName} onChange={handleEditChange} /></td>
                      <td><input name="baudRate" value={editItem.baudRate} onChange={handleEditChange} /></td>
                      <td>
                        <button onClick={handleEditSave}>Save</button>
                        <button onClick={() => setEditId(null)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>  
                      <td>{item.deviceType}</td>
                      <td>{item.deviceName}</td>
                      <td>{item.baudRate}</td>
                      <td className='table-icons'>
                        <span onClick={() => handleEditClick(item)}><FaPencil /></span>
                        <span className='thumb-icon' onClick={() => handleLikeToggle(item.id)}
                          style={{ color: likedItems[item.id] ? 'green' : 'gray', cursor: 'pointer' }}><FaThumbsUp />
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
                <td colSpan={6}>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)} of {data.length} Items
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

export default BaudRateList;




// import React, { useState } from 'react';
// import { FaThumbsUp } from "react-icons/fa";
// import { FaPencil } from "react-icons/fa6";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { BaudRateListData } from '../../../DataTable';

// function BaudRateList() {
//   const [data, setData] = useState(BaudRateListData);
//   const [likedItems, setLikedItems] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [editItemId, setEditItemId] = useState(null); // NEW STATE
//   const [editFormData, setEditFormData] = useState({}); // NEW STATE

//   const entriesPerPage = 5;
//   const indexOfLast = currentPage * entriesPerPage;
//   const indexOfFirst = indexOfLast - entriesPerPage;
//   const currentEntries = data.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(data.length / entriesPerPage);

//   const handleDelete = (id) => {
//     const confirm = window.confirm('Are you sure you want to delete this item?');
//     if (confirm) {
//       setData(data.filter(item => item.id !== id));
//     }
//   };

//   const handleLikeToggle = (id) => {
//     setLikedItems(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const paginate = (direction) => {
//     setCurrentPage(prev =>
//       direction === "next" ? Math.min(prev + 1, totalPages) : Math.max(prev - 1, 1)
//     );
//   };

//   const handleEditClick = (item) => {
//     setEditItemId(item.id);
//     setEditFormData(item); // Prefill form
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleEditSave = () => {
//     setData(prev =>
//       prev.map(item => item.id === editItemId ? editFormData : item)
//     );
//     setEditItemId(null); // Close edit form
//   };

//   return (
//     <div>
//       <div className='list-container'>
//         {/* Header Buttons and Inputs */}
//         <div className='list-bt-div'>
//           <h2>Baud Rate List</h2>
//           <div>
//             <button className='list-add-bt'>Add Baud Rate</button>
//             <button className='list-download-bt'>Download Data</button>
//           </div>
//         </div>

//         <div className='list-input-div'>
//           <input type="number" placeholder='Show Entries' />
//           <input type="search" placeholder='Search' />
//         </div>

//         {/* Table */}
//         <div className="table-items">
//           <table>
//             <thead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Product Short Name</th>
//                 <th>Product Family Name</th>
//                 <th>Company Name</th>
//                 <th>Country Name</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {currentEntries.map((item) => (
//                 <tr key={item.id}>
//                   {editItemId === item.id ? (
//                     <>
//                       <td><input name="name" value={editFormData.name} onChange={handleEditChange} /></td>
//                       <td><input name="shortName" value={editFormData.shortName} onChange={handleEditChange} /></td>
//                       <td><input name="family" value={editFormData.family} onChange={handleEditChange} /></td>
//                       <td><input name="company" value={editFormData.company} onChange={handleEditChange} /></td>
//                       <td><input name="country" value={editFormData.country} onChange={handleEditChange} /></td>
//                       <td>
//                         <button onClick={handleEditSave}>Save</button>
//                         <button onClick={() => setEditItemId(null)}>Cancel</button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td>{item.name}</td>
//                       <td>{item.shortName}</td>
//                       <td>{item.family}</td>
//                       <td>{item.company}</td>
//                       <td>{item.country}</td>
//                       <td className='table-icons'>
//                         <span onClick={() => handleEditClick(item)}><FaPencil /></span>
//                         <span
//                           className='thumb-icon'
//                           onClick={() => handleLikeToggle(item.id)}
//                           style={{ color: likedItems[item.id] ? 'blue' : 'gray', cursor: 'pointer' }}
//                         >
//                           <FaThumbsUp />
//                         </span>
//                         <span className='delete-icon' onClick={() => handleDelete(item.id)}><RiDeleteBin5Line /></span>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>

//             {/* Footer */}
//             <tfoot>
//               <tr className='table-tfoot'>
//                 <td colSpan={6}>Showing {indexOfFirst + 1}-{Math.min(indexOfLast, data.length)} of {data.length} entries
//                   <div style={{ float: 'right' }}>
//                     <button onClick={() => paginate("prev")} disabled={currentPage === 1}>Prev</button>
//                     <span> Page {currentPage} of {totalPages} </span>
//                     <button onClick={() => paginate("next")} disabled={currentPage === totalPages}>Next</button>
//                   </div>
//                 </td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BaudRateList;