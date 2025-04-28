import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

  function GrowthParameter() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); 

  const xValues = ['1 Apr', '2 Apr', '3 Apr', '4 Apr', '5 Apr', '6 Apr', '7Apr', '8 Apr','9 Apr', '10 Apr'];
  const yValues = [0, 10, 8, 20, 13, 30, 20, 40, 32, 100];

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: xValues,
          datasets: [
            {
              label: 'Growth Rate',
              backgroundColor: 'rgba(162, 208, 235, 0.5)',
              borderColor: 'rgb(45, 132, 214)',
              data: yValues,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="growthparameter">
      <h3>Our Growth Parameter</h3>
      <div className='growthpara-div'>
        <form className="growth-product">
          <label>Select Product</label>
            <select className="growth-form-control" required>
             <option value="">-- Select Product --</option>
             <option>High Speed Diesel</option>
             <option>Petrol</option>
             <option>Xtragreen</option>
           </select>
  
          <input type="date" required />
          <input type="date" required />  
          <button type="submit">Submit</button>
        </form>
     
        <div className="growth-chart">
         <canvas id="myChart" ref={chartRef}></canvas>
        </div>
      </div>
      
    </div>
  );
}

export default GrowthParameter;
