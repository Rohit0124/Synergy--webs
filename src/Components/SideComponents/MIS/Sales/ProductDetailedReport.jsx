import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ReceiveFuelReportData } from '../../../../DataTable';

function ProductDetailedReport() {
  const [data, setData] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesToShow, setEntriesToShow] = useState(7);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    country: '',
    company: '',
    fromDate: '',
    toDate: '',
  });
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ProductDetailedData"));
    if (storedData && storedData.length > 0) {
      setData(storedData);
    } else {
      setData(ReceiveFuelReportData);
      localStorage.setItem("ProductDetailedData", JSON.stringify(ReceiveFuelReportData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) newErrors[key] = 'This field is required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const storedData = JSON.parse(localStorage.getItem("ProductDetailedData")) || [];
    const newEntry = {
      id: editId || Date.now(), ...formData,
    };

    let updatedData;
    if (editId) {
      updatedData = storedData.map(item => item.id === editId ? newEntry : item);
    } else {
      updatedData = [...storedData, newEntry];
    }

    localStorage.setItem("ProductDetailedData", JSON.stringify(updatedData));
    setData(updatedData);
    setFormData({ country: '', company: '', fromDate: '', toDate: '' });
    setEditId(null);
    setErrors({});
    alert(editId ? "Updated successfully!" : "Submitted successfully!");
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      localStorage.setItem("ProductDetailedData", JSON.stringify(updatedData));
    }
  };

  const handleEditClick = (item) => {
    setEditId(item.id);
    setFormData({
      country: item.country,
      company: item.company,
      fromDate: item.fromDate,
      toDate: item.toDate
    });
  };

  const handleLikeToggle = (id) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredData = data.filter(item =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.fromDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.toDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entriesToShow);
  const indexOfLastItem = currentPage * entriesToShow;
  const indexOfFirstItem = indexOfLastItem - entriesToShow;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pagination = (direction) => {
    setCurrentPage(prev =>
      direction === "next" ? Math.min(prev + 1, totalPages) : Math.max(prev - 1, 1)
    );
  };

  const handleEntriesChange = (e) => {
    setEntriesToShow(Number(e.target.value));
    setCurrentPage(1); 
  };

  return (
    <div className='list-container'>
      <h2>Manage Product Detailed Report</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {[
            { name: 'country', label: 'Country', type: 'select', options: ['India', 'USA', 'Africa', 'Australia'] },
            { name: 'company', label: 'Company', type: 'select', options: ['IOCL', 'BPCL', 'HPCL'] },
            { name: 'fromDate', label: 'From Date', type: 'date' },
            { name: 'toDate', label: 'To Date', type: 'date' },
          ].map(field => (
            <div key={field.name}>
              <label className="form-label">{field.label}<span className='form-star'>*</span></label>
              {field.type === 'select' ? (
                <select name={field.name} className="form-control" value={formData[field.name]} onChange={handleChange}>
                  <option value="">Select {field.label}</option>
                  {field.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input name={field.name} className="form-control" type={field.type} value={formData[field.name]} onChange={handleChange} />
              )}
              {errors[field.name] && <span className="form-error">{errors[field.name]}</span>}
            </div>
          ))}
        </div>

        <div className='form-submit-div'>
          <button type="submit" className="form-submit-bt">{editId ? 'Update' : 'Submit'}</button>
        </div>
      </form>

      <div className='list-input-div'>
        <select placeholder='Show Entries' value={entriesToShow} onChange={handleEntriesChange}>
          {[5, 10, 25, 50].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <input type="search" placeholder="Search" value={searchTerm} onChange={e => 
            {setSearchTerm(e.target.value);
            setCurrentPage(1); 
          }}/>
      </div>

      <div className="table-items">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Company</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(item => (
              <tr key={item.id}>
                <td>{item.country}</td>
                <td>{item.company}</td>
                <td>{item.fromDate}</td>
                <td>{item.toDate}</td>
                <td className="table-icons">
                  <span className='pencil-icon' onClick={() => handleEditClick(item)}><FaPencil /></span>
                  <span onClick={() => handleLikeToggle(item.id)} style={{ color: likedItems[item.id] ? 'gray' : 'green', cursor: 'pointer' }}>
                    {likedItems[item.id] ? <FaThumbsDown /> : <FaThumbsUp />}
                  </span>
                  <span className='delete-icon' onClick={() => handleDelete(item.id)}><RiDeleteBin5Line /></span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="table-tfoot">
              <td colSpan={5}>
                Showing {filteredData.length === 0 ? 0 : indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} Items
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
  );
}

export default ProductDetailedReport;
