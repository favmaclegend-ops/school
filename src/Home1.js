import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Home1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBook,
  faClipboardList,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home1 = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Performance",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Performance Over Time",
      },
    },
  };

  return (
    <div id="div5">
      <Sidebar />
      <div className="content">
        <div className="welcome-container">
          <h1 id="wel">Welcome back, John Doe</h1>
        </div>
        <div className="cards">
          <div className="card">
            <FontAwesomeIcon icon={faChartLine} className="card-icon" />
            <div className="card-content">
              <h3>Performance</h3>
              <p>85%</p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faBook} className="card-icon" />
            <div className="card-content">
              <h3>Courses</h3>
              <p>5</p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faClipboardList} className="card-icon" />
            <div className="card-content">
              <h3>Assignments</h3>
              <p>12</p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faClock} className="card-icon" />
            <div className="card-content">
              <h3>Hours Studied</h3>
              <p>40</p>
            </div>
          </div>
        </div>
        <div className="chart">
          <Line data={data} options={options} />
        </div>
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Completed Assignment 1</li>
            <li>Scored 90% on Quiz 2</li>
            <li>Attended Math Class</li>
            <li>Submitted Project Proposal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home1;
