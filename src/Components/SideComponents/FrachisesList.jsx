import React from 'react'

function FrachisesList() {
  return (
   
    <div>
    <div className='frachises-list'>
      <div className='frachises-bt-div'>
         <h2>Franchises List</h2>
         <div>
           <button className='frachises-add-bt'>Add Franchises</button>
           <button className='frachises-download-bt'>Download Data</button>
         </div>
      </div>

      <div className='frachises-input-div'>
        <input type="number" placeholder='Show Entries' />
        <input type="search" placeholder='Search' />
      </div>

      <div className="frachises-table">
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
                     <td>164240.49</td>
                     <td>Vivek</td>
                     <td>vivek@gmail.com</td>
                     <td>0123456789</td>
                     <td>Sector 24</td>
                     <td>Noida</td>
                     <td>GBN</td>
                     <td>UP</td>
                     <td>201301</td>
                     <td> ? </td>
                  </tr> 

                  <tr>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>?</td>
                  </tr>     
                                
             </tbody>

             <tfoot>
                <tr className='frachises-tfoot'>
                  <td colspan="12">Showing</td>
               </tr>
             </tfoot>
         </table>
     </div>
   </div>
  </div>
    
  )
}

export default FrachisesList