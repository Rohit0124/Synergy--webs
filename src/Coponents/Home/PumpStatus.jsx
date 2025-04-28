import React from "react";
import SynergyPump from "../../assets/Images/SynergyPump.png";

  function PumpStatus() {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (60 / 100) * circumference;

  return (
    <div className="pumpstatus-div">
      <div className="PumpStatus">
        <h3>Pump Status</h3>
        <div className="pumpstatus1">
          <img src={SynergyPump} alt="" />
          <div className="pumpbutton">
            <button className="pumpbt">Connected</button>
            <button className="pumpbt1">Disconnected</button>
          </div>
        </div>
      </div>

      <div className="Pumpview">
        <div className="viewdiv">
          <h3>Stock <br /> Overview</h3>
          <button>All Tank Details</button>
        </div>

        <div className="tank">

          <div className="tank-status-body">
            <div className="tank-status-left">
              <h3>Tank No.</h3>
              <h4>Tank 1</h4>
              <h3>Product:</h3>
              <h4>High Speed Diesel</h4>
              <h3>Avl. Vol (Ltr):</h3>
            </div>
            <div className="tank-status-right">
              <div className="tankcircle">
                <svg width="120" height="120" className="progress-circle">
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#e6e6e6"
                    strokeWidth="4"
                    fill="transparent" />
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#4caf50"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                    style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }} /> </svg>
                <div className="progress-text">62%</div>
              </div>
            </div>
          </div>
          <div className="tankLTR">
            <div className="LTR">1548.52</div>
            <div className="onlineLTR">ONLINE</div>
          </div>
        </div>

        <div className="tank">

          <div className="tank-status-body">
            <div className="tank-status-left">
              <h3>Tank No.</h3>
              <h4>Tank 2</h4>
              <h3>Product:</h3>
              <h4>High Speed Diesel</h4>
              <h3>Avl. Vol (Ltr):</h3>
            </div>
            <div className="tank-status-right">
                <div className="tankcircle">
                  <svg width="120" height="120" className="progress-circle">
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#e6e6e6"
                    strokeWidth="4"
                    fill="transparent" />

                  <circle
                   cx="60"
                   cy="60"
                   r={radius}
                   stroke="#4caf50"
                   strokeWidth="4"
                   fill="transparent"
                   strokeDasharray={circumference}
                   strokeDashoffset={progress}
                   style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }} /> </svg>
                 <div className="progress-text">47%</div>
                </div>
            </div>
          </div>
          <div className="tankLTR">
           <div className="LTR0">0</div>
           <div className="offlineLTR">OFFLINE</div>
          </div>
        </div>

        <div className="tank">

          <div className="tank-status-body">
            <div className="tank-status-left">
              <h3>Tank No.</h3>
              <h4>Tank 3</h4>
              <h3>Product:</h3>
              <h4>High Speed Diesel</h4>
              <h3>Avl. Vol (Ltr):</h3>
            </div>

            <div className="tank-status-right">
              <div className="tankcircle">
                  <svg width="120" height="120" className="progress-circle">
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#e6e6e6"
                    strokeWidth="4"
                   fill="transparent" />

                  <circle
                   cx="60"
                   cy="60"
                   r={radius}
                   stroke="#4caf50"
                   strokeWidth="4"
                   fill="transparent"
                   strokeDasharray={circumference}
                   strokeDashoffset={progress}
                  style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }} /> </svg>
                  <div className="progress-text">24%</div>
              </div>
            </div>
          </div>

          <div className="tankLTR">
            <div className="LTR3">2000</div>
            <div className="disconnLTR">DISCONNECTED</div>
          </div>
        </div>

        <div className="tank">

          <div className="tank-status-body">
            <div className="tank-status-left">
              <h3>Tank No.</h3>
              <h4>Tank 4</h4>
              <h3>Product:</h3>
              <h4>High Speed Diesel</h4>
              <h3>Avl. Vol (Ltr):</h3>
            </div>

            <div className="tank-status-right">
               <div className="tankcircle">
                  <svg width="120" height="120" className="progress-circle">
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#e6e6e6"
                    strokeWidth="4"
                    fill="transparent" />

                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#4caf50"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                   style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }} /> </svg>
                  <div className="progress-text">86%</div>
                </div>
            </div>
          </div>
          <div className="tankLTR">
            <div className="LTR">3000</div>
            <div className="onlineLTR">ONLINE</div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default PumpStatus;
