
import React from 'react'

function StructureList() {
  return (
    <div>
      <div className='Structure-list'>
        <div className='Structure-bt-div'>
           <h2>Structure List</h2>
           <div>
             <button className='Structure-add-bt'>Add Structure</button>
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
                     <th>Structure Name</th>
                     <th>Company</th>
                     <th>Oil Company</th>
                     <th>Structure Details</th>
                     <th>Action</th>
                    
                   </tr>
               </thead>
 
               <tbody>
                   <tr>
                     <td>-</td>
                     <td>Synergy</td>
                     <td>Indian Oil</td>
                     <td>-</td>
                     <td>?</td>
                    </tr> 
                    <tr>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>-</td>
                     <td>?</td>
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