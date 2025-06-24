import React, { useState } from 'react';

function SelectLevel() {
  const [formData, setFormData] = useState({
    country: '',
    company: '',
    structureFirst: '',
    structureSecond: '',
    structureThird: '',
    franchisee: ''
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
    <div className="form-container">
      <h2>SELECT LEVELS</h2>
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
            <label className="form-label">Structure First<span className='form-star'>*</span></label>
            <select name="structureFirst" className="form-control" onChange={handleChange}>
              <option value="">Select Str-1</option>
              <option value="synergy_teletech_noida">Synergy Teletech Noida</option>
              <option value="synergy_drishti_noida">Synergy Drishti Noida</option>
              <option value="synergy">Synergy</option>
            </select>
            {errors.structureFirst && <span className="form-error">{errors.structureFirst}</span>}
          </div>

          <div>
            <label className="form-label">Structure Second<span className='form-star'>*</span></label>
            <select name="structureSecond" className="form-control" onChange={handleChange}>
              <option value="">Select Str-2</option>
              <option value="synergy_teletech">Synergy Teletech</option>
              <option value="synergy_drishti">Synergy Drishti</option>
            </select>
            {errors.structureSecond && <span className="form-error">{errors.structureSecond}</span>}
          </div>

          <div>
            <label className="form-label">Structure Third<span className='form-star'>*</span></label>
            <select name="structureThird" className="form-control" onChange={handleChange}>
              <option value="">Select Str-3</option>
              <option value="synergy_teletech_noida">Synergy Teletech Noida</option>
              <option value="synergy_drishti_noida">Synergy Drishti Noida</option>
            </select>
            {errors.structureThird && <span className="form-error">{errors.structureThird}</span>}
          </div>

          <div>
            <label className="form-label">Franchisee<span className='form-star'>*</span></label>
            <select name="franchisee" className="form-control" onChange={handleChange}>
              <option value="">Select Franchise</option>
              <option value="synergy_franchise_noida">Synergy Franchise Noida</option>
            </select>
            {errors.franchisee && <span className="form-error">{errors.franchisee}</span>}
          </div>
        </div>

        <div className='form-submit-div'>
          <button type="submit" className="form-submit-bt">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default SelectLevel;
 