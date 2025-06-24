import React, { useState } from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

function ShiftSummaryReport() {
  const [formData, setFormData] = useState({
    country: '',
    company: '',
    fromdate:'',
    todate:'',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert ('Form submitted successfully!');
    }
  };

  return (
    <div>  
     <div className='list-container'>
       <h2>Shift Summary Report</h2>
        <form onSubmit={handleSubmit}>
         <div className="form-group">
           <div>
             <label className="form-label">Country<span className='form-star'>*</span></label> 
             <select name="country" className="form-control" onChange={handleChange}>
               <option value="">Select Country</option>
               <option value="india">India</option>
               <option value="usa">USA</option>
               <option value="africa">Africa</option>
               <option value="australia">Australia</option>
               <option value="belgium">Belgium</option>
               <option value="argentina">Argentina</option>
               <option value="europe">Europe</option>
               <option value="austria">Austria</option>
               <option value="mexico">Mexico</option>
             </select>
             {errors.country && <span className="form-error">{errors.country}</span>}
           </div>

           <div>
             <label className="form-label">Company<span className='form-star'>*</span></label>
             <select name="company" className="form-control" onChange={handleChange}>
               <option value="">Select Company</option>
               <option value="IOCL">IOCL</option>
               <option value="BPCL">BPCL</option>
               <option value="HPCL">HPCL</option>
              </select>
              {errors.company && <span className="form-error">{errors.company}</span>}
           </div>

           <div>
             <label className="form-label">From Date<span className='form-star'>*</span></label>
             <input type="date" name='fromdate' className="form-control" onChange={handleChange} />
             {errors.fromdate && <span className="form-error">{errors.fromdate}</span>}
           </div>

           <div>
             <label className="form-label">To Date<span className='form-star'>*</span></label>
             <input type="date" name='todate' className="form-control" onChange={handleChange} />
             {errors.todate && <span className="form-error">{errors.todate}</span>}
           </div>
         </div>

         <div className='form-submit-div'>
          <button type="submit" className="form-submit-bt">Submit</button>
         </div>
        </form>   
        
        <div className='list-input-div'>
          <input type="number" placeholder='Show Entries'/>
          <input type="search" placeholder='Search'/>
        </div>
        
        <div className="table-items">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>For</th>
                  <th>Creation Date</th>
                  <th>Action</th>
                </tr>
              </thead>
         
              <tbody>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td className='table-icons'>
                    <span><FaPencil /></span>
                    <span className='thumb-icon'><FaThumbsUp /></span>
                    <span className='delete-icon'><RiDeleteBin5Line /></span>
                  </td>
                </tr> 
        
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td className='table-icons'>
                    <span><FaPencil /></span>
                    <span className='thumb-icon'><FaThumbsUp /></span>
                    <span className='delete-icon'><RiDeleteBin5Line /></span>
                  </td>
                </tr>                   
              </tbody>
        
              <tfoot>
                <tr className='table-tfoot'>
                  <td colSpan={12}>Showing</td>
                </tr>
              </tfoot>

            </table>
          </div>
         </div>
    </div>
  );
}

export default ShiftSummaryReport;
 