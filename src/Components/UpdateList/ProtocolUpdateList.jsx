import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtocolUpdateList() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    country: '',
    company: '',
    deviceType: '',
    deviceName: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    city: '',
    pincode: '',
  });

  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const editItem = JSON.parse(localStorage.getItem("editProtocolItem"));
    if (editItem) {
      setEditId(editItem.id);
      setFormData({
        country: '',
        company: editItem.company || '',
        deviceType: editItem.deviceType || '',
        deviceName: editItem.deviceName || '',
        mobile: editItem.phone || '',
        email: editItem.email || '',
        state: editItem.state || '',
        district: editItem.district || '',
        city: editItem.city || '',
        pincode: editItem.pincode || '',
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Form...");
    if (validateForm()) {
      const storedData = JSON.parse(localStorage.getItem("ProtocolData")) || [];

      const newEntry = {
        id: editId || Date.now(),
        country: formData.country,
        company: formData.company,
        deviceType: formData.deviceType,
        deviceName: formData.deviceName,
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

      localStorage.setItem("ProtocolData", JSON.stringify(updatedData));
      localStorage.removeItem("editProtocolItem");

      alert(editId ? "Entry updated successfully!" : "Form submitted successfully!");
      navigate("/generalsetting/protocol/protocollist");
    }
  };

  const handleClick = () => { 
    localStorage.removeItem("editProtocolItem");
    navigate("/generalsetting/protocol/protocollist");
  };

  return (
    <div className="form-container">
      <div className='list-bt-div'>
        <h2>{editId ? 'Edit DeviceMaster' : 'DeviceMaster Update List'}</h2>
        <div>
          <button className='list-add-bt' onClick={handleClick}>Back</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {[
            { name: 'country', label: 'Country', type: 'select', options: ['India', 'USA', 'Africa', 'Australia', 'Belgium', 'Argentina', 'Europe', 'Austria', 'Mexico'] },
            { name: 'company', label: 'Company', type: 'select', options: ['IOCL', 'BPCL', 'HPCL'] },
            { name: 'deviceType', label: 'Device Type', type: 'text', placeholder: 'Enter Device Type' },
            { name: 'deviceName', label: 'Device Name', type: 'text', placeholder: 'Enter Device Name' },
            { name: 'mobile', label: 'Mobile', type: 'tel', placeholder: 'Enter Mobile' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
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

        </div>

        <div className='form-submit-div'>
          <button type="submit" className="form-submit-bt">{editId ? 'Update' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
}

export default ProtocolUpdateList;
