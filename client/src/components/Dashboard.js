import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i style={{ fontSize: "50px" }} className="large material-icons">
            control_point
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
