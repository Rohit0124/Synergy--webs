import React from 'react'

function SalesParameter() {
  return (
    <div className='SalesParameter'>
        <h3>Sales Parameter</h3>
        <div className="sales-table">
           <table>
               <thead>
                   <tr>
                     <th>Product Name</th>
                     <th>Date</th>
                     <th>No. Of Transactions</th>
                     <th>Total Amount</th>
                     <th>Total Quantity</th>
                   </tr>
               </thead>
 
               <tbody className='tbody'>
                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-01</td>
                     <td>4</td>
                     <td>2422.89</td>
                     <td>24.84</td>
                    </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-02</td>
                     <td>2</td>
                     <td>2373.89</td>
                     <td>24.84</td>
                   </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-03</td>
                     <td>7</td>
                     <td>1233.23</td>
                     <td>24.84</td>
                    </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-04</td>
                     <td>4</td>
                     <td>1623.32</td>
                     <td>24.84</td>
                   </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-05</td>
                     <td>7</td>
                     <td>2644.43</td>
                     <td>24.84</td>
                   </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-06</td>
                     <td>6</td>
                     <td>1022.52</td>
                     <td>24.84</td>
                   </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-07</td>
                     <td>7</td>
                     <td>2333.89</td>
                     <td>24.84</td>
                   </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-08</td>
                     <td>4</td>
                     <td>2333.89</td>
                     <td>24.84</td>
                   </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-08</td>
                     <td>9</td>
                     <td>2333.89</td>
                     <td>24.84</td>
                   </tr>

                   <tr>
                     <td>High Speed Diesel</td>
                     <td>2025-04-10</td>
                     <td>3</td>
                     <td>2333.89</td>
                     <td>24.84</td>
                   </tr>
               </tbody>

               <tfoot>
                  <tr className='sales-para-tfoot'>
                    <td colspan="5">copy right 2025</td>
                 </tr>
               </tfoot>
           </table>
       </div>

    </div>
  )
}

export default SalesParameter