import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StructureUpdateList() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    country: '',
    structureName: '',
    company: '',
    // oilCompany: '',
    structureDetail: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    state: '',
    district: '',
    city: '',
    pincode: '',
    msgAlert: '',
    emailAlert: '',
  });

  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);

  // ✅ Load edit data if present
  useEffect(() => {
    const editItem = JSON.parse(localStorage.getItem("editStructureItem"));
    if (editItem) {
      setEditId(editItem.id);
      setFormData({
        country: '',
        structureName: editItem.structureName || '',
        Company: editItem.oilCompany || '',
        structureDetail: editItem.structureDetail || '',
        mobile: editItem.phone || '',
        email: editItem.email || '',
        password: '',
        confirmPassword: '',
        state: editItem.state || '',
        district: editItem.district || '',
        city: editItem.city || '',
        pincode: editItem.pincode || '',
        msgAlert: '',
        emailAlert: '',
      });
    }
  }, []);

  const handleChange = (e) => {
    console.log('Form dataa changed...')
    const { name, value, type } = e.target;
    console.log(`Form dataa changed... ${name}, ${value}`)
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = 'This field is required';
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    console.log(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form is Submitting...');
    if (validateForm()) {
        console.log('validation success...')
      const storedData = JSON.parse(localStorage.getItem("structureData")) || [];

      const newEntry = {
        id: editId || Date.now(),
        structureName: formData.structureName,
        company: formData.oilCompany,
        structureDetail: formData.structureDetail,
        amount: '0',
        personName: '',
        email: formData.email,
        phone: formData.mobile,
        address: '',
        city: formData.city,
        district: formData.district,
        state: formData.state,
        pincode: formData.pincode,
      };

      let updatedData;
      if (editId) {
        // Edit existing
        updatedData = storedData.map(item => item.id === editId ? newEntry : item);
      } else {
        // New entry
        updatedData = [...storedData, newEntry];
      }

      localStorage.setItem("structureData", JSON.stringify(updatedData));
      localStorage.removeItem("editStructureItem");

      alert(editId ? "Entry updated successfully!" : "Form submitted successfully!");
      navigate("/master/structure/structurelist");
    } else {
        console.log('Validation Failed...');
    }

  };

  const handleClick = () => {
    localStorage.removeItem("editStructureItem");
    navigate("/master/structure/structurelist");
  };

  return (
    <div className="form-container">
      <div className='list-bt-div'>
        <h2>{editId ? 'Edit Structure' : 'Structure Update List'}</h2>
        <div>
          <button className='list-add-bt' onClick={handleClick}>Back</button>
        </div>
      </div>

      <form>
        <div className="form-group">
          {[
            { name: 'country', label: 'Country', type: 'select', options: ['India', 'USA', 'Africa', 'Australia', 'Belgium', 'Argentina', 'Europe', 'Austria', 'Mexico'] },
            { name: 'structureName', label: 'Structure', type: 'text', placeholder: 'Structure Name' },
            { name: 'company', label: 'Company', type: 'select', options: ['IOCL', 'BPCL', 'HPCL'] },
            { name: 'structureDetail', label: 'Structure Details', type: 'text', placeholder: 'Structure Detail' },
            { name: 'mobile', label: 'Mobile', type: 'tel', placeholder: 'Enter Mobile' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
            { name: 'password', label: 'Password', type: 'password', placeholder: 'New Password' },
            { name: 'confirmPassword', label: 'ConfirmPassword', type: 'password', placeholder: 'Confirm Password' },
            { name: 'state', label: 'State', type: 'select', options: ['Haryana', 'Punjab', 'Bihar', 'Rajasthan'] },
            { name: 'district', label: 'District', type: 'select', options: ['Gautam Budha Nagar', 'Ghaziabad', 'Greater Noida', 'Meerut'] },
            { name: 'city', label: 'City', type: 'select', options: ['Noida', 'Unnati Vihar', 'Vivek Vihar'] },
            { name: 'pincode', label: 'Pincode', type: 'text', placeholder: 'Enter Pincode' },
          ].map(field => (
            <div key={field.name}>
              <label className="form-label">{field.label}<span className='form-star'>*</span></label>
              {field.type === 'select' ? (
                <select name={field.name} className="form-control" value={formData[field.name]} onChange={handleChange}>
                  <option value="">Select {field.label}</option>
                  {field.options.map(option => (
                    <option key={option.toLowerCase()} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input name={field.name} className="form-control" type={field.type} placeholder={field.placeholder} value={formData[field.name]}onChange={handleChange} />
              )}
              {errors[field.name] && <span className="form-error">{errors[field.name]}</span>}
            </div>
          ))}

          <div>
            <label className="form-label">Msg Alert<span className='form-star'>*</span></label>
            <div>
              <label><input type="radio" name="msgAlert" value="yes" checked={formData.msgAlert === "yes"} onChange={handleChange} /> Yes</label>
              <label><input type="radio" name="msgAlert" value="no" checked={formData.msgAlert === "no"} onChange={handleChange} /> No</label>
            </div>
            {errors.msgAlert && <span className="form-error">{errors.msgAlert}</span>}
          </div>

          <div>
            <label className="form-label">Email Alert<span className='form-star'>*</span></label>
            <div>
              <label><input type="radio" name="emailAlert" value="yes" checked={formData.emailAlert === "yes"} onChange={handleChange} /> Yes</label>
              <label><input type="radio" name="emailAlert" value="no" checked={formData.emailAlert === "no"} onChange={handleChange} /> No</label>
            </div>
            {errors.emailAlert && <span className="form-error">{errors.emailAlert}</span>}
          </div>
        </div>

        <div className='form-submit-div'>
          <button type="submit" onClick={handleSubmit} className="form-submit-bt">{editId ? 'Update' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
}

export default StructureUpdateList;
