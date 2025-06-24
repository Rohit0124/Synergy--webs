import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserTemplateUpdateList() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    country: '',
    userName: '',
    company: '',
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
    const editItem = JSON.parse(localStorage.getItem("editUserTemplateItem"));
    if (editItem) {
      setEditId(editItem.id);
      setFormData({
        country: '',
        company: editItem.oilCompany || '',
        userName: editItem.userName || '',
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
    const { name, value, type } = e.target;
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedData = JSON.parse(localStorage.getItem("UserTemplateData")) || [];

      const newEntry = {
        id: editId || Date.now(),
        companyName: formData.company,
        oilCompany: formData.company,
        userName: formData.userName, 
        amount: '',
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
        updatedData = storedData.map(item => item.id === editId ? newEntry : item);
      } else {
        updatedData = [...storedData, newEntry];
      }

      localStorage.setItem("userTemplateData", JSON.stringify(updatedData));
      localStorage.removeItem("editUserTemplateItem");

      alert(editId ? "Entry updated successfully!" : "Form submitted successfully!");
      navigate("/master/mastertemplate/usertemplatelist");
    }
  };

  const handleClick = () => {
    localStorage.removeItem("editUserTemplateItem");
    navigate("/master/mastertemplate/usertemplatelist");
  };

  return (
    <div className="form-container">
      <div className='list-bt-div'>
        <h2>{editId ? 'EditUserTemplate' : 'UserTemplate Update List'}</h2>
        <div>
          <button className='list-add-bt' onClick={handleClick}>Back</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {[
            { name: 'country', label: 'Country', type: 'select', options: ['India', 'USA', 'Africa', 'Australia', 'Belgium', 'Argentina', 'Europe', 'Austria', 'Mexico'] },
            { name: 'company', label: 'Company', type: 'select', options: ['IOCL', 'BPCL', 'HPCL'] },
            { name: 'userName', label: 'User Name', type: 'text',  placeholder: 'User Name' },
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
          <button type="submit" className="form-submit-bt">{editId ? 'Update' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
}

export default UserTemplateUpdateList;
