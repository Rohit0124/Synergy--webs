
import React from 'react'

function StructureList() {
  return (
    <div>
      <div className='Structure-list'>
        <div className='Structure-bt-div'>
           <h2>Structure List</h2>
           <div>
             <button className='Structure-add-bt'>Add Company</button>
             <button className='Structure-download-bt'>Download Data</button>
           </div>
        </div>

        <div className='Structure-input-div'>
          <input type="number" placeholder='Show Entries' />
          <input type="search" placeholder='Search' />
        </div>

        <div className="Structure-table">
           <table>
               <thead>
                   <tr>
                     <th>Company Name</th>
                     <th>Company Oil</th>
                     <th>Total Amount</th>
                     <th>Person Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Address </th>
                     <th>City</th>
                     <th>Distict</th>
                     <th>State</th>
                     <th>Pincode</th>
                     <th>Action</th>
                   </tr>
               </thead>
 
               <tbody>
                   <tr>
                     <td>Synergy</td>
                     <td>Indian Oil</td>
                     <td>124220.49</td>
                     <td>Amit</td>
                     <td>amit@gmail.com</td>
                     <td>0123456789</td>
                     <td>Sector 24</td>
                     <td>Noida</td>
                     <td>GBN</td>
                     <td>UP</td>
                     <td>201301</td>
                     <td> ? </td>
                    </tr>                  
               </tbody>

               <tfoot>
                  <tr className='Structure-tfoot'>
                    <td colspan="12">Showing</td>
                 </tr>
               </tfoot>
           </table>
       </div>
     </div>
    </div>
  )
}

export default StructureList