import Jobs from "./Jobs";
import Users from "./Users";
import React from "react";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <div>
          <h3>Recent Users</h3>
          <Users />
        </div>
        <div className="FeaturedJobs">
          <h3>Featured Jobs</h3>
          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
